"use client";

import { initAmplitude } from "@/src/app/amplitude";
import { useEffect } from "react";

export default function AmplitudeProvider() {
  useEffect(() => {
    initAmplitude();
  }, []);
  return null;
}
