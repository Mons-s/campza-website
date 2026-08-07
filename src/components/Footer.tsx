import Link from "next/link";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="px-8 py-12" style={{ background: "#070c1c", borderTop: "1px solid rgba(90,122,232,0.08)" }}>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start gap-10">
        <div className="max-w-xs">
          <div className="flex items-center gap-2.5 mb-2">
            <Logo size={30} />
            <span className="text-lg font-black text-white">Camp<span style={{ color: "#E83030" }}>Za</span></span>
          </div>
          <p className="text-xs leading-relaxed mb-4" style={{ color: "rgba(255,255,255,0.3)" }}>
            School management software built for schools everywhere. Simple, affordable, and live in a day.
          </p>
          <p className="text-xs tracking-widest uppercase" style={{ color: "rgba(255,255,255,0.15)", letterSpacing: "2px" }}>
            CREATE · INSPIRE · SUCCEED
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-10">
          <div>
            <div className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: "rgba(255,255,255,0.2)" }}>Product</div>
            {[
              { href: "/features", label: "Features" },
              { href: "/modules",  label: "Who uses it" },
            ].map((l) => (
              <Link key={l.href} href={l.href}
                className="block text-sm mb-3 no-underline hover:underline" style={{ color: "rgba(255,255,255,0.45)" }}>
                {l.label}
              </Link>
            ))}
          </div>
          <div>
            <div className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: "rgba(255,255,255,0.2)" }}>Company</div>
            {[
              { href: "/contact",  label: "Contact" },
              { href: "/about",    label: "About" },
            ].map((l) => (
              <Link key={l.href} href={l.href}
                className="block text-sm mb-3 no-underline hover:underline" style={{ color: "rgba(255,255,255,0.45)" }}>
                {l.label}
              </Link>
            ))}
          </div>
          <div>
            <div className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: "rgba(255,255,255,0.2)" }}>Legal</div>
            <a href="/privacy" className="block text-sm mb-3 no-underline hover:underline" style={{ color: "rgba(255,255,255,0.45)" }}>Privacy Policy</a>
            <a href="/terms" className="block text-sm mb-3 no-underline hover:underline" style={{ color: "rgba(255,255,255,0.45)" }}>Terms of Service</a>
            <a href="/security" className="block text-sm mb-3 no-underline hover:underline" style={{ color: "rgba(255,255,255,0.45)" }}>Security</a>
            <a href="mailto:campza.in@outlook.com" className="block text-sm no-underline hover:underline" style={{ color: "var(--blue)" }}>campza.in@outlook.com</a>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-3"
        style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <p className="text-xs" style={{ color: "rgba(255,255,255,0.2)" }}>© 2026 CampZa. All rights reserved.</p>
        <a href="https://app.campza.in" target="_blank" rel="noopener noreferrer"
          className="text-xs font-bold text-white px-4 py-2 rounded-lg no-underline"
          style={{ background: "#E83030" }}>Open CampZa App →</a>
      </div>
    </footer>
  );
}
