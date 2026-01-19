import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster"

export const metadata: Metadata = {
  title: 'Nufin: Instant Loans',
  description: 'Préstamos al instante, sin buró. De $500 a $9,000 MXN directos a tu cuenta.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Plus+Jakarta+Sans:wght@800;900&display=swap" rel="stylesheet" />
      </head>
      <body className="font-sans text-gray-900 bg-white overflow-x-hidden">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
