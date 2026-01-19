"use client";

import React, { useState } from 'react';
import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";
import { Logo } from "./logo";
import { Button } from '../ui/button';
import { GooglePlayButton } from './google-play-button';

const navLinks = [
  { href: "#inicio", label: "Inicio" },
  { href: "#como-funciona", label: "Cómo funciona" },
  { href: "#servicio", label: "Servicio al cliente" },
  { href: "#nosotros", label: "Sobre nosotros" },
];

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm h-16 md:h-20">
      <div className="max-w-7xl mx-auto px-4 md:px-6 h-full flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <Logo className="h-8 md:h-11" />
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-bold text-gray-600 hover:text-electric transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <GooglePlayButton className="w-36" />
        </nav>

        <div className="md:hidden">
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <nav className="grid gap-6 text-lg font-medium p-6">
                <Logo className="h-10" />
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-foreground/70 transition-colors hover:text-primary"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
                <GooglePlayButton className="w-44" />
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
