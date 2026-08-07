import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Security – CampZa",
  description: "How CampZa protects your school's data with encryption, daily backups, role-based access and secure cloud hosting.",
  alternates: { canonical: "https://www.campza.in/security" },
};

const points = [
  {
    icon: "🔒",
    title: "Encrypted Data",
    body: "All data transmitted between your device and CampZa servers is encrypted using TLS 1.2 or higher. Data stored in our database is encrypted at rest, so your school's information is protected both in transit and on disk.",
  },
  {
    icon: "💾",
    title: "Daily Backups",
    body: "Your data is automatically backed up every day. In the unlikely event of a system failure, we can restore your school's records quickly with minimal data loss. Backups are stored in a separate, secure location.",
  },
  {
    icon: "👤",
    title: "Role-Based Access",
    body: "CampZa enforces strict role-based access control. Admins, teachers, parents and students each see only the data relevant to their role. No parent can view another child's records, and no teacher can access data outside their assigned classes.",
  },
  {
    icon: "☁️",
    title: "Secure Cloud Hosting",
    body: "CampZa is hosted on Google Cloud infrastructure via Firebase, one of the most trusted and audited cloud platforms in the world. Google's data centres maintain ISO 27001, SOC 2 and SOC 3 certifications and operate 24/7 security monitoring.",
  },
  {
    icon: "📋",
    title: "GDPR Awareness",
    body: "While CampZa is primarily built for Indian schools, we follow data minimisation and purpose-limitation principles consistent with global privacy best practices. We collect only what is necessary to operate the service and do not sell or share your data with third parties.",
  },
  {
    icon: "🛡️",
    title: "Authentication Security",
    body: "User accounts are protected by OTP-based phone authentication and email login. There are no weak static passwords. Session tokens are managed securely and expire automatically after inactivity.",
  },
  {
    icon: "🔑",
    title: "Admin Controls",
    body: "School administrators have full control over who has access to their school's data. Admins can add or remove staff and parent accounts at any time, ensuring access is revoked immediately when someone leaves.",
  },
  {
    icon: "📵",
    title: "No Third-Party Data Sharing",
    body: "CampZa does not sell, rent or share your school's data with advertisers or third-party analytics companies. Data is used solely to provide the CampZa service to your school.",
  },
];

export default function SecurityPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Header */}
        <section className="pt-32 pb-16 px-8" style={{ background: "var(--navy)" }}>
          <div className="max-w-3xl mx-auto text-center">
            <div className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: "rgba(90,122,232,0.8)" }}>
              Security
            </div>
            <h1 className="text-4xl md:text-5xl font-black tracking-tight text-white mb-5" style={{ textWrap: "balance" }}>
              Your data is safe with us.
            </h1>
            <p className="text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
              CampZa is built on secure, reliable infrastructure. Here is exactly how we protect your school's data.
            </p>
          </div>
        </section>

        {/* Security points */}
        <section className="py-16 px-8 bg-white">
          <div className="max-w-3xl mx-auto flex flex-col gap-6">
            {points.map((p) => (
              <div key={p.title} className="rounded-2xl p-6 flex gap-5" style={{ background: "#F8FAFF", border: "1px solid #E4EAFF" }}>
                <div className="text-3xl flex-shrink-0">{p.icon}</div>
                <div>
                  <h2 className="text-base font-bold mb-2" style={{ color: "var(--navy)" }}>{p.title}</h2>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>{p.body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section className="py-16 px-8 text-center" style={{ background: "var(--light)" }}>
          <div className="max-w-xl mx-auto">
            <h2 className="text-2xl font-black mb-4" style={{ color: "var(--navy)" }}>Have a security question?</h2>
            <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--muted)" }}>
              If you have a security concern or want to report a vulnerability, please reach out to us directly.
            </p>
            <Link href="/contact"
              className="inline-block px-8 py-3.5 rounded-xl text-sm font-bold text-white no-underline"
              style={{ background: "var(--blue)" }}>
              Contact Us
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
