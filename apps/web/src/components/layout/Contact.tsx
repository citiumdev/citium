import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <section id="contact" className="py-32">
      <div className="container mx-auto flex max-w-6xl flex-wrap px-4">
        <div className="mb-12 flex w-full flex-col p-0 md:w-1/2 md:pr-4">
          <h1 className="text-center font-serif text-2xl font-medium leading-tight md:text-left md:text-3xl lg:text-5xl">
            ¡Cuéntanos tu idea!
          </h1>
          <p className="mt-4 text-center leading-tight text-zinc-600 md:text-left md:text-lg lg:text-lg">
            Ya sea que necesites un rediseño completo de tu sitio web,
            renovarlo, o cualquier solución digital, estamos aquí para ayudarte
            a convertir tu visión en realidad.
          </p>
        </div>
        <div className="flex w-full justify-center md:w-1/2">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
