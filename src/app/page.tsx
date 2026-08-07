import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AppDemo from "@/components/AppDemo";
import FaqSection from "@/components/FaqSection";
import Footer from "@/components/Footer";
import Image from "next/image";

export const metadata: Metadata = {
  title: "CampZa – School Management App for Attendance, Fees & Communication",
  description: "CampZa is an all-in-one school management app. Manage attendance, fees, marks, homework, timetables and parent communication from one place.",
  alternates: { canonical: "https://www.campza.in" },
  openGraph: {
    title: "CampZa – School Management App",
    description: "All-in-one school management: attendance, fees, marks, homework and parent communication in one app.",
    url: "https://www.campza.in",
    images: [{ url: "https://www.campza.in/og-image.png", width: 1200, height: 630 }],
  },
};

const highlights = [
  { icon: "✅", title: "Attendance", desc: "Mark and track daily attendance for every class in seconds. Parents notified instantly." },
  { icon: "📊", title: "Marks & Results", desc: "Enter exam scores, auto-calculate grades and rankings, share results with parents." },
  { icon: "💳", title: "Fee Collection", desc: "Collect fees online. Auto-generate receipts, track dues and send reminders automatically." },
  { icon: "📚", title: "Homework", desc: "Post assignments with due dates. Students and parents see them immediately." },
  { icon: "💬", title: "Parent-Teacher Chat", desc: "Direct messaging inside the app, with no personal numbers shared." },
  { icon: "📢", title: "Notice Board", desc: "Send school-wide or class-specific announcements with push notifications." },
];

const roles = [
  { icon: "🏫", label: "Admin",   color: "#4338CA", bg: "#EEF2FF", desc: "Full school overview: students, staff, fees, reports and admissions." },
  { icon: "👩‍🏫", label: "Teacher", color: "#15803D", bg: "#F0FDF4", desc: "Attendance, marks and homework, without the paperwork." },
  { icon: "👨‍👩‍👧", label: "Parent",  color: "#C2410C", bg: "#FFF7ED", desc: "Real-time updates on your child's attendance, marks and fees." },
  { icon: "🎒", label: "Student", color: "#86198F", bg: "#FDF2F8", desc: "Timetable, homework, results and notices, all in one place." },
];

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />

        {/* Feature highlights */}
        <section className="py-24 px-8 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="mb-14 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
              <div>
                <div className="text-xs font-bold tracking-widest uppercase mb-2.5" style={{ color: "var(--blue)" }}>What it does</div>
                <h2 className="text-3xl md:text-4xl font-black tracking-tight" style={{ color: "var(--navy)", textWrap: "balance" }}>
                  Everything a school needs,<br />nothing it doesn't.
                </h2>
              </div>
              <Link href="/features" className="text-sm font-semibold no-underline flex-shrink-0"
                style={{ color: "var(--blue)" }}>See all 15+ features →</Link>
            </div>
            <div className="w-full mb-10 rounded-2xl overflow-hidden">
              <Image src="/img-whatitdoes.png" alt="What it does" width={1400} height={700} className="w-full h-auto" quality={80} />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {highlights.map((f) => (
                <div key={f.title} className="rounded-2xl p-6" style={{ background: "#F8FAFF", border: "1px solid #E4EAFF" }}>
                  <div className="text-2xl mb-3">{f.icon}</div>
                  <h3 className="text-base font-bold mb-1.5" style={{ color: "var(--navy)" }}>{f.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <AppDemo />

        {/* Role cards */}
        <section className="py-24 px-8" style={{ background: "var(--light)" }}>
          <div className="max-w-6xl mx-auto">
            <div className="mb-14 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
              <div>
                <div className="text-xs font-bold tracking-widest uppercase mb-2.5" style={{ color: "var(--blue)" }}>Who uses CampZa</div>
                <h2 className="text-3xl md:text-4xl font-black tracking-tight" style={{ color: "var(--navy)", textWrap: "balance" }}>
                  One app, four different views
                </h2>
              </div>
              <Link href="/modules" className="text-sm font-semibold no-underline flex-shrink-0"
                style={{ color: "var(--blue)" }}>Explore all modules →</Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {roles.map((r) => (
                <Link key={r.label} href="/modules" className="rounded-2xl p-6 no-underline transition-all hover:-translate-y-1 block"
                  style={{ background: r.bg, border: `1px solid ${r.color}20` }}>
                  <div className="text-3xl mb-4">{r.icon}</div>
                  <h3 className="text-lg font-black mb-2" style={{ color: r.color }}>{r.label}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: r.color, opacity: 0.72 }}>{r.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Why CampZa */}
        <section className="py-20 px-8 bg-white">
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-xs font-bold tracking-widest uppercase mb-2.5" style={{ color: "var(--blue)" }}>Why CampZa</div>
              <h2 className="text-3xl font-black tracking-tight mb-5" style={{ color: "var(--navy)", textWrap: "balance" }}>
                Built for schools. Not adapted for them.
              </h2>
              <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--muted)" }}>
                Most school software is a generic platform bolted onto education. CampZa was built from the ground up around how schools actually operate, covering every workflow, every role and every daily task.
              </p>
              <Link href="/about" className="text-sm font-semibold no-underline" style={{ color: "var(--blue)" }}>
                Read our story →
              </Link>
            </div>
            <div className="relative rounded-2xl overflow-hidden" style={{ height: 340 }}>
              <Image src="/img-why.png" alt="Why CampZa" fill className="object-contain"
                sizes="(max-width: 768px) 100vw, 50vw" quality={80} />
            </div>
          </div>
        </section>

        {/* FAQ accordion */}
        <FaqSection />

        {/* CTA */}
        <section className="py-20 px-8 text-center" style={{ background: "var(--navy)" }}>
          <h2 className="text-3xl md:text-4xl font-black tracking-tight text-white mb-4" style={{ textWrap: "balance" }}>
            Your school deserves better tools.
          </h2>
          <p className="text-base mb-9" style={{ color: "rgba(255,255,255,0.5)" }}>
            Free to set up. No training required. Works from day one.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/contact"
              className="px-8 py-4 rounded-xl text-base font-bold text-white no-underline transition-all hover:-translate-y-0.5"
              style={{ background: "var(--red)", boxShadow: "0 8px 24px rgba(232,48,48,0.3)" }}>
              Request a Demo
            </Link>
            <a href="https://app.campza.in" target="_blank" rel="noopener noreferrer"
              className="px-8 py-4 rounded-xl text-base font-medium text-white no-underline transition-all hover:text-white"
              style={{ border: "1px solid rgba(255,255,255,0.2)" }}>
              Open the App →
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
