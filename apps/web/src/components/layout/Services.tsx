import { Card } from "../ui/card";
import UploadcareImage from "../UploadcareImage";

export default function Services() {
  const services = [
    {
      title: "UI/UX ",
      image: "3abe6b76-a337-479f-9368-981ec008b57f",
      description:
        "Diseños únicos y atractivos que reflejan la identidad de tu marca. Enfoque en la usabilidad y la experiencia del usuario.",
    },
    {
      title: "Diseño y Desarrollo Personalizado",
      image: "f978b9d2-9385-4a80-b7a8-de1b325d2cd1",
      description:
        "Soluciones web robustas y escalables. Nuestro equipo tiene la experiencia para llevar tu proyecto al siguiente nivel.",
    },
    {
      title: "Mantenimiento y Soporte Técnico",
      image: "8eb30328-8c1a-41cd-88c6-176f64f8a84b",
      description:
        "Actualizaciones de seguridad, corrección de  errores técnicos, y enfoque en el rendimiento y la seguridad.",
    },
    {
      title: "SEO",
      image: "cd32526a-8f02-4fe7-a747-364fd4e5f01c",
      description:
        "Visibilidad de tu sitio web en los motores de búsqueda mediante estrategias SEO para atraer más tráfico orgánico y aumentar tu presencia en línea.",
    },
    {
      title: "Hosting",
      image: "909a357b-e51a-461a-8d72-df879f8d7424",
      description:
        "Hosting completo con el dominio que necesites, tu sitio web estará siempre en línea y funcionando correctamente.",
    },
    {
      title: "Consultoria y estrategia digital",
      image: "8c9ce97f-c187-4a2f-8a70-ab0ab2943c68",
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
                <UploadcareImage uuid={service.image} alt={service.title} />
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
