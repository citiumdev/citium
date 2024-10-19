"use client";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import {
  BriefcaseBusiness,
  ChevronRight,
  Contact,
  House,
  Menu,
  TableOfContents,
} from "lucide-react";
import { useRouter } from "next/navigation";

export default function NavbarMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (isOpen) {
      document.documentElement.classList.remove("scroll-smooth");
    } else {
      setTimeout(() => {
        document.documentElement.classList.add("scroll-smooth");
      }, 1);
    }
  }, [isOpen]);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    setTimeout(() => {
      router.push(`#${id}`, { scroll: true });
    }, 1);
  };

  return (
    <Drawer open={isOpen} onOpenChange={setIsOpen}>
      <DrawerTrigger asChild>
        <Button className="flex md:hidden" size="icon" variant="outline">
          <Menu className="size-5" />
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle className="hidden">Menu</DrawerTitle>
          <DrawerDescription className="hidden">
            Secciones del sitio
          </DrawerDescription>
          <div className="flex flex-col gap-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => scrollToSection("home")}
            >
              <House className="mr-4 size-4" />
              Inicio
              <ChevronRight className="ml-auto size-4" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => scrollToSection("services")}
            >
              <TableOfContents className="mr-4 size-4" />
              Servicios
              <ChevronRight className="ml-auto size-4" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => scrollToSection("projects")}
            >
              <BriefcaseBusiness className="mr-4 size-4" />
              Proyectos
              <ChevronRight className="ml-auto size-4" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => scrollToSection("contact")}
            >
              <Contact className="mr-4 size-4" />
              Contacto
              <ChevronRight className="ml-auto size-4" />
            </Button>
          </div>
        </DrawerHeader>
        <DrawerFooter>
          <DrawerClose asChild>
            <Button>Cerrar Menu</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
