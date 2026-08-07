"use client";
import { useState } from "react";
import Link from "next/link";

const faqs = [
  { q: "How long does it take to set up?", a: "Most schools are live within a day. You add your classes, import students and invite staff — that's it." },
  { q: "Does it work on mobile phones?", a: "Yes. CampZa runs in any browser on any device. Parents and teachers can use it on their phones without downloading an app." },
  { q: "Can parents see their child's data in real time?", a: "Yes. Attendance, marks, homework and fee status update the moment a teacher or admin saves them." },
  { q: "Is there a limit on the number of students?", a: "No hard limit. CampZa scales with your school, from 50 students to 5,000." },
  { q: "What happens to our data if we stop using CampZa?", a: "Your data belongs to you. You can export it at any time. We do not delete data without your explicit request." },
  { q: "Do you offer training or onboarding support?", a: "Yes. We provide onboarding support to get your school up and running, and ongoing help via email and chat." },
];

export default function FaqSection() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section className="py-12 md:py-20 px-8 bg-white">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8 md:mb-12">
          <div className="text-xs font-bold tracking-widest uppercase mb-2.5" style={{ color: "var(--blue)" }}>FAQ</div>
          <h2 className="text-3xl font-black tracking-tight" style={{ color: "var(--navy)", textWrap: "balance" }}>
            Common questions
          </h2>
        </div>
        <div className="flex flex-col gap-3">
          {faqs.map((f, i) => (
            <div key={i} className="rounded-2xl overflow-hidden" style={{ border: "1px solid #E4EAFF" }}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-4 text-left bg-white hover:bg-blue-50 transition-colors"
              >
                <span className="text-sm font-bold pr-4" style={{ color: "var(--navy)" }}>{f.q}</span>
                <span className="flex-shrink-0 text-xl font-light" style={{ color: "var(--blue)" }}>
                  {open === i ? "−" : "+"}
                </span>
              </button>
              {open === i && (
                <div className="px-6 pb-5 pt-1" style={{ background: "#F8FAFF" }}>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>{f.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
        <p className="text-center text-sm mt-8" style={{ color: "var(--muted)" }}>
          More questions?{" "}
          <Link href="/contact" className="font-semibold no-underline" style={{ color: "var(--blue)" }}>
            Contact us →
          </Link>
        </p>
      </div>
    </section>
  );
}
