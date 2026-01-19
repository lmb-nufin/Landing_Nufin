"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";

const BRAND_LOGO_URL = `https://storage.googleapis.com/demos-pipeline-artifacts-api/api/projects/666c81ca-9c4c-4235-8656-78e727914467/sessions/75f32483-3631-4148-89c0-8260a9282367/prompts/10/image_0.png`;

export function Logo({ className }: { className?: string }) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <span className={cn("text-2xl font-display font-black text-electric tracking-tighter", className)}>
        nufin
      </span>
    );
  }

  return (
    <img
      src={BRAND_LOGO_URL}
      alt="Nufin Logo"
      onError={() => setHasError(true)}
      className={cn("w-auto object-contain transition-opacity duration-300", className)}
      style={{ minWidth: "100px" }}
    />
  );
}
