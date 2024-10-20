import { Card } from "../ui/card";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import UploadcareImage from "../UploadcareImage";

type Project = {
  title: string;
  image: string;
  description: string;
  url: string;
};

export default function Projects() {
  const projects: Project[] = [
    {
      title: "CUDI",
      image: "1853ad79-fb7d-4095-858c-f82109449ed7",
      url: "https://www.cudicoders.dev",
      description:
        "CUDI es una plataforma innovadora que conecta a programadores universitarios apasionados por la tecnología y la innovación. A través de eventos, talleres y hackathons, ofrece oportunidades únicas para el desarrollo profesional y personal.",
    },
  ];

  return (
    <section id="projects" className="pb-56 pt-8">
      <div className="container mx-auto flex max-w-6xl flex-col items-center px-4">
        <div className="mt-20 flex max-w-xl flex-col items-center justify-center gap-4 text-center">
          <h1 className="font-serif text-2xl font-medium sm:text-3xl md:text-4xl">
            Nuestros Proyectos
          </h1>
          <p className="leading-tight text-zinc-500 md:text-xl">
            Algunos de nuestros trabajos más destacados
          </p>
        </div>
        <div className="mt-8 flex w-full flex-col gap-4">
          {projects.map((project, index) => (
            <Link
              key={index}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <Card
                key={index}
                className="flex flex-wrap overflow-hidden rounded-xl border border-zinc-300 bg-zinc-50 shadow-md group-hover:border-blue-200 group-hover:bg-blue-50/20"
              >
                <div className="w-full p-4 md:w-1/2">
                  <h2 className="mb-2 flex items-center font-serif text-2xl font-bold group-hover:text-blue-600">
                    {project.title}

                    <ExternalLink className="ml-2 transition-all group-hover:-translate-y-1" />
                  </h2>
                  <p className="text-zinc-500">{project.description}</p>
                </div>
                <div className="aspect-video w-full p-4 md:w-1/2">
                  <div className="h-full w-full overflow-hidden rounded-xl">
                    <UploadcareImage uuid={project.image} alt={project.title} />
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
