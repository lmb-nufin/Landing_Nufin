import { cn } from "@/lib/utils";

export function GooglePlayButton({ className }: { className?: string }) {
  return (
    <a
      href="#aplicar"
      className={cn(
        "inline-block rounded-lg overflow-hidden shadow-lg transition-all duration-300 ease-in-out transform hover:scale-[1.03] hover:shadow-black/20 active:scale-100",
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
