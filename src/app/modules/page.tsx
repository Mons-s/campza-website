import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const rolePhotos: Record<string, string> = {
  Admin:   "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&auto=format&q=80",
  Teacher: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&auto=format&q=80",
  Parent:  "https://images.unsplash.com/photo-1544776193-352d25ca82cd?w=600&auto=format&q=80",
  Student: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=600&auto=format&q=80",
};

const roles = [
  {
    icon: "🏫", label: "Admin", color: "#4338CA", bg: "#EEF2FF", border: "#C7D2FE",
    tagline: "The full picture of the school, always at hand.",
    desc: "The admin gets a complete birds-eye view of every student, teacher and transaction. Manage the entire school from one login.",
    modules: [
      { icon: "👨‍🎓", name: "Student Management", desc: "Add, edit and organise students by class. Manage profiles, admission numbers and parent details." },
      { icon: "👩‍🏫", name: "Staff Management", desc: "Manage teacher profiles, assign subjects and classes, track leave and performance." },
      { icon: "💰", name: "Fee Management", desc: "Set up fee structures, track payments, generate receipts and follow up on dues." },
      { icon: "📊", name: "Academic Dashboard", desc: "Overview of marks, attendance trends, homework completion and exam schedules across all classes." },
      { icon: "📋", name: "Admissions", desc: "Review online applications, communicate with parents and confirm admissions with one tap." },
      { icon: "🚌", name: "Transport", desc: "Set up bus routes and stops, assign students, share driver details with parents." },
      { icon: "📜", name: "Certificates", desc: "Generate TC, completion certificates and ID cards for students and staff in bulk." },
      { icon: "📢", name: "Notices & Notifications", desc: "Send school-wide or class-specific announcements. Push alerts to parents and staff instantly." },
    ],
  },
  {
    icon: "👩‍🏫", label: "Teacher", color: "#15803D", bg: "#F0FDF4", border: "#BBF7D0",
    tagline: "Less admin work, more time for teaching.",
    desc: "Teachers handle everything from attendance to marks and parent messages, without leaving the app or touching paper.",
    modules: [
      { icon: "✅", name: "Attendance", desc: "Mark daily attendance for your class in under a minute. Students and parents see it instantly." },
      { icon: "📝", name: "Enter Marks", desc: "Enter exam marks subject-wise. Grades and rankings calculate automatically." },
      { icon: "📚", name: "Post Homework", desc: "Assign homework with due dates by subject. Parents and students get notified immediately." },
      { icon: "📅", name: "Timetable", desc: "View your weekly schedule at a glance. Always up to date with any changes the admin makes." },
      { icon: "💬", name: "Parent Chat", desc: "Message parents directly inside the app. No personal numbers shared." },
      { icon: "📋", name: "Leave Requests", desc: "Review and approve student leave applications. Approved leaves reflect in attendance automatically." },
    ],
  },
  {
    icon: "👨‍👩‍👧", label: "Parent", color: "#C2410C", bg: "#FFF7ED", border: "#FED7AA",
    tagline: "Know what is happening at school, without chasing anyone.",
    desc: "Parents get real-time visibility into attendance, results, fees and homework, without ever needing to call the school.",
    modules: [
      { icon: "✅", name: "Attendance", desc: "See your child's daily attendance in real time. Get notified if they're marked absent." },
      { icon: "📊", name: "Marks", desc: "View exam results as soon as the teacher publishes them. Track progress across terms." },
      { icon: "📚", name: "Homework", desc: "See all pending homework by subject. Never miss a deadline again." },
      { icon: "💳", name: "Pay Fees", desc: "Pay school fees from your phone. Get instant digital receipts. No trips to the school office." },
      { icon: "💬", name: "Teacher Chat", desc: "Message your child's teacher directly and privately inside the app." },
      { icon: "🚌", name: "Bus Info", desc: "See your child's bus route, stop timings and driver contact details." },
    ],
  },
  {
    icon: "🎒", label: "Student", color: "#86198F", bg: "#FDF2F8", border: "#F5D0FE",
    tagline: "Everything they need for the school day, right here.",
    desc: "Students have their own dedicated view with timetable, homework, results and notices, without any clutter.",
    modules: [
      { icon: "📅", name: "Timetable", desc: "View the day's schedule at a glance. Always in sync with what the school has set." },
      { icon: "📚", name: "Homework", desc: "See pending assignments with due dates. Organised by subject so nothing slips through." },
      { icon: "✅", name: "Attendance", desc: "Track your own attendance. See present, absent and leave counts for the month." },
      { icon: "📊", name: "Marks", desc: "View exam results and progress reports. Compare across terms." },
      { icon: "📢", name: "Notices", desc: "Read school and class announcements. Push notifications for urgent updates." },
    ],
  },
];

export default function ModulesPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        {/* Page hero */}
        <div className="py-20 px-8 text-center" style={{ background: "var(--navy)" }}>
          <div className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: "rgba(90,122,232,0.8)" }}>Who uses CampZa</div>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight text-white mb-4" style={{ textWrap: "balance" }}>
            One app, four different views
          </h1>
          <p className="text-base max-w-xl mx-auto" style={{ color: "rgba(255,255,255,0.5)" }}>
            Each user sees only what is relevant to them. No clutter, no confusion, no training required.
          </p>
        </div>

        {/* Role sections */}
        <div className="py-20 px-8 bg-white">
          <div className="max-w-6xl mx-auto flex flex-col gap-24">
            {roles.map((role, i) => (
              <div key={role.label}>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start mb-10">
                  <div className={`md:col-span-1 ${i % 2 === 1 ? "md:order-last" : ""}`}>
                    <img
                      src={rolePhotos[role.label]}
                      alt={role.label}
                      className="w-full rounded-2xl object-cover mb-5"
                      style={{ height: 180 }}
                      loading="lazy"
                    />
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl mb-3"
                      style={{ background: role.bg, border: `1px solid ${role.border}` }}>
                      {role.icon}
                    </div>
                    <h2 className="text-2xl font-black mb-2" style={{ color: role.color }}>{role.label}</h2>
                    <p className="text-sm font-medium mb-3" style={{ color: role.color, opacity: 0.7 }}>{role.tagline}</p>
                    <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>{role.desc}</p>
                  </div>
                  <div className="md:col-span-2">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {role.modules.map((m) => (
                        <div key={m.name} className="rounded-xl p-4" style={{ background: role.bg, border: `1px solid ${role.border}` }}>
                          <div className="text-xl mb-2">{m.icon}</div>
                          <div className="text-sm font-bold mb-1" style={{ color: role.color }}>{m.name}</div>
                          <div className="text-xs leading-relaxed" style={{ color: role.color, opacity: 0.7 }}>{m.desc}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                {i < roles.length - 1 && <div className="border-b" style={{ borderColor: "var(--border)" }} />}
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="py-20 px-8 text-center" style={{ background: "var(--light)" }}>
          <h2 className="text-2xl md:text-3xl font-black mb-4" style={{ color: "var(--navy)" }}>
            Get your school set up today
          </h2>
          <p className="text-sm mb-8" style={{ color: "var(--muted)" }}>Free to set up. No contracts. Works from day one.</p>
          <a href="/contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold text-white no-underline"
            style={{ background: "var(--blue)" }}>
            Request a Demo →
          </a>
        </div>
      </main>
      <Footer />
    </>
  );
}
