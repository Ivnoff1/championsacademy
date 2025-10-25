"use client";

import Link from "next/link";
import Logo from "../Logo";

const footerConfig = {
  navigation: {
    title: "Generales",
    links: [
      { label: "Instalaciones", href: "#instalaciones" },
      { label: "Servicios", href: "#servicios" },
      { label: "Contacto", href: "contacto" },
      //   { label: "Preguntas Frecuentes", href: "#faqs" },
    ],
  },
  contact: {
    title: "Contáctanos",
    info: [
      {
        label: "Email",
        value: "championsacademymx@gmail.com",
        href: "mailto:championsacademymx@gmail.com",
      },
      {
        label: "Teléfono",
        value: "+52 (56) 2818 0926",
        href: "tel:+525628180926",
      },
      {
        label: "Ubicación",
        value:
          "Carr. México-Toluca 2846B, Lomas de Vista Hermosa, Cuajimalpa de Morelos, 05100 Ciudad de México, CDMX",
      },
    ],
  },
  schedules: {
    title: "Horarios de atención",
    info: [
      {
        label: "Lunes a Viernes",
        value: "Lunes a Viernes: 12:00 a 23:00",
      },
      {
        label: "Fin de semana",
        value: "Fin de semana: 8:00 a 15:00",
      },
    ],
  },
  legal: {
    copyright: `© ${new Date().getFullYear()} Champions Academy MX Todos los derechos reservados.`,
    links: [
      { label: "Términos de servicio", href: "#" },
      { label: "Política de privacidad", href: "#" },
    ],
  },
};

export default function Footer() {
  return (
    <footer className="p-2 border-t bg-black">
      {/* Main Content */}
      <div className=" py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            {/* <div>
              <h3 className="text-2xl font-bold text-white">
                {footerConfig.company.name}
              </h3>
            </div> */}
            {/* <Link href="/">
              <div className="flex items-center gap-2">
                <div className="relative size-28">
                  <Image
                    src="/logo-w.svg"
                    alt="Logo Mitfin Value"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </div>
            </Link> */}
            <div>
              <Logo variant="black" />
            </div>

            {/* Navigation Links */}
            <div>
              <h3 className="text-md font-semibold text-white">
                {footerConfig.navigation.title}
              </h3>
              <ul className="mt-4 space-y-2">
                {footerConfig.navigation.links.map((item, index) => (
                  <li
                    key={index}
                    className="text-muted-foreground hover:underline"
                  >
                    <Link href={item.href}>{item.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-md font-semibold text-white">
                {footerConfig.contact.title}
              </h3>
              <ul className="mt-4 space-y-2">
                {footerConfig.contact.info.map((item, index) => (
                  <li
                    key={index}
                    className="text-muted-foreground hover:underline"
                  >
                    {item.href ? (
                      <a href={item.href}>{item.value}</a>
                    ) : (
                      item.value
                    )}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-md font-semibold text-white">
                {footerConfig.schedules.title}
              </h3>
              <ul className="mt-4 space-y-2">
                {footerConfig.schedules.info.map((item, index) => (
                  <li key={index} className="text-muted-foreground">
                    {item.value}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Legal Section */}
          <div className="mt-10 pt-6 text-sm flex flex-col md:flex-row justify-between items-center border-t">
            <p className="text-white">
              {footerConfig.legal.copyright}
            </p>
            <div className="mt-4 md:mt-0 flex space-x-4">
              {footerConfig.legal.links.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="text-muted-foreground hover:underline"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
