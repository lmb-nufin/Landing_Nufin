import { cn } from "@/lib/utils";

export function GooglePlayButton({ className }: { className?: string }) {
  return (
    <a
      href="#aplicar"
      className={cn(
        "inline-block transition-transform duration-300 ease-in-out transform hover:scale-105 active:scale-100",
        className
      )}
    >
      <img
        src="/images/GPButton.png"
        alt="Disponible en Google Play"
        className="h-auto w-full block"
      />
    </a>
  );
}
