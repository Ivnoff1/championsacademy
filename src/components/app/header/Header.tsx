"use client";

import { Button } from "@/components/ui/button";
import Logo from "../Logo";
import Link from "next/link";
import { useIsMobile } from "@/hooks/use-mobile";
import MobileMenu from "./MobileMenu";

const Links: { label: string; href: string; isActive: boolean }[] = [
  {
    label: "Inicio",
    href: "/",
    isActive: true,
  },
  {
    label: "Servicios",
    href: "#servicios",
    isActive: true,
  },
  {
    label: "Instalaciones",
    href: "#instalaciones",
    isActive: true,
  },
];

export default function Header() {
  const isMobile = useIsMobile();

  if (isMobile) return <MobileHeader />;

  return <DesktopHeader />;
}

function DesktopHeader() {
  return (
    <header className="bg-black sticky top-0 z-50 hidden lg:flex min-w-full p-4">
      <div className="grid grid-cols-3 items-center justify-center w-full">
        <Logo />

        <div className="flex items-center justify-center">
          {Links.map((link, index) => (
            <Button
              key={index}
              className="text-base text-white"
              variant="link"
              asChild
            >
              <Link href={link.href}>{link.label}</Link>
            </Button>
          ))}
        </div>

        <div className="flex justify-end">
          <Button asChild variant="secondary">
            <Link href="#contacto">Contáctanos</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}

function MobileHeader() {
  return (
    <header className="bg-black sticky top-0 z-50 flex justify-between p-4 items-center min-w-full border-b">
      <Logo />
      <MobileMenu />
    </header>
  );
}
