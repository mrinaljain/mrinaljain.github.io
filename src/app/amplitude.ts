"use client"; 

import * as amplitude from "@amplitude/analytics-browser";
import { sessionReplayPlugin } from '@amplitude/plugin-session-replay-browser';

export function initAmplitude() {
  if (typeof window === "undefined") return;
  amplitude.add(sessionReplayPlugin());
  amplitude.init(
    process.env.NEXT_PUBLIC_AMPLITUDE_API_KEY!,
    undefined,
    {
      defaultTracking: true, // enable default tracking of page views, clicks, etc.
    }
  );
}

export default amplitude;
