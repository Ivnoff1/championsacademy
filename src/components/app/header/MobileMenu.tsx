"use client";

import { IoFootballOutline } from "react-icons/io5";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import Link from "next/link";
import { useState } from "react";

export default function MobileMenu() {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="secondary">
          <IoFootballOutline />
        </Button>
      </SheetTrigger>
      <SheetContent className="rounded-l-xl">
        <SheetHeader className="pb-0">
          <SheetTitle className="bg-black w-fit text-white p-2 text-md font-normal">
            #TheCampionsMx
          </SheetTitle>
          <SheetDescription>
            La academia con más campeonatos año tras año.
          </SheetDescription>
        </SheetHeader>
        <div className="flex flex-col items-start">
          <Button
            asChild
            variant="link"
            size="lg"
            onClick={() => setOpen(false)}
          >
            <Link href="/">Inicio</Link>
          </Button>
          <Button
            asChild
            variant="link"
            size="lg"
            onClick={() => setOpen(false)}
          >
            <Link href="#servicios">Servicios</Link>
          </Button>
          <Button
            asChild
            variant="link"
            size="lg"
            onClick={() => setOpen(false)}
          >
            <Link href="#instalaciones">Instalaciones</Link>
          </Button>
          {/* <Button
            asChild
            variant="link"
            size="lg"
            onClick={() => setOpen(false)}
          >
            <Link href="/galeria">Galería</Link>
          </Button> */}
        </div>
        <SheetFooter>
          <Button asChild onClick={() => setOpen(false)}>
            <Link href="#contacto">Contáctanos</Link>
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
