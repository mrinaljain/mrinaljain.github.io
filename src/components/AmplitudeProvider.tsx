"use client";

import { initAmplitude } from "@/app/amplitude";
import { useEffect } from "react";

export default function AmplitudeProvider() {
  useEffect(() => {
    initAmplitude();
  }, []);
  return null;
}
