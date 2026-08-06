"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Logo from "./Logo";

const links = [
  { href: "/features",  label: "Features"   },
  { href: "/modules",   label: "Who uses it" },
  { href: "/about",     label: "About"       },
  { href: "/contact",   label: "Contact"     },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const path = usePathname();

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 h-16"
        style={{ background: "rgba(12,17,40,0.97)", backdropFilter: "blur(14px)", borderBottom: "1px solid rgba(90,122,232,0.1)" }}>
        <Link href="/" className="flex items-center gap-2.5 no-underline">
          <Logo size={34} />
          <span className="text-xl font-black tracking-tight text-white">Camp<span style={{ color: "#E83030" }}>Za</span></span>
        </Link>
        <div className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <Link key={l.href} href={l.href}
              className="text-sm font-medium transition-colors no-underline"
              style={{ color: path === l.href ? "#fff" : "rgba(255,255,255,0.55)" }}>
              {l.label}
            </Link>
          ))}
          <a href="https://app.campza.in" target="_blank" rel="noopener noreferrer"
            className="text-sm font-bold text-white px-5 py-2 rounded-lg transition-all hover:-translate-y-0.5 no-underline"
            style={{ background: "#E83030", boxShadow: "0 4px 14px rgba(232,48,48,0.3)" }}>
            Open App
          </a>
        </div>
        <button className="md:hidden flex flex-col gap-1.5 p-1.5 bg-transparent border-none cursor-pointer" onClick={() => setOpen(!open)}>
          <span className="block w-5 h-0.5 rounded bg-white/80" />
          <span className="block w-5 h-0.5 rounded bg-white/80" />
          <span className="block w-5 h-0.5 rounded bg-white/80" />
        </button>
      </nav>

      {open && (
        <div className="fixed top-16 left-0 right-0 z-40 flex flex-col px-4 py-3 gap-1"
          style={{ background: "rgba(12,17,40,0.99)", backdropFilter: "blur(14px)", borderBottom: "1px solid rgba(90,122,232,0.12)" }}>
          {links.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)}
              className="text-white/70 text-base font-medium py-3 px-2 no-underline border-b border-white/5 last:border-0">
              {l.label}
            </Link>
          ))}
          <a href="https://app.campza.in" target="_blank" rel="noopener noreferrer"
            className="mt-2 text-center text-white font-bold py-3 rounded-lg no-underline"
            style={{ background: "#E83030" }}>Open App</a>
        </div>
      )}
    </>
  );
}
