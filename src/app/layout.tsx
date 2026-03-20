import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "EcoSevika — Threads of Change",
  description:
    "Handcrafted upcycled bags, pouches, aprons and more — made by women artisans from underserved communities in Delhi NCR. Every purchase empowers a woman and reduces fabric waste.",
  keywords: ["ecosevika", "upcycled bags", "women empowerment", "sustainable fashion", "handcrafted", "Delhi"],
  openGraph: {
    title: "EcoSevika — Threads of Change",
    description: "Handcrafted by women. Kinder to the planet.",
    url: "https://ecosevika.racddl.com",
    siteName: "EcoSevika",
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
