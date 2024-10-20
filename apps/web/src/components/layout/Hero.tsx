import Link from "next/link";
import { Button } from "../ui/button";
import UploadcareImage from "../UploadcareImage";

export default function Hero() {
  return (
    <header id="home" className="flex min-h-screen overflow-hidden">
      <div className="pattern flex h-full w-full items-center pb-56 pt-40 md:pt-52">
        <div className="container mx-auto px-4">
          <div className="mx-auto flex w-full flex-col items-center">
            <h1 className="mb-4 text-center font-serif text-4xl font-medium lg:text-5xl">
              Desarrollo web especializado
            </h1>
            <p className="mb-8 max-w-lg text-center leading-tight text-zinc-600 md:text-xl lg:text-lg">
              Transformamos tus ideas en realidades digitales. Tu imaginas,
              nosotros lo creamos.
            </p>
            <div className="flex w-full flex-col items-center justify-center gap-2 sm:flex-row">
              <Button asChild size="sm" className="w-full sm:w-auto">
                <Link href="#contact">Empieza tu proyecto</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="sm"
                className="w-full sm:w-auto"
              >
                <Link href="#projects">Trabajos anteriores</Link>
              </Button>
            </div>
          </div>
          <div className="mx-auto mt-16 flex max-w-6xl items-center justify-center md:mt-24">
            <div className="aspect-video w-full rounded-[8px] bg-zinc-300 p-[4px] shadow-md md:rounded-[17px]">
              <div className="relative h-full w-full overflow-hidden rounded-[4px] md:rounded-[12px]">
                <UploadcareImage
                  uuid="ae834506-e052-4fc0-9e0e-2818e1a09dd9"
                  alt="website mockup"
                  sizes="(max-width: 1525px) 100vw, (max-width:  2288px) 75vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
