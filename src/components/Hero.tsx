"use client";
import { useEffect, useState } from "react";
import Logo from "./Logo";

const BASE_ANGLES = [30, 110, 190, 270];
const CARD_DATA = [
  { icon: "✅", label: "Attendance marked", sub: "Class 8A · Just now",  color: "#22c55e" },
  { icon: "📚", label: "New homework",      sub: "Math · Due tomorrow",  color: "#f97316" },
  { icon: "💰", label: "Fee paid",          sub: "₹15,000 received",     color: "#5A7AE8" },
  { icon: "📢", label: "Notice posted",     sub: "Holiday on Friday",    color: "#a855f7" },
];

const ORBIT_R = 195;

export default function Hero() {
  const [deg, setDeg] = useState(0);

  useEffect(() => {
    let frame: number;
    let last = performance.now();
    const tick = (now: number) => {
      const dt = now - last;
      last = now;
      setDeg((d) => (d + dt * 0.018) % 360);
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <section className="min-h-screen flex items-center pt-20 pb-10 px-8 relative overflow-hidden"
      style={{ background: "var(--navy)" }}>

      {/* background glows */}
      <div className="absolute -top-52 -right-52 w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(90,122,232,0.12) 0%, transparent 68%)" }} />
      <div className="absolute bottom-0 -left-24 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(90,122,232,0.06) 0%, transparent 70%)" }} />

      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

        {/* Left: copy */}
        <div>
          <div className="inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 mb-7 text-xs font-semibold tracking-wide"
            style={{ background: "rgba(90,122,232,0.1)", border: "1px solid rgba(90,122,232,0.25)", color: "#8fa8f0" }}>
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block" /> Live · Built for Indian schools
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-[3.75rem] font-black leading-[1.05] tracking-tight text-white mb-5"
            style={{ textWrap: "balance" }}>
            Empowering schools<br />
            <span style={{ color: "var(--blue)" }}>through simplicity.</span>
          </h1>
          <p className="text-base leading-relaxed mb-9 max-w-md" style={{ color: "rgba(255,255,255,0.5)" }}>
            Attendance, marks, fees, homework, timetables, parent chat — all in one app your staff can learn in ten minutes.
          </p>
          <div className="flex gap-3 flex-wrap mb-12">
            <a href="https://app.campza.in" target="_blank" rel="noopener noreferrer"
              className="px-7 py-3.5 rounded-xl text-sm font-bold text-white no-underline transition-all hover:-translate-y-0.5"
              style={{ background: "var(--blue)", boxShadow: "0 8px 24px rgba(90,122,232,0.35)" }}>
              Open the App →
            </a>
            <a href="/contact"
              className="px-7 py-3.5 rounded-xl text-sm font-medium no-underline transition-all hover:text-white"
              style={{ border: "1px solid rgba(255,255,255,0.14)", color: "rgba(255,255,255,0.6)" }}>
              Request a Demo
            </a>
          </div>
          <div className="flex gap-8 flex-wrap">
            {[
              { n: "4",   l: "User roles"    },
              { n: "15+", l: "Modules"       },
              { n: "Live", l: "Real-time sync" },
              { n: "₹0",  l: "Setup cost"    },
            ].map((s) => (
              <div key={s.l}>
                <div className="text-2xl font-black tracking-tight" style={{ color: "var(--blue)" }}>{s.n}</div>
                <div className="text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.3)", letterSpacing: "0.5px" }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: orbit graphic */}
        <div className="hidden md:flex justify-center items-center relative" style={{ height: 500 }}>

          {/* static orbit ring */}
          <div className="absolute rounded-full pointer-events-none"
            style={{
              width: ORBIT_R * 2,
              height: ORBIT_R * 2,
              left: "50%", top: "50%",
              transform: "translate(-50%, -50%)",
              border: "1px dashed rgba(90,122,232,0.2)",
            }} />

          {/* inner glow */}
          <div className="absolute rounded-full pointer-events-none"
            style={{
              width: 140, height: 140,
              left: "50%", top: "50%",
              transform: "translate(-50%, -50%)",
              background: "radial-gradient(circle, rgba(90,122,232,0.2) 0%, transparent 70%)",
            }} />

          {/* center app icon */}
          <div className="relative z-10 flex items-center justify-center rounded-[28px]"
            style={{
              width: 116, height: 116,
              background: "linear-gradient(145deg, #1c2d6b 0%, #0C1128 100%)",
              boxShadow: "0 0 0 1px rgba(90,122,232,0.3), 0 0 50px rgba(90,122,232,0.2), 0 20px 40px rgba(0,0,0,0.6)",
            }}>
            <Logo size={66} />
          </div>

          {/* orbiting cards */}
          {CARD_DATA.map((c, i) => {
            const angleDeg = (BASE_ANGLES[i] + deg) % 360;
            const rad = (angleDeg * Math.PI) / 180;
            const x = Math.cos(rad) * ORBIT_R;
            const y = Math.sin(rad) * ORBIT_R;
            return (
              <div key={c.label}
                className="absolute flex items-center gap-2.5 px-3.5 py-2.5 rounded-2xl text-white whitespace-nowrap select-none"
                style={{
                  left: `calc(50% + ${x}px)`,
                  top: `calc(50% + ${y}px)`,
                  transform: "translate(-50%, -50%)",
                  background: "rgba(14,20,50,0.92)",
                  border: "1px solid rgba(90,122,232,0.22)",
                  boxShadow: "0 8px 28px rgba(0,0,0,0.45)",
                  backdropFilter: "blur(10px)",
                  zIndex: 4,
                }}>
                <span className="w-7 h-7 rounded-lg flex items-center justify-center text-sm flex-shrink-0"
                  style={{ background: `${c.color}22` }}>{c.icon}</span>
                <div>
                  <div className="text-[11px] font-semibold leading-none mb-0.5">{c.label}</div>
                  <div className="text-[10px] leading-none" style={{ color: "rgba(255,255,255,0.4)" }}>{c.sub}</div>
                </div>
              </div>
            );
          })}

          {/* small glowing dot that orbits */}
          {(() => {
            const rad = (deg * Math.PI) / 180;
            const x = Math.cos(rad) * ORBIT_R;
            const y = Math.sin(rad) * ORBIT_R;
            return (
              <div className="absolute pointer-events-none z-5 w-2.5 h-2.5 rounded-full"
                style={{
                  left: `calc(50% + ${x}px)`,
                  top: `calc(50% + ${y}px)`,
                  transform: "translate(-50%, -50%)",
                  background: "var(--blue)",
                  boxShadow: "0 0 10px rgba(90,122,232,0.9)",
                }} />
            );
          })()}
        </div>
      </div>

      {/* bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, transparent, var(--navy))" }} />
    </section>
  );
}
