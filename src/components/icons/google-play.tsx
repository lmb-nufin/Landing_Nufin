import type { SVGProps } from "react";

export function GooglePlayIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M3 7.5L3 16.5C3 17.3284 3.67157 18 4.5 18L13.5 18C14.3284 18 15 17.3284 15 16.5L15 7.5C15 6.67157 14.3284 6 13.5 6L4.5 6C3.67157 6 3 6.67157 3 7.5Z" />
      <path d="M8 9L11 11.5L8 14" />
      <path d="M16.5 10.5L19.5 12L16.5 13.5V10.5Z" />
    </svg>
  );
}
