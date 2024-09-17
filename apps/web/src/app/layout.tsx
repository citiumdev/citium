import type { Metadata } from "next";
import "./globals.css";

import { Roboto_Serif } from "next/font/google";
import { Plus_Jakarta_Sans } from "next/font/google";

const robotoSerif = Roboto_Serif({
  subsets: ["latin"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body
        className={`${robotoSerif.className} ${plusJakartaSans.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}