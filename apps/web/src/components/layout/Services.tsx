import Image from "next/image";
import { Card } from "../ui/card";
import Service1 from "@/assets/services/ux-ui.png";
import Service2 from "@/assets/services/design-and-development.png";
import Service3 from "@/assets/services/maintenance-and-support.png";
import Service4 from "@/assets/services/seo.png";
import Service5 from "@/assets/services/hosting.png";
import Service6 from "@/assets/services/strategy.png";

export default function Services() {
  const services = [
    {
      title: "UI/UX ",
      image: Service1,
      description:
        "Diseños únicos y atractivos que reflejan la identidad de tu marca. Enfoque en la usabilidad y la experiencia del usuario.",
    },
    {
      title: "Diseño y Desarrollo Personalizado",
      image: Service2,
      description:
        "Soluciones web robustas y escalables. Nuestro equipo tiene la experiencia para llevar tu proyecto al siguiente nivel.",
    },
    {
      title: "Mantenimiento y Soporte Técnico",
      image: Service3,
      description:
        "Actualizaciones de seguridad, corrección de  errores técnicos, y enfoque en el rendimiento y la seguridad.",
    },
    {
      title: "SEO",
      image: Service4,
      description:
        "Visibilidad de tu sitio web en los motores de búsqueda mediante estrategias SEO para atraer más tráfico orgánico y aumentar tu presencia en línea.",
    },
    {
      title: "Hosting",
      image: Service5,
      description:
        "Hosting completo con el dominio que necesites, tu sitio web estará siempre en línea y funcionando correctamente.",
    },
    {
      title: "Consultoria y estrategia digital",
      image: Service6,
      description:
        "Detectamos el problema o la necesidad de tu marca y realizamos un análisis exhaustivo de las características de tu negocio.",
    },
  ];

  return (
    <section id="services" className="pb-56 pt-8">
      <div className="container mx-auto flex min-h-screen max-w-6xl flex-col items-center px-4">
        <div className="mt-20 flex max-w-xl flex-col items-center justify-center text-center">
          <h1 className="mb-2 font-serif text-2xl font-medium sm:text-3xl md:text-4xl">
            Nuestros Servicios
          </h1>
          <p className="leading-tight text-zinc-600 md:text-lg">
            Soluciones personalizadas que se adaptan a tus necesidades
          </p>
        </div>
        <div className="mt-8 grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Card
              key={index}
              className="overflow-hidden rounded-xl border border-zinc-300 bg-white"
            >
              <div className="relative aspect-video w-full">
                <Image
                  src={service.image}
                  alt={service.title}
                  className="w-full object-cover grayscale"
                  fill
                />
              </div>

              <div className="p-4">
                <h2 className="mb-2 font-serif text-lg font-bold">
                  {service.title}
                </h2>

                <p className="text-zinc-600">{service.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
