import Link from "next/link";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AppDemo from "@/components/AppDemo";
import Footer from "@/components/Footer";

const highlights = [
  { icon: "✅", title: "Attendance", desc: "Mark and track daily attendance for every class in seconds. Parents notified instantly." },
  { icon: "📊", title: "Marks & Results", desc: "Enter exam scores, auto-calculate grades and rankings, share results with parents." },
  { icon: "💳", title: "Fee Collection", desc: "Collect fees online. Auto-generate receipts, track dues and send reminders automatically." },
  { icon: "📚", title: "Homework", desc: "Post assignments with due dates. Students and parents see them immediately." },
  { icon: "💬", title: "Parent-Teacher Chat", desc: "Direct messaging inside the app, with no personal numbers shared." },
  { icon: "📢", title: "Notice Board", desc: "Send school-wide or class-specific announcements with push notifications." },
];

const roles = [
  { icon: "🏫", label: "Admin",   color: "#4338CA", bg: "#EEF2FF", border: "#C7D2FE22", desc: "Full school overview: students, staff, fees, reports and admissions." },
  { icon: "👩‍🏫", label: "Teacher", color: "#15803D", bg: "#F0FDF4", border: "#BBF7D022", desc: "Attendance, marks and homework, without the paperwork." },
  { icon: "👨‍👩‍👧", label: "Parent",  color: "#C2410C", bg: "#FFF7ED", border: "#FED7AA22", desc: "Real-time updates on your child's attendance, marks and fees." },
  { icon: "🎒", label: "Student", color: "#86198F", bg: "#FDF2F8", border: "#F5D0FE22", desc: "Timetable, homework, results and notices, all in one place." },
];

const stats = [
  { n: "15+", l: "Features" },
  { n: "4",   l: "User roles" },
  { n: "₹0",  l: "Setup cost" },
  { n: "24h", l: "Onboarding" },
];

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />

        {/* Stats bar */}
        <div className="py-10 px-8" style={{ background: "#F0F4FF", borderBottom: "1px solid #E0E8FF" }}>
          <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s) => (
              <div key={s.l} className="text-center">
                <div className="text-3xl font-black tracking-tight" style={{ color: "var(--navy)" }}>{s.n}</div>
                <div className="text-xs mt-1 font-medium" style={{ color: "var(--muted)" }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>

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

        {/* Why CampZa strip */}
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
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: "⚡", t: "Real-time sync", d: "Data updates instantly across every device." },
                { icon: "🔒", t: "Secure access",  d: "Role-based access so users see only what they need." },
                { icon: "💳", t: "Online payments", d: "Digital fee collection with instant receipts." },
                { icon: "🚀", t: "Zero setup cost", d: "Free to start. No hidden charges." },
              ].map((b) => (
                <div key={b.t} className="rounded-xl p-4" style={{ background: "var(--light)", border: "1px solid var(--border)" }}>
                  <div className="text-xl mb-2">{b.icon}</div>
                  <div className="text-sm font-bold mb-1" style={{ color: "var(--navy)" }}>{b.t}</div>
                  <div className="text-xs leading-relaxed" style={{ color: "var(--muted)" }}>{b.d}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

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
