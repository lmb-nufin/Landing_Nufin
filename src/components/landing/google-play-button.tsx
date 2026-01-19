import { GooglePlayIcon } from "@/components/icons/google-play";
import { cn } from "@/lib/utils";

type GooglePlayButtonProps = {
  className?: string;
  size?: 'default' | 'small';
};

export function GooglePlayButton({ className, size = 'default' }: GooglePlayButtonProps) {
  const isSmall = size === 'small';
  return (
    <a
      href="#aplicar"
      className={cn(
        "group inline-flex items-center justify-center gap-3 bg-black text-white rounded-2xl shadow-lg transition-all duration-300 ease-in-out transform hover:scale-[1.03] hover:shadow-black/30 active:scale-100",
        isSmall ? 'px-4 py-2' : 'px-6 py-4',
        className
      )}
    >
      <GooglePlayIcon className={cn(isSmall ? 'h-6 w-6' : 'h-8 w-8')} />
      <div className="text-left">
        <span className={cn(
          "block uppercase font-medium tracking-wider opacity-80",
          isSmall ? 'text-[9px]' : 'text-[10px]'
        )}>
          Disponible en
        </span>
        <span className={cn(
          "block font-display font-bold leading-none mt-0.5",
          isSmall ? 'text-lg' : 'text-2xl'
        )}>
          Google Play
        </span>
      </div>
    </a>
  );
}
