"use client";

import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <img
      src="/images/nufinlogo.jpg"
      alt="Nufin Logo"
      className={cn("w-auto object-contain", className)}
    />
  );
}
