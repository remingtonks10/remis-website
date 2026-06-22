"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    jotformEmbedHandler?: (selector: string, domain: string) => void;
  }
}

export function JotformEmbed() {
  useEffect(() => {
    const scriptId = "jotform-embed-handler";

    function initializeEmbed() {
      window.jotformEmbedHandler?.(
        "iframe[id='JotFormIFrame-261712986700157']",
        "https://pci.jotform.com/",
      );
    }

    if (document.getElementById(scriptId)) {
      initializeEmbed();
      return;
    }

    const script = document.createElement("script");
    script.id = scriptId;
    script.src = "https://cdn.jotfor.ms/s/umd/latest/for-form-embed-handler.js";
    script.async = true;
    script.onload = initializeEmbed;
    document.body.appendChild(script);
  }, []);

  return (
    <div className="overflow-hidden rounded border border-[var(--ink-soft)] bg-white">
      <iframe
        id="JotFormIFrame-261712986700157"
        title="July 3, 2026 Feed Order Form"
        onLoad={() => window.parent.scrollTo(0, 0)}
        {...{ allowtransparency: "true" }}
        allow="geolocation; microphone; camera; fullscreen; payment"
        src="https://pci.jotform.com/form/261712986700157"
        frameBorder="0"
        style={{ minWidth: "100%", maxWidth: "100%", height: "539px", border: "none" }}
        scrolling="no"
      />
    </div>
  );
}
