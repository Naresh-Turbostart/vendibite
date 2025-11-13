"use client";

import { useEffect } from "react";
import { initMixpanel } from "@/helper/mixpanelClient";

export default function MixpanelProvider() {
  useEffect(() => {
    initMixpanel();
  }, []);

  return null;
}
