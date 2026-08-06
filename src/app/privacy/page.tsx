import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy – CampZa",
  description: "Learn how CampZa collects, uses and protects your personal data.",
  alternates: { canonical: "https://www.campza.in/privacy" },
};

const sections = [
  {
    title: "Information We Collect",
    content: [
      "When a school registers on CampZa, we collect basic details such as the school name, address, contact information and administrator credentials.",
      "For students and staff, schools enter profile information including names, class details, contact numbers and parent information. This data is entered by the school and belongs to the school.",
      "We collect usage data such as login times, features accessed and app activity to help us improve the platform and detect issues.",
      "Payment transactions are processed through secure third-party payment gateways. CampZa does not store card numbers or banking credentials.",
    ],
  },
  {
    title: "How We Use Your Information",
    content: [
      "To provide and operate the CampZa platform, including attendance, fee management, communication and academic modules.",
      "To send important notifications such as attendance alerts, fee reminders and school announcements to the right users.",
      "To improve the platform based on how it is used, fix issues and add features that schools and users need.",
      "To respond to support requests, enquiries and feedback submitted through the app or website.",
      "We do not sell, rent or share your personal information with third parties for marketing purposes.",
    ],
  },
  {
    title: "Data Storage and Security",
    content: [
      "All data is stored on Google Firebase, which provides enterprise-grade security, encryption at rest and in transit, and compliance with international data protection standards.",
      "Access to data is role-based. Admins, teachers, parents and students each see only what is relevant to them. No user can access another user's private data.",
      "We use HTTPS across the entire platform. All communication between the app and our servers is encrypted.",
      "We regularly review our security practices and keep systems updated to protect against vulnerabilities.",
    ],
  },
  {
    title: "Data Belonging to Schools",
    content: [
      "All student, staff and academic data entered by a school belongs entirely to that school. CampZa acts as a data processor, not a data owner.",
      "Schools are responsible for ensuring that the data they enter about students and staff is accurate, lawful and collected with appropriate consent.",
      "Schools can request a full export of their data at any time by contacting our support team.",
    ],
  },
  {
    title: "Children's Privacy",
    content: [
      "CampZa is a platform used by schools to manage student records. Student data is provided by the school and is not directly collected from students themselves.",
      "We do not knowingly collect personal information directly from children. All student data is managed by the school administrator.",
      "Parents can contact the school or CampZa support to request access to or deletion of their child's information.",
    ],
  },
  {
    title: "Cookies and Analytics",
    content: [
      "Our website uses minimal cookies necessary for the site to function correctly, such as session management.",
      "We may use anonymous analytics tools to understand how visitors use the website. This data does not identify individual users.",
      "You can disable cookies in your browser settings, though this may affect some website functionality.",
    ],
  },
  {
    title: "Data Retention",
    content: [
      "We retain school and user data for as long as the school's account is active on CampZa.",
      "If a school closes its account, we will delete all associated data within 30 days, unless required to retain it for legal or regulatory reasons.",
      "Backup data may be retained for up to 90 days after deletion for disaster recovery purposes.",
    ],
  },
  {
    title: "Your Rights",
    content: [
      "Schools and users have the right to access, correct or delete their personal information held on the platform.",
      "You can update most information directly within the app. For account-level changes or data deletion requests, contact our support team.",
      "If you have a complaint about how we handle your data, you have the right to raise it with the relevant data protection authority in your jurisdiction.",
    ],
  },
  {
    title: "Changes to This Policy",
    content: [
      "We may update this Privacy Policy from time to time to reflect changes in the platform or applicable laws.",
      "When we make significant changes, we will notify school administrators through the app or by email.",
      "Continued use of CampZa after changes are published constitutes acceptance of the updated policy.",
    ],
  },
  {
    title: "Contact Us",
    content: [
      "If you have any questions about this Privacy Policy or how we handle your data, please contact us at campza.in@outlook.com.",
      "We aim to respond to all privacy-related enquiries within 5 business days.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <div className="py-20 px-8 text-center" style={{ background: "var(--navy)" }}>
          <div className="max-w-3xl mx-auto">
            <div className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: "rgba(90,122,232,0.8)" }}>Legal</div>
            <h1 className="text-4xl md:text-5xl font-black tracking-tight text-white mb-4" style={{ textWrap: "balance" }}>
              Privacy Policy
            </h1>
            <p className="text-base" style={{ color: "rgba(255,255,255,0.5)" }}>
              Last updated: August 2026
            </p>
          </div>
        </div>

        <section className="py-20 px-8 bg-white">
          <div className="max-w-3xl mx-auto">
            <p className="text-base leading-relaxed mb-12" style={{ color: "var(--muted)", fontSize: "1.0625rem" }}>
              At CampZa, we take your privacy seriously. This policy explains what information we collect, how we use it, and how we protect it. By using the CampZa platform or website, you agree to the practices described in this policy.
            </p>

            <div className="flex flex-col gap-12">
              {sections.map((s, i) => (
                <div key={s.title}>
                  <div className="flex items-center gap-4 mb-5">
                    <div className="text-sm font-black tabular-nums" style={{ color: "var(--blue)", minWidth: 28 }}>
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <h2 className="text-xl font-black" style={{ color: "var(--navy)" }}>{s.title}</h2>
                  </div>
                  <div className="pl-11 flex flex-col gap-3">
                    {s.content.map((p, j) => (
                      <p key={j} className="text-base leading-relaxed" style={{ color: "var(--muted)" }}>{p}</p>
                    ))}
                  </div>
                  {i < sections.length - 1 && <div className="mt-12 h-px" style={{ background: "var(--border)" }} />}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
