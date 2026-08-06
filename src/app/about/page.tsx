import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About – CampZa School Management System",
  description: "CampZa was built to simplify school operations, empower educators and connect every part of a school. Learn about our vision and what drives us.",
  alternates: { canonical: "https://www.campza.in/about" },
  openGraph: {
    title: "About CampZa – School Management, Reimagined",
    description: "Built to simplify operations, empower educators and connect every part of your school. This is CampZa.",
    url: "https://www.campza.in/about",
    images: [{ url: "https://www.campza.in/og-image.png", width: 1200, height: 630 }],
  },
};

const values = [
  { icon: "⚡", title: "Built on Firebase", desc: "Data syncs in real time across every device. Nothing waits for a page refresh." },
  { icon: "📱", title: "Works on any device", desc: "Android phone, tablet, or a laptop browser. No installation required on web." },
  { icon: "🔒", title: "Secure by default", desc: "Role-based access means every user sees only what they need to. Student data stays private." },
  { icon: "💳", title: "Online payments", desc: "Collect fees digitally. Parents pay from their phone and get instant receipts, with no office visits needed." },
  { icon: "🚀", title: "Zero setup cost", desc: "No upfront fees, no long-term contracts, no hidden charges. Your school is live in one afternoon." },
  { icon: "🎯", title: "No feature bloat", desc: "Every feature in CampZa solves a real daily problem. Nothing is added just to look impressive on a list." },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">

        {/* Hero */}
        <div className="py-28 px-8 text-center" style={{ background: "var(--navy)" }}>
          <div className="max-w-3xl mx-auto">
            <div className="text-xs font-bold tracking-widest uppercase mb-5" style={{ color: "rgba(90,122,232,0.8)" }}>About CampZa</div>
            <h1 className="text-4xl md:text-6xl font-black tracking-tight text-white mb-6 leading-tight" style={{ textWrap: "balance" }}>
              School Management, Reimagined.
            </h1>
            <p className="text-lg md:text-xl" style={{ color: "rgba(255,255,255,0.55)", textWrap: "balance" }}>
              Built to simplify operations, empower educators, and connect every part of your school.
            </p>
          </div>
        </div>

        {/* Story */}
        <section className="py-24 px-8 bg-white">
          <div className="max-w-4xl mx-auto">

            <p className="text-xl md:text-2xl font-medium leading-relaxed mb-12" style={{ color: "var(--navy)" }}>
              A school is much more than classrooms and timetables. It is a community where administrators, teachers, students, and parents work together every day to create meaningful learning experiences. Behind every successful school is a complex network of academic, administrative, and operational processes that must work seamlessly.
            </p>

            <div className="h-px mb-12" style={{ background: "var(--border)" }} />

            <p className="text-base leading-loose mb-8" style={{ color: "var(--muted)", fontSize: "1.0625rem" }}>
              For too long, schools have relied on disconnected systems, manual paperwork, spreadsheets, and outdated processes that create unnecessary complexity. Valuable time is spent chasing information, repeating administrative tasks, and switching between multiple tools instead of focusing on what truly matters: delivering an exceptional education.
            </p>

            {/* Pull quote */}
            <div className="my-12 pl-6 border-l-4" style={{ borderColor: "var(--blue)" }}>
              <p className="text-2xl md:text-3xl font-black" style={{ color: "var(--navy)" }}>
                CampZa was created to change that.
              </p>
            </div>

            {/* Photo */}
            <div className="my-12 grid grid-cols-2 gap-3 rounded-2xl overflow-hidden" style={{ height: 280 }}>
              <div className="relative w-full h-full">
                <Image src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&auto=format&q=75" alt="School classroom" fill className="object-cover" sizes="50vw" />
              </div>
              <div className="relative w-full h-full">
                <Image src="https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&auto=format&q=75" alt="Teacher with students" fill className="object-cover" sizes="50vw" />
              </div>
            </div>

            <p className="text-base leading-loose mb-8" style={{ color: "var(--muted)", fontSize: "1.0625rem" }}>
              We believe school management should be simple, connected, and intelligent. Technology should empower educators, not create more work. It should simplify everyday operations, strengthen communication, and provide school leaders with the clarity they need to make better decisions.
            </p>

            <p className="text-base leading-loose mb-8" style={{ color: "var(--muted)", fontSize: "1.0625rem" }}>
              Every feature in CampZa is designed to solve a real challenge faced by schools. From admissions and enrolment to attendance, academics, examinations, fee management, transport, communication, staff administration, finance and parent engagement. Every module works together as one connected platform. Information flows seamlessly across departments, routine tasks are automated, and every stakeholder has access to the information they need, exactly when they need it.
            </p>

            <p className="text-base leading-loose mb-8" style={{ color: "var(--muted)", fontSize: "1.0625rem" }}>
              CampZa is designed to be intuitive from day one. Administrators can confidently manage their institution, teachers can spend less time on administration and more time with students, parents stay informed and engaged throughout their child's educational journey, and students benefit from a more connected and organized school experience.
            </p>

            <p className="text-base leading-loose" style={{ color: "var(--muted)", fontSize: "1.0625rem" }}>
              We are not just helping schools digitize their operations. We are helping them build stronger relationships, improve collaboration, streamline everyday workflows, and create an environment where education always comes first.
            </p>
          </div>
        </section>

        {/* Vision */}
        <section className="py-28 px-8" style={{ background: "#F0F4FF" }}>
          <div className="max-w-4xl mx-auto">
            <div className="text-xs font-bold tracking-widest uppercase mb-5 text-center" style={{ color: "var(--blue)" }}>Our Vision</div>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-center mb-14 leading-tight" style={{ color: "var(--navy)", textWrap: "balance" }}>
              We believe the future of education is connected.
            </h2>

            <p className="text-lg leading-relaxed text-center mb-16" style={{ color: "var(--muted)" }}>
              A future where every student is supported, every teacher is empowered, every parent is involved, and every school has the tools to operate with confidence and clarity.
            </p>

            <div className="rounded-3xl p-10 md:p-14" style={{ background: "#fff", border: "1px solid #E0E8FF" }}>
              <p className="text-lg leading-relaxed mb-6" style={{ color: "var(--muted)" }}>
                That is why we are not building software for schools.
              </p>
              <p className="text-lg leading-relaxed mb-6" style={{ color: "var(--muted)" }}>
                We are building the digital foundation that helps schools educate, connect, and grow with confidence.
              </p>
              <p className="text-lg leading-relaxed mb-10" style={{ color: "var(--muted)" }}>
                Every feature we create, every improvement we make, and every decision we take is driven by one purpose: helping schools spend less time managing and more time making a difference. Because when schools thrive, teachers inspire, students succeed, and communities grow stronger.
              </p>
              <div className="h-px mb-10" style={{ background: "#E0E8FF" }} />
              <p className="text-base mb-4" style={{ color: "var(--muted)" }}>
                This is more than school management.
              </p>
              <p className="text-3xl md:text-4xl font-black tracking-tight" style={{ color: "var(--navy)" }}>This is CampZa.</p>
            </div>
          </div>
        </section>

        {/* Values grid */}
        <section className="py-24 px-8" style={{ background: "var(--light)" }}>
          <div className="max-w-6xl mx-auto">
            <div className="text-xs font-bold tracking-widest uppercase mb-3 text-center" style={{ color: "var(--blue)" }}>What we stand for</div>
            <h2 className="text-3xl md:text-4xl font-black tracking-tight text-center mb-14" style={{ color: "var(--navy)" }}>
              Built differently, on purpose
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {values.map((v) => (
                <div key={v.title} className="rounded-2xl p-7 bg-white" style={{ border: "1px solid var(--border)" }}>
                  <div className="text-3xl mb-4">{v.icon}</div>
                  <h3 className="text-base font-bold mb-2" style={{ color: "var(--navy)" }}>{v.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="py-24 px-8 text-center bg-white">
          <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-5" style={{ color: "var(--navy)" }}>
            Ready to modernise your school?
          </h2>
          <p className="text-base mb-10 max-w-md mx-auto" style={{ color: "var(--muted)" }}>
            Get in touch and we'll walk you through the app and get you set up, at no cost.
          </p>
          <a href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-base font-bold text-white no-underline transition-all hover:-translate-y-0.5"
            style={{ background: "var(--blue)", boxShadow: "0 8px 24px rgba(90,122,232,0.3)" }}>
            Request a Demo →
          </a>
        </div>

      </main>
      <Footer />
    </>
  );
}
