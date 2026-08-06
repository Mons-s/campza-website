import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms of Service – CampZa",
  description: "Read the terms and conditions for using the CampZa school management platform.",
  alternates: { canonical: "https://www.campza.in/terms" },
};

const sections = [
  {
    title: "Acceptance of Terms",
    content: [
      "By accessing or using the CampZa platform, website or mobile application, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.",
      "These terms apply to all users of CampZa, including school administrators, teachers, parents and students.",
      "We reserve the right to update these terms at any time. Continued use of the platform after changes are published constitutes acceptance of the updated terms.",
    ],
  },
  {
    title: "Use of the Platform",
    content: [
      "CampZa is a school management platform designed for use by educational institutions, their staff, students and parents.",
      "You agree to use the platform only for lawful purposes and in a manner that does not infringe the rights of others.",
      "You must not attempt to gain unauthorised access to any part of the platform, other users' accounts, or our systems.",
      "You must not use the platform to send spam, distribute harmful content, or engage in any activity that disrupts the service for other users.",
      "School administrators are responsible for ensuring that all users at their institution use the platform in accordance with these terms.",
    ],
  },
  {
    title: "Account Responsibilities",
    content: [
      "Each school is responsible for maintaining the security of its administrator account and all user accounts created within its organisation.",
      "You are responsible for all activity that occurs under your account. If you suspect unauthorised access, contact us immediately at campza.in@outlook.com.",
      "You must provide accurate information when registering and keep your account details up to date.",
      "You must not share your login credentials with others or allow unauthorised users to access the platform through your account.",
    ],
  },
  {
    title: "School Data and Content",
    content: [
      "All data that a school enters into CampZa, including student records, staff details and academic information, belongs to that school.",
      "By entering data into CampZa, you confirm that you have the right to upload and process that data, and that doing so does not violate any applicable laws or third-party rights.",
      "CampZa does not claim ownership over any data entered by schools or users. We process it solely to provide the services you have subscribed to.",
      "Schools are responsible for obtaining any necessary consents from students, parents and staff for the collection and use of their data within the platform.",
    ],
  },
  {
    title: "Fees and Payment",
    content: [
      "Access to certain features of CampZa may require a subscription fee. Pricing is provided to schools at the time of registration or on request.",
      "Fees are billed in advance for the agreed subscription period. All payments are non-refundable unless otherwise agreed in writing.",
      "If a payment is not received by the due date, we reserve the right to suspend access to the platform until the outstanding amount is settled.",
      "We reserve the right to change our pricing with reasonable notice. Schools will be informed of any pricing changes before their next billing cycle.",
    ],
  },
  {
    title: "Intellectual Property",
    content: [
      "CampZa and all associated software, designs, logos, content and trademarks are the intellectual property of CampZa and its licensors.",
      "You are granted a limited, non-exclusive, non-transferable licence to use the platform for its intended purpose during your subscription period.",
      "You must not copy, modify, distribute, reverse engineer or create derivative works from any part of the CampZa platform without our express written permission.",
    ],
  },
  {
    title: "Service Availability",
    content: [
      "We aim to keep CampZa available at all times, but we do not guarantee uninterrupted access. Scheduled maintenance or unexpected outages may occasionally affect availability.",
      "We will make reasonable efforts to notify users of planned downtime in advance.",
      "We are not liable for any loss or inconvenience caused by temporary unavailability of the platform.",
    ],
  },
  {
    title: "Limitation of Liability",
    content: [
      "CampZa is provided on an 'as is' basis. We make no warranties, express or implied, regarding the reliability, accuracy or fitness of the platform for any particular purpose.",
      "To the maximum extent permitted by law, CampZa shall not be liable for any indirect, incidental, special or consequential damages arising from your use of the platform.",
      "Our total liability to any school or user for any claim arising out of or related to these terms shall not exceed the amount paid by that school to CampZa in the three months preceding the claim.",
    ],
  },
  {
    title: "Termination",
    content: [
      "Either party may terminate the subscription with reasonable notice as agreed at the time of registration.",
      "We reserve the right to suspend or terminate access to the platform immediately if a school or user breaches these terms.",
      "Upon termination, schools may request an export of their data within 30 days. After this period, data will be permanently deleted from our systems.",
    ],
  },
  {
    title: "Governing Law",
    content: [
      "These Terms of Service are governed by the laws of India. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts of India.",
      "If any provision of these terms is found to be unenforceable, the remaining provisions will continue to apply in full.",
    ],
  },
  {
    title: "Contact Us",
    content: [
      "If you have any questions about these Terms of Service, please contact us at campza.in@outlook.com.",
      "We aim to respond to all enquiries within 5 business days.",
    ],
  },
];

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <div className="py-20 px-8 text-center" style={{ background: "var(--navy)" }}>
          <div className="max-w-3xl mx-auto">
            <div className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: "rgba(90,122,232,0.8)" }}>Legal</div>
            <h1 className="text-4xl md:text-5xl font-black tracking-tight text-white mb-4" style={{ textWrap: "balance" }}>
              Terms of Service
            </h1>
            <p className="text-base" style={{ color: "rgba(255,255,255,0.5)" }}>
              Last updated: August 2026
            </p>
          </div>
        </div>

        <section className="py-20 px-8 bg-white">
          <div className="max-w-3xl mx-auto">
            <p className="text-base leading-relaxed mb-12" style={{ color: "var(--muted)", fontSize: "1.0625rem" }}>
              Please read these Terms of Service carefully before using CampZa. These terms govern your access to and use of our platform and outline the responsibilities of both CampZa and its users.
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
