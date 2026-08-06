"use client";
import { useState } from "react";
import Logo from "./Logo";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 h-16"
        style={{ background: "rgba(12,17,40,0.96)", backdropFilter: "blur(12px)", borderBottom: "1px solid rgba(90,122,232,0.12)" }}>
        <a href="#" className="flex items-center gap-2.5 no-underline">
          <Logo size={36} />
          <span className="text-xl font-black tracking-tight text-white">Camp<span style={{ color: "#E83030" }}>Za</span></span>
        </a>
        <div className="hidden md:flex items-center gap-7">
          <a href="#features" className="text-sm font-medium text-white/60 hover:text-white transition-colors no-underline">Features</a>
          <a href="#modules" className="text-sm font-medium text-white/60 hover:text-white transition-colors no-underline">Modules</a>
          <a href="#about" className="text-sm font-medium text-white/60 hover:text-white transition-colors no-underline">About</a>
          <a href="#contact" className="text-sm font-medium text-white/60 hover:text-white transition-colors no-underline">Contact</a>
          <a href="https://app.campza.in" target="_blank" rel="noopener noreferrer"
            className="text-sm font-bold text-white px-5 py-2 rounded-lg transition-colors no-underline"
            style={{ background: "#E83030" }}>Open App</a>
        </div>
        <button className="md:hidden flex flex-col gap-1.5 p-1.5 bg-transparent border-none cursor-pointer" onClick={() => setOpen(!open)}>
          <span className="block w-5.5 h-0.5 rounded bg-white/80" />
          <span className="block w-5.5 h-0.5 rounded bg-white/80" />
          <span className="block w-5.5 h-0.5 rounded bg-white/80" />
        </button>
      </nav>

      {open && (
        <div className="fixed top-16 left-0 right-0 z-40 flex flex-col px-4 py-3 gap-1"
          style={{ background: "rgba(12,17,40,0.98)", backdropFilter: "blur(12px)", borderBottom: "1px solid rgba(90,122,232,0.15)" }}>
          {["#features", "#modules", "#about", "#contact"].map((href) => (
            <a key={href} href={href} onClick={() => setOpen(false)}
              className="text-white/70 text-base font-medium py-3 px-2 no-underline border-b border-white/5 last:border-0">
              {href.replace("#", "").charAt(0).toUpperCase() + href.replace("#", "").slice(1)}
            </a>
          ))}
          <a href="https://app.campza.in" target="_blank" rel="noopener noreferrer"
            className="mt-2 text-center text-white font-bold py-3 rounded-lg no-underline"
            style={{ background: "#E83030" }}>Open App</a>
        </div>
      )}
    </>
  );
}
