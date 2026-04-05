"use client";

import { useEffect } from "react";

export function AdSense(p: { adSlot: string }) {
  useEffect(() => {
    if (typeof window !== "undefined") {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    }
  }, []);

  return (
    <ins
      className="adsbygoogle"
      style={{ display: "block" }}
      data-ad-client={process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID}
      data-ad-slot={p.adSlot}
      data-ad-format="auto"
      data-full-width-responsive="true"
    />
  );
}
