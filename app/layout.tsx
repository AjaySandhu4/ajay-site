import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./ui/navbar";
import { lusitana, inter, instrument } from "./ui/fonts";

export const metadata: Metadata = {
  title: "Ajay's Site",
  description: "Ajay Sandhu's personal site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lusitana.className} antialiasing`}>
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
