import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";

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
