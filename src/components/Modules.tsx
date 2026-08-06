const roles = [
  {
    icon: "🏫", label: "Admin", color: "#4338CA", bg: "#EEF2FF", border: "#C7D2FE",
    tagline: "The full picture of the school, always at hand.",
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
    modules: [
      { icon: "✅", name: "Attendance", desc: "See your child's daily attendance in real time. Get notified if they're marked absent." },
      { icon: "📊", name: "Marks", desc: "View exam results as soon as the teacher publishes them. Track progress across terms." },
      { icon: "📚", name: "Homework", desc: "See all pending homework by subject. Never miss a deadline again." },
      { icon: "💳", name: "Pay Fees", desc: "Pay school fees from your phone via Razorpay. Get instant receipts. No trips to the school office." },
      { icon: "💬", name: "Teacher Chat", desc: "Message your child's teacher directly and privately inside the app." },
      { icon: "🚌", name: "Bus Info", desc: "See your child's bus route, stop timings and driver contact details." },
    ],
  },
  {
    icon: "🎒", label: "Student", color: "#86198F", bg: "#FDF2F8", border: "#F5D0FE",
    tagline: "Everything they need for the school day, right here.",
    modules: [
      { icon: "📅", name: "Timetable", desc: "View the day's schedule at a glance. Always in sync with what the school has set." },
      { icon: "📚", name: "Homework", desc: "See pending assignments with due dates. Organised by subject so nothing slips through." },
      { icon: "✅", name: "Attendance", desc: "Track your own attendance. See present, absent and leave counts for the month." },
      { icon: "📊", name: "Marks", desc: "View exam results and progress reports. Compare across terms." },
      { icon: "📢", name: "Notices", desc: "Read school and class announcements. Push notifications for urgent updates." },
    ],
  },
];

export default function Modules() {
  return (
    <section id="modules" className="py-24 px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="mb-14">
          <div className="text-xs font-bold tracking-widest uppercase mb-2.5" style={{ color: "var(--blue)" }}>Who uses it</div>
          <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-3" style={{ color: "var(--navy)", textWrap: "balance" }}>
            One app, four different views
          </h2>
          <p className="text-base max-w-lg" style={{ color: "var(--muted)" }}>
            Each person sees only what is relevant to them. No clutter, no confusion.
          </p>
        </div>

        <div className="flex flex-col gap-16">
          {roles.map((role) => (
            <div key={role.label}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                  style={{ background: role.bg, border: `1px solid ${role.border}` }}>
                  {role.icon}
                </div>
                <div>
                  <h3 className="text-lg font-black" style={{ color: role.color }}>{role.label}</h3>
                  <p className="text-sm" style={{ color: "var(--muted)" }}>{role.tagline}</p>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {role.modules.map((m) => (
                  <div key={m.name} className="rounded-xl p-4 border"
                    style={{ background: role.bg, borderColor: role.border }}>
                    <div className="text-xl mb-2">{m.icon}</div>
                    <div className="text-sm font-bold mb-1" style={{ color: role.color }}>{m.name}</div>
                    <div className="text-xs leading-relaxed" style={{ color: role.color, opacity: 0.75 }}>{m.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
