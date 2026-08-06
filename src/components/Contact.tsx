"use client";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ first: "", last: "", mobile: "", email: "", school: "", address: "", pincode: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((p) => ({ ...p, [k]: e.target.value }));

  async function submit() {
    setError("");
    if (!form.first || !form.last) return setError("Please enter your first and last name.");
    if (!/^\d{10}$/.test(form.mobile)) return setError("Enter a valid 10-digit mobile number.");
    if (!form.email.includes("@")) return setError("Enter a valid email address.");
    if (!form.school) return setError("Please enter your school name.");
    if (!form.address) return setError("Please enter your school address.");
    if (!/^\d{6}$/.test(form.pincode)) return setError("Please enter a valid 6-digit pincode.");

    setLoading(true);
    try {
      const payload = {
        fields: {
          firstName:   { stringValue: form.first },
          lastName:    { stringValue: form.last },
          mobile:      { stringValue: form.mobile },
          email:       { stringValue: form.email },
          schoolName:  { stringValue: form.school },
          address:     { stringValue: form.address },
          pincode:     { stringValue: form.pincode },
          submittedAt: { stringValue: new Date().toISOString() },
        },
      };
      const res = await fetch(
        "https://firestore.googleapis.com/v1/projects/schoolapp-db4f5/databases/(default)/documents/contactEnquiries?key=AIzaSyC4nJeulhWgWg0Go_UychxZHNkYx9mE7eY",
        { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) }
      );
      if (!res.ok) throw new Error();
      setSuccess(true);
    } catch {
      setError("Something went wrong. Please email us at campza.in@outlook.com");
    } finally {
      setLoading(false);
    }
  }

  const inputClass = "w-full px-3.5 py-2.5 rounded-xl text-sm outline-none transition-colors bg-white";
  const inputStyle = { border: "1px solid var(--border)", color: "var(--text)", fontFamily: "inherit" };

  return (
    <section id="contact" className="py-24 px-8 bg-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-start">
        <div>
          <div className="text-xs font-bold tracking-widest uppercase mb-2.5" style={{ color: "var(--blue)" }}>Get in touch</div>
          <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-4" style={{ color: "var(--navy)", textWrap: "balance" }}>
            Interested in CampZa for your school?
          </h2>
          <p className="text-sm leading-relaxed mb-8" style={{ color: "var(--muted)" }}>
            Fill in the form and we'll get back to you within 24 hours to walk you through the app and get your school set up.
          </p>
          {[
            { icon: "⏱️", text: "We respond within 24 hours" },
            { icon: "🚀", text: "Free to set up, no contracts, no hidden fees" },
            { icon: "📱", text: "Works on Android phones, tablets and web browsers" },
            { icon: "🏫", text: "Built specifically for Indian schools" },
          ].map((d) => (
            <div key={d.text} className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center text-lg flex-shrink-0"
                style={{ background: "rgba(90,122,232,0.1)" }}>{d.icon}</div>
              <span className="text-sm" style={{ color: "var(--muted)" }}>{d.text}</span>
            </div>
          ))}
        </div>

        <div className="rounded-2xl p-9" style={{ background: "var(--light)", border: "1px solid var(--border)" }}>
          {success ? (
            <div className="text-center py-10">
              <div className="text-5xl mb-4">✅</div>
              <h3 className="text-lg font-black mb-2" style={{ color: "var(--navy)" }}>Enquiry received!</h3>
              <p className="text-sm" style={{ color: "var(--muted)" }}>Thank you for reaching out. We'll get back to you within 24 hours.</p>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-2 gap-3.5 mb-3.5">
                <div>
                  <label className="text-xs font-semibold block mb-1.5" style={{ color: "var(--navy)" }}>First Name *</label>
                  <input className={inputClass} style={inputStyle} placeholder="e.g. Rahul" value={form.first} onChange={set("first")} />
                </div>
                <div>
                  <label className="text-xs font-semibold block mb-1.5" style={{ color: "var(--navy)" }}>Last Name *</label>
                  <input className={inputClass} style={inputStyle} placeholder="e.g. Sharma" value={form.last} onChange={set("last")} />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3.5 mb-3.5">
                <div>
                  <label className="text-xs font-semibold block mb-1.5" style={{ color: "var(--navy)" }}>Mobile *</label>
                  <input className={inputClass} style={inputStyle} placeholder="10-digit number" maxLength={10} value={form.mobile} onChange={set("mobile")} />
                </div>
                <div>
                  <label className="text-xs font-semibold block mb-1.5" style={{ color: "var(--navy)" }}>Email *</label>
                  <input className={inputClass} style={inputStyle} placeholder="you@school.in" value={form.email} onChange={set("email")} />
                </div>
              </div>
              <div className="mb-3.5">
                <label className="text-xs font-semibold block mb-1.5" style={{ color: "var(--navy)" }}>School Name *</label>
                <input className={inputClass} style={inputStyle} placeholder="e.g. St. Mary's High School" value={form.school} onChange={set("school")} />
              </div>
              <div className="mb-3.5">
                <label className="text-xs font-semibold block mb-1.5" style={{ color: "var(--navy)" }}>School Address *</label>
                <textarea className={inputClass} style={{ ...inputStyle, resize: "none", minHeight: "72px" }}
                  placeholder="Street, City, State" value={form.address} onChange={set("address")} />
              </div>
              <div className="mb-5">
                <label className="text-xs font-semibold block mb-1.5" style={{ color: "var(--navy)" }}>Pincode *</label>
                <input className={inputClass} style={inputStyle} placeholder="e.g. 682001" maxLength={6} value={form.pincode} onChange={set("pincode")} />
              </div>
              {error && <p className="text-xs text-center mb-3" style={{ color: "#dc2626" }}>{error}</p>}
              <button onClick={submit} disabled={loading}
                className="w-full py-3.5 rounded-xl text-sm font-bold text-white cursor-pointer border-none transition-all hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed disabled:translate-y-0"
                style={{ background: "var(--blue)", fontFamily: "inherit" }}>
                {loading ? "Sending…" : "Send Enquiry"}
              </button>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
