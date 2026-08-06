import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "Contact – Request a Demo of CampZa",
  description: "Get in touch with the CampZa team. Request a free demo and see how CampZa can simplify your school's operations from day one.",
  alternates: { canonical: "https://campza.in/contact" },
  openGraph: {
    title: "Contact CampZa – Request a Free Demo",
    description: "Request a free demo and see how CampZa can simplify your school's operations from day one.",
    url: "https://campza.in/contact",
    images: [{ url: "https://campza.in/og-image.png", width: 1200, height: 630 }],
  },
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        {/* Page hero */}
        <div className="py-20 px-8 text-center" style={{ background: "var(--navy)" }}>
          <div className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: "rgba(90,122,232,0.8)" }}>Get in touch</div>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight text-white mb-4" style={{ textWrap: "balance" }}>
            Interested in CampZa<br />for your school?
          </h1>
          <p className="text-base max-w-lg mx-auto" style={{ color: "rgba(255,255,255,0.5)" }}>
            Fill in the form and we'll get back to you within 24 hours to walk you through the app and get your school set up.
          </p>
        </div>
        <Contact />
      </main>
      <Footer />
    </>
  );
}
