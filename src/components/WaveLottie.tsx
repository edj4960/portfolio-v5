"use client";

import EmojiLottie from "@/components/EmojiLottie";

const LOTTIE_URL =
  "https://fonts.gstatic.com/s/e/notoemoji/latest/1f44b_1f3fb/lottie.json";
const START_DELAY_MS = 1200;
const PLAY_DURATION_MS = 2005;
const REPEAT_DELAY_MS = 7000;

type WaveLottieProps = {
  className?: string;
};

export default function WaveLottie({ className }: WaveLottieProps) {
  return (
    <EmojiLottie
      url={LOTTIE_URL}
      className={className}
      startDelayMs={START_DELAY_MS}
      playDurationMs={PLAY_DURATION_MS}
      repeatDelayMs={REPEAT_DELAY_MS}
    />
  );
}
