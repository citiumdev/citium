import Image from "next/image";
import Logo from "@/assets/logo.svg";
import Link from "next/link";
import { Button } from "../ui/button";
import NavbarMenu from "./NavbarMenu";

export default function Navbar() {
  return (
    <nav className="fixed top-0 z-50 w-full border-b bg-white">
      <div className="container mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Image
          src={Logo}
          width={150}
          height={72}
          alt="logo"
          className="h-auto w-28"
        />
        <div className="hidden items-center gap-4 md:flex">
          <Button asChild variant="ghost" size="sm">
            <Link href="#home">Inicio</Link>
          </Button>
          <Button asChild variant="ghost" size="sm">
            <Link href="#services">Servicios</Link>
          </Button>
          <Button asChild variant="ghost" size="sm">
            <Link href="#projects">Proyectos</Link>
          </Button>
          <Button asChild variant="ghost" size="sm">
            <Link href="#contact">Contacto</Link>
          </Button>
        </div>
        <Button asChild className="hidden md:flex" size="sm">
          <Link href="#contact">Empieza tu proyecto</Link>
        </Button>

        <NavbarMenu />
      </div>
    </nav>
  );
}
