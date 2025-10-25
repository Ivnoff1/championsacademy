"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface HeroProps {
  id?: string;
  title: string;
  subtitle?: string;
  ctaText?: string;
  ctaHref?: string;
  imageSrc: string;
  className?: string;
}

export const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  ctaText = "Comenzar ahora",
  ctaHref = "#",
  imageSrc,
  className,
  id,
}) => {
  return (
    <section
      id={id}
      className={cn(
        "relative w-full min-h-[85vh] flex flex-col justify-end items-start overflow-hidden",
        className
      )}
    >
      {/* Imagen de fondo */}
      <Image
        src={imageSrc}
        alt="Fondo Hero"
        fill
        className="object-cover object-center"
        priority
      />

      {/* Capa oscura para contraste */}
      <div className="absolute inset-0 bg-black/50 dark:bg-black/60" />

      {/* Contenido */}
      <div className="relative z-10 px-6 max-w-2xl space-y-6 my-16">
        <h1 className="text-5xl md:text-7xl font-bold text-white">{title}</h1>

        {subtitle && <p className="text-white"> {subtitle}</p>}

        {ctaText && (
          <Button asChild variant="secondary">
            <Link href={ctaHref}>{ctaText}</Link>
          </Button>
        )}
      </div>
    </section>
  );
};
