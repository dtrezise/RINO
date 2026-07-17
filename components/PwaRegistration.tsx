"use client";

import { useEffect } from "react";
import { sitePath } from "@/lib/site-paths";

export function PwaRegistration() {
  useEffect(() => {
    if ("serviceWorker" in navigator && process.env.NODE_ENV === "production") {
      navigator.serviceWorker.register(sitePath("/sw.js"), { scope: sitePath("/") }).catch(() => {
        // Offline support is progressive enhancement; the site remains usable without it.
      });
    }
  }, []);

  return null;
}
