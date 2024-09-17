import Image from "next/image";
import { Card } from "../ui/card";
import AtenasImage from "@/assets/hero.jpg";

export default function Services() {
  const services = [
    {
      title: "UI/UX ",
      image: AtenasImage,
      description:
        "Creamos diseños únicos y atractivos que reflejan la identidad de tu marca. Nuestro enfoque en la usabilidad y la experiencia del usuario garantiza que tu sitio web no solo sea visualmente impresionante, sino también fácil de navegar.",
    },
    {
      title: "Diseño y Desarrollo Web Personalizado:",
      image: AtenasImage,
      description:
        "Desarrollamos soluciones web robustas y escalables. Ya sea que necesites un sitio web corporativo, una tienda en línea o una aplicación web personalizada, nuestro equipo tiene la experiencia para llevar tu proyecto al siguiente nivel.",
    },
    {
      title: "Mantenimiento y Soporte Técnico",
      image: AtenasImage,
      description:
        "Nos encargamos de mantener tu sitio web en óptimas condiciones, mejorando su velocidad y eficiencia para una mejor experiencia de usuario. Implementamos actualizaciones de seguridad, corregimos errores técnicos, y supervisamos el rendimiento y la seguridad.",
    },
    {
      title: "SEO",
      image: AtenasImage,
      description:
        "Mejoramos la visibilidad de tu sitio web en los motores de búsqueda mediante estrategias SEO avanzadas. Desde la investigación de palabras clave hasta la optimización del contenido, trabajamos para atraer más tráfico orgánico y aumentar tu presencia en línea.",
    },
    {
      title: "Hosting",
      image: AtenasImage,
      description:
        "Ofrecemos hosting completo con el dominio que necesites, asegurando que tu sitio web esté siempre en línea y funcionando correctamente. Este servicio opcional, te proporciona una gestión sin preocupaciones.",
    },
    {
      title: "Consultaria y estrategia digital:",
      image: AtenasImage,
      description:
        "Detectamos el problema o la necesidad de tu marca y realizamos un análisis exhaustivo de las características de tu negocio. Conceptualizamos, diseñamos y producimos una propuesta a la altura de tus necesidades. Te asesoramos en estrategias digitales para definir y alcanzar tus objetivos online.",
    },
  ];

  return (
    <section id="services" className="bg-zinc-100">
      <div className="container mx-auto flex min-h-screen max-w-6xl flex-col items-center px-4">
        <div className="mt-20 flex max-w-xl flex-col items-center justify-center gap-4 text-center">
          <h1 className="font-serif text-2xl font-bold sm:text-3xl md:text-4xl">
            Servicios
          </h1>
          <p className="leading-tight text-zinc-500 md:text-xl">
            En Citium, creemos que la verdadera fortaleza radica en la
            resiliencia y la adaptabilidad. Brindandote soluciones
            personalizadas que se adaptan a tus necesidades y objetivos.
          </p>
        </div>
        <div className="grid w-full grid-cols-1 gap-4 py-20 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Card
              key={index}
              className="overflow-hidden rounded-xl border border-zinc-300 bg-white"
            >
              <Image
                src={AtenasImage}
                width={400}
                height={300}
                alt="atenas"
                className="w-full grayscale"
              />

              <div className="p-4">
                <h2 className="mb-2 font-serif text-lg font-bold">
                  {service.title}
                </h2>
                <p className="text-zinc-500">{service.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}