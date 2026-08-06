import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const values = [
  { icon: "⚡", title: "Built on Firebase", desc: "Data syncs in real time across every device. Nothing waits for a page refresh." },
  { icon: "📱", title: "Works on any device", desc: "Android phone, tablet, or a laptop browser. No installation required on web." },
  { icon: "🔒", title: "Secure by default", desc: "Role-based access means every user sees only what they need to. Student data stays private." },
  { icon: "💳", title: "Online payments", desc: "Collect fees digitally — parents pay from their phone and get instant receipts, no office visits needed." },
  { icon: "🚀", title: "Zero setup cost", desc: "No upfront fees, no long-term contracts, no hidden charges. Your school is live in one afternoon." },
  { icon: "🎯", title: "No feature bloat", desc: "Every feature in CampZa solves a real daily problem. Nothing is added just to look impressive on a list." },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">

        {/* Hero */}
        <div className="py-24 px-8" style={{ background: "var(--navy)" }}>
          <div className="max-w-3xl mx-auto text-center">
            <div className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: "rgba(90,122,232,0.8)" }}>About CampZa</div>
            <h1 className="text-4xl md:text-5xl font-black tracking-tight text-white mb-6" style={{ textWrap: "balance" }}>
              We started because schools have evolved — their software should too.
            </h1>
            <p className="text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
              A school is much more than classrooms and timetables. It is a community where administrators, teachers, students, and parents work together every day to create meaningful learning experiences.
            </p>
          </div>
        </div>

        {/* Main story */}
        <section className="py-20 px-8 bg-white">
          <div className="max-w-3xl mx-auto">
            <p className="text-base leading-relaxed mb-6" style={{ color: "var(--muted)" }}>
              Behind every successful school is a complex network of academic, administrative, and operational processes that must work seamlessly. For too long, schools have relied on disconnected systems, manual paperwork, spreadsheets, and outdated processes that create unnecessary complexity. Valuable time is spent chasing information, repeating administrative tasks, and switching between multiple tools — instead of focusing on what truly matters: delivering an exceptional education.
            </p>
            <p className="text-base leading-relaxed mb-6" style={{ color: "var(--muted)" }}>
              <strong style={{ color: "var(--navy)" }}>CampZa was created to change that.</strong>
            </p>
            <p className="text-base leading-relaxed mb-6" style={{ color: "var(--muted)" }}>
              We believe school management should be simple, connected, and intelligent. Technology should empower educators, not create more work. It should simplify everyday operations, strengthen communication, and provide school leaders with the clarity they need to make better decisions.
            </p>
            <p className="text-base leading-relaxed mb-6" style={{ color: "var(--muted)" }}>
              Every feature in CampZa is designed to solve a real challenge faced by schools. From admissions and enrolment to attendance, academics, examinations, fee management, transport, communication, staff administration, and parent engagement — every module works together as one connected platform. Information flows seamlessly, routine tasks are automated, and every stakeholder has access to the information they need, exactly when they need it.
            </p>
            <p className="text-base leading-relaxed mb-6" style={{ color: "var(--muted)" }}>
              CampZa is designed to be intuitive from day one. Administrators can confidently manage their institution. Teachers spend less time on administration and more time with students. Parents stay informed and engaged throughout their child's educational journey. And students benefit from a more connected and organised school experience.
            </p>
            <p className="text-base leading-relaxed mb-6" style={{ color: "var(--muted)" }}>
              Whether you are a growing neighbourhood school or a large multi-campus institution, CampZa grows with you. Our platform is flexible, scalable, and built to adapt to the unique way every school operates — without adding unnecessary complexity.
            </p>
            <p className="text-base leading-relaxed" style={{ color: "var(--muted)" }}>
              We are not just helping schools digitise their operations. We are helping them build stronger relationships, improve collaboration, streamline everyday workflows, and create an environment where education always comes first.
            </p>
          </div>
        </section>

        {/* Values grid */}
        <section className="py-20 px-8" style={{ background: "var(--light)" }}>
          <div className="max-w-6xl mx-auto">
            <div className="text-xs font-bold tracking-widest uppercase mb-3 text-center" style={{ color: "var(--blue)" }}>What we stand for</div>
            <h2 className="text-3xl font-black tracking-tight text-center mb-12" style={{ color: "var(--navy)" }}>
              Built differently, on purpose
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {values.map((v) => (
                <div key={v.title} className="rounded-2xl p-6 bg-white" style={{ border: "1px solid var(--border)" }}>
                  <div className="text-2xl mb-3">{v.icon}</div>
                  <h3 className="text-sm font-bold mb-2" style={{ color: "var(--navy)" }}>{v.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Vision */}
        <section className="py-24 px-8" style={{ background: "var(--navy)" }}>
          <div className="max-w-3xl mx-auto">
            <div className="text-xs font-bold tracking-widest uppercase mb-4 text-center" style={{ color: "rgba(90,122,232,0.8)" }}>Our Vision</div>
            <h2 className="text-3xl md:text-4xl font-black tracking-tight text-white text-center mb-12" style={{ textWrap: "balance" }}>
              We believe the future of education is connected.
            </h2>

            <div className="flex flex-col gap-5 mb-14">
              {[
                "A future where every student is supported, every teacher is empowered, every parent is involved, and every school has the tools to operate with confidence and clarity.",
                "A future where technology quietly handles the complexity behind the scenes — allowing educators to focus on what they do best: inspiring the next generation.",
              ].map((p, i) => (
                <p key={i} className="text-base leading-relaxed text-center" style={{ color: "rgba(255,255,255,0.55)" }}>{p}</p>
              ))}
            </div>

            <div className="rounded-2xl p-10 text-center" style={{ background: "rgba(90,122,232,0.08)", border: "1px solid rgba(90,122,232,0.18)" }}>
              <p className="text-base leading-relaxed mb-4" style={{ color: "rgba(255,255,255,0.6)" }}>
                That is why we are not building software for schools.
              </p>
              <p className="text-base leading-relaxed mb-8" style={{ color: "rgba(255,255,255,0.6)" }}>
                We are building the digital foundation that helps schools educate, connect, and grow with confidence. Every feature we create, every improvement we make, and every decision we take is driven by one purpose — helping schools spend less time managing and more time making a difference.
              </p>
              <p className="text-sm mb-4" style={{ color: "rgba(255,255,255,0.4)" }}>
                Because when schools thrive, teachers inspire, students succeed, and communities grow stronger.
              </p>
              <p className="text-sm mb-6" style={{ color: "rgba(255,255,255,0.4)" }}>
                This is more than school management.
              </p>
              <p className="text-2xl font-black text-white tracking-tight">This is CampZa.</p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="py-20 px-8 text-center bg-white">
          <h2 className="text-2xl md:text-3xl font-black mb-4" style={{ color: "var(--navy)" }}>
            Ready to modernise your school?
          </h2>
          <p className="text-sm mb-8" style={{ color: "var(--muted)" }}>
            Get in touch and we'll walk you through the app and get you set up — at no cost.
          </p>
          <a href="/contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold text-white no-underline"
            style={{ background: "var(--blue)" }}>
            Request a Demo →
          </a>
        </div>

      </main>
      <Footer />
    </>
  );
}
