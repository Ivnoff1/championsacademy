import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

type Testimonial = {
  name: string;
  role: string;
  image: string;
  quote: string;
};

const testimonials: Testimonial[] = [
  {
    name: "María López",
    role: "Ex alumna y entrenadora",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
    quote:
      "Champions me dio la base para ganar mi primer campeonato. Es la academia top en México.",
  },
  {
    name: "Carlos Ramírez",
    role: "Jugador U16",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    quote:
      "Más de 50 campeonatos no mienten. Aquí aprendo a ganar con humildad y equipo.",
  },
  {
    name: "Ana García",
    role: "Madre de jugadora U10",
    image: "https://randomuser.me/api/portraits/women/22.jpg",
    quote:
      "Ver a mi hija brillar en torneos es un sueño. Gracias por el enfoque en excelencia y valores.",
  },
  {
    name: "Miguel Hernández",
    role: "Entrenador asistente",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    quote:
      "Trabajar en Champions es inspirador. Año tras año, formamos campeones con corazón.",
  },
  {
    name: "Sofía Martínez",
    role: "Jugadora U14",
    image: "https://randomuser.me/api/portraits/women/32.jpg",
    quote:
      "¡La academia con más trofeos! Me siento parte de una familia ganadora.",
  },
  {
    name: "Roberto Sánchez",
    role: "Padre de jugador U18",
    image: "https://randomuser.me/api/portraits/men/12.jpg",
    quote:
      "El mejor lugar para desarrollar talento. Mi hijo ya sueña con lo profesional.",
  },
  {
    name: "Laura Torres",
    role: "Ex campeona U12",
    image: "https://randomuser.me/api/portraits/women/5.jpg",
    quote: "Champions me enseñó disciplina y pasión. ¡Recomiendo al 100%!",
  },
  {
    name: "Diego Vargas",
    role: "Jugador U10",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    quote:
      "¡Ganamos nuestro primer campeonato aquí! Los entrenadores son geniales.",
  },
  {
    name: "Elena Ruiz",
    role: "Madre y voluntaria",
    image: "https://randomuser.me/api/portraits/women/18.jpg",
    quote:
      "Una academia que prioriza valores humanos junto al fútbol. Orgullosa de ser parte.",
  },
];

const chunkArray = (
  array: Testimonial[],
  chunkSize: number
): Testimonial[][] => {
  const result: Testimonial[][] = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    result.push(array.slice(i, i + chunkSize));
  }
  return result;
};

const testimonialChunks = chunkArray(
  testimonials,
  Math.ceil(testimonials.length / 3)
);

export default function Testimonials() {
  return (
    <section>
      <div className="py-16 md:py-32 px-2">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center max-w-xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-semibold">
              Lo Que Nuestros Clientes Dicen de Nosotros
            </h2>
          </div>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 md:mt-12 lg:grid-cols-3">
            {testimonialChunks.map((chunk, chunkIndex) => (
              <div key={chunkIndex} className="space-y-3">
                {chunk.map(({ name, role, quote, image }, index) => (
                  <Card key={index}>
                    <CardContent className="grid grid-cols-[auto_1fr] gap-3">
                      <Avatar className="size-9">
                        <AvatarImage
                          alt={name}
                          src={image}
                          loading="lazy"
                          width="120"
                          height="120"
                        />
                        <AvatarFallback>ST</AvatarFallback>
                      </Avatar>

                      <div>
                        <h3 className="font-medium">{name}</h3>

                        <span className="text-muted-foreground block text-sm tracking-wide">
                          {role}
                        </span>

                        <blockquote className="mt-3">
                          <p className="text-gray-700 dark:text-gray-300">
                            {quote}
                          </p>
                        </blockquote>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
