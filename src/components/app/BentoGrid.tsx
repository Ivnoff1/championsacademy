import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";


export function BentoGridSection() {
  return (
    <BentoGrid className="max-w-5xl mx-auto my-12">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          className={i === 1 || i === 2 ? "md:col-span-2" : ""}
        />
      ))}
    </BentoGrid>
  );
}

const items = [
  {
    title: "Academia",
    description: "Para niñas y niños de los 3 a los 12 años de edad. Con participación en las ligas más importantes de la zona poniente y 2 programas de trabajo: formativo y competitivo.",
    header: (
      <div className="h-48 w-full rounded-md overflow-hidden">
        <img
          src="https://static.wixstatic.com/media/cb8d62_a238799d786f45348c2d3d73ace3d4c2~mv2.jpg/v1/fill/w_486,h_575,al_t,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/cb8d62_a238799d786f45348c2d3d73ace3d4c2~mv2.jpg"
          alt="Entrenamiento innovador de fútbol para niños"
          className="w-full h-full object-cover object-center"
        />
      </div>
    ),
  },
  {
    title: "Escuelas",
    description: "Servicio a instituciones en donde adaptamos nuestro modelo formativo y de trabajo a las necesidades de cada cliente. Disponible en las instalaciones de los colegios o en Champions.",
    header: (
      <div className="h-48 w-full rounded-md overflow-hidden">
        <img
          src="https://images.pexels.com/photos/17896212/pexels-photo-17896212.jpeg"
          alt="Dimensiones de cancha de fútbol oficial FIFA para niños"
          className="w-full h-full object-cover object-center"
        />
      </div>
    ),
  },
  {
    title: "Liga",
    description: "¡Inscribe tu equipo y lucha por el campeonato! Torneos femeniles, varoniles y empresariales entre semana desde las 19:30 hrs y fines de semana desde las 8:00 hrs.",
    header: (
      <div className="h-48 w-full rounded-md overflow-hidden">
        <img
          src="https://images.pexels.com/photos/28497585/pexels-photo-28497585.jpeg"
          alt="Niños en un entorno seguro de fútbol con supervisión"
          className="w-full h-full object-cover object-top"
        />
      </div>
    ),
  },
  {
    title: "Fiestas",
    description:
      "¡La fiesta de sus sueños! Paquetes personalizados para cualquier tipo de evento con temática de futbol, con trofeos, medallas, mundialito y premiaciones.",
    header: (
      <div className="h-48 w-full rounded-md overflow-hidden">
        <img
          src="https://static.wixstatic.com/media/cb8d62_f55e91663eee415fa0b01b21e69104c1~mv2.jpg/v1/fill/w_345,h_575,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/cb8d62_f55e91663eee415fa0b01b21e69104c1~mv2.jpg"
          alt="Entrenadores certificados enseñando fútbol a niños"
          className="w-full h-full object-cover object-center"
        />
      </div>
    ),
  },
];