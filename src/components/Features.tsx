const features = [
  { icon: "✅", bg: "#EEF2FF", title: "Attendance", desc: "Teachers mark it in seconds. Parents see it the same moment. No more calling the school to find out if your child turned up." },
  { icon: "📊", bg: "#F0FDF4", title: "Marks & Results", desc: "Enter subject-wise marks after each exam. Totals and grades calculate automatically. Students and parents see results the same day." },
  { icon: "₹", bg: "#FFF7ED", title: "Fee Collection", desc: "Set up fee terms, track who has paid and who hasn't, and let parents pay online via Razorpay. No cash queues at the office." },
  { icon: "📚", bg: "#FDF2F8", title: "Homework", desc: "Teachers post homework by subject and due date. Students and parents see it straight away — no WhatsApp group needed." },
  { icon: "📅", bg: "#F0F9FF", title: "Timetable", desc: "Build your class schedule once. Teachers, students and parents can view it from any device, whenever they need to." },
  { icon: "📢", bg: "#FEF9EE", title: "Notice Board", desc: "Send announcements to the whole school or just one class. Push notifications make sure nothing gets buried." },
  { icon: "💬", bg: "#F5F3FF", title: "Parent–Teacher Chat", desc: "Direct messaging between parents and teachers, inside the app. No personal numbers shared, no chats going missing." },
  { icon: "🎓", bg: "#FFF1F2", title: "Admissions", desc: "Parents apply online, the school reviews and approves with one tap. The whole process without a single paper form." },
  { icon: "📄", bg: "#F0FDF4", title: "Certificates & TC", desc: "Generate Transfer Certificates and completion certificates in seconds. Download as PDF and share directly from the app." },
  { icon: "🚌", bg: "#E8F5E9", title: "School Bus", desc: "Create routes and stops, assign students to their boarding point, and let parents see bus details and timings." },
  { icon: "📋", bg: "#F5F3FF", title: "Leave Management", desc: "Parents apply for leave from the app. Teachers approve and it reflects in attendance automatically." },
  { icon: "🪪", bg: "#EEF2FF", title: "ID Cards", desc: "Generate photo ID cards for students and staff in bulk. Download and print instantly — no design software needed." },
];

export default function Features() {
  return (
    <section id="features" className="py-24 px-8" style={{ background: "var(--light)" }}>
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <div className="text-xs font-bold tracking-widest uppercase mb-2.5" style={{ color: "var(--blue)" }}>What CampZa does</div>
          <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-3" style={{ color: "var(--navy)", textWrap: "balance" }}>
            Everything your school needs, in one place
          </h2>
          <p className="text-base max-w-lg" style={{ color: "var(--muted)" }}>
            No more scattered spreadsheets or WhatsApp groups. Just one app that keeps everyone on the same page.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((f) => (
            <div key={f.title} className="bg-white rounded-2xl p-6 border transition-all hover:-translate-y-0.5 hover:shadow-lg"
              style={{ borderColor: "var(--border)" }}>
              <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-3.5 text-xl" style={{ background: f.bg }}>{f.icon}</div>
              <h3 className="text-sm font-bold mb-1.5" style={{ color: "var(--navy)" }}>{f.title}</h3>
              <p className="text-xs leading-relaxed" style={{ color: "var(--muted)" }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
