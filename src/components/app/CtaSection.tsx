"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

interface HeroProps {
  id?: string;
  title: string;
  imageSrc: string;
  className?: string;
}

export const HeroTwo: React.FC<HeroProps> = ({
  title,
  imageSrc,
  className,
  id,
}) => {
  return (
    <section
      id={id}
      className={cn(
        "relative w-full min-h-[85vh] flex flex-col justify-center items-center overflow-hidden",
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
      <div className="absolute inset-0 bg-black/60" />

      {/* Contenido */}
      <div className="relative z-10 px-6 max-w-2xl mx-auto text-center space-y-6 my-16">
        <blockquote className="mt-6 border-l-2 pl-6 italic text-white text-2xl">{title}</blockquote>
      </div>
    </section>
  );
};
