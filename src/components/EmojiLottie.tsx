"use client";

import { useEffect, useRef, useState } from "react";
import Lottie, { type LottieRefCurrentProps } from "lottie-react";

type EmojiLottieProps = {
  url: string;
  className?: string;
  startDelayMs?: number;
  playDurationMs?: number;
  repeatDelayMs?: number;
};

const DEFAULT_START_DELAY_MS = 1200;
const DEFAULT_PLAY_DURATION_MS = 2010;
const DEFAULT_REPEAT_DELAY_MS = 7000;

export default function EmojiLottie({
  url,
  className,
  startDelayMs = DEFAULT_START_DELAY_MS,
  playDurationMs = DEFAULT_PLAY_DURATION_MS,
  repeatDelayMs = DEFAULT_REPEAT_DELAY_MS,
}: EmojiLottieProps) {
  const lottieRef = useRef<LottieRefCurrentProps | null>(null);
  const [animationData, setAnimationData] = useState<object | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    const load = async () => {
      try {
        const response = await fetch(url, {
          signal: controller.signal,
        });
        if (!response.ok) {
          return;
        }
        const json = (await response.json()) as object;
        setAnimationData(json);
      } catch (error) {
        if ((error as Error).name !== "AbortError") {
          setAnimationData(null);
        }
      }
    };

    load();

    return () => {
      controller.abort();
    };
  }, [url]);

  useEffect(() => {
    if (!animationData) {
      return;
    }

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      return;
    }

    let startTimer = window.setTimeout(() => {
      lottieRef.current?.goToAndPlay(0, true);
    }, startDelayMs);

    let stopTimer = window.setTimeout(() => {
      lottieRef.current?.stop();
    }, startDelayMs + playDurationMs);

    const interval = window.setInterval(() => {
      lottieRef.current?.goToAndPlay(0, true);
      window.setTimeout(() => {
        lottieRef.current?.stop();
      }, playDurationMs);
    }, repeatDelayMs);

    return () => {
      window.clearTimeout(startTimer);
      window.clearTimeout(stopTimer);
      window.clearInterval(interval);
    };
  }, [animationData, playDurationMs, repeatDelayMs, startDelayMs]);

  if (!animationData) {
    return null;
  }

  return (
    <span className={className} aria-hidden="true">
      <Lottie
        lottieRef={lottieRef}
        animationData={animationData}
        autoplay={false}
        loop
      />
    </span>
  );
}
