"use client";

import { useEffect, useRef, useState } from "react";
import Lottie, { type LottieRefCurrentProps } from "lottie-react";

const LOTTIE_URL =
  "https://fonts.gstatic.com/s/e/notoemoji/latest/1f44b_1f3fb/lottie.json";
const START_DELAY_MS = 1200;
const PLAY_DURATION_MS = 2005;
const REPEAT_DELAY_MS = 7000;

type WaveLottieProps = {
  className?: string;
};

export default function WaveLottie({ className }: WaveLottieProps) {
  const lottieRef = useRef<LottieRefCurrentProps | null>(null);
  const [animationData, setAnimationData] = useState<object | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    const load = async () => {
      try {
        const response = await fetch(LOTTIE_URL, {
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
  }, []);

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
    }, START_DELAY_MS);

    let stopTimer = window.setTimeout(() => {
      lottieRef.current?.stop();
    }, START_DELAY_MS + PLAY_DURATION_MS);

    const interval = window.setInterval(() => {
      lottieRef.current?.goToAndPlay(0, true);
      window.setTimeout(() => {
        lottieRef.current?.stop();
      }, PLAY_DURATION_MS);
    }, REPEAT_DELAY_MS);

    return () => {
      window.clearTimeout(startTimer);
      window.clearTimeout(stopTimer);
      window.clearInterval(interval);
    };
  }, [animationData]);

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
