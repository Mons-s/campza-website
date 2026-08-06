import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const categoryPhotos: Record<string, string> = {
  Academics:      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=700&auto=format&q=80",
  Finance:        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=700&auto=format&q=80",
  Communication:  "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=700&auto=format&q=80",
  Administration: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=700&auto=format&q=80",
};

const categories = [
  {
    label: "Academics",
    color: "#4338CA",
    bg: "#EEF2FF",
    border: "#C7D2FE",
    features: [
      { icon: "✅", name: "Attendance Tracking", desc: "Mark daily attendance class-wise in under a minute. Absences are immediately visible to parents. Monthly summaries auto-generate." },
      { icon: "📊", name: "Marks & Results", desc: "Enter subject-wise exam marks. Grades and rankings calculate automatically. Export results as PDFs or share them directly in the app." },
      { icon: "📚", name: "Homework Management", desc: "Post homework with subject, due date and instructions. Students and parents are notified the moment a new assignment is posted." },
      { icon: "📅", name: "Timetable", desc: "Set weekly class timetables from the admin panel. Teachers and students see their own schedule updated in real time." },
      { icon: "📋", name: "Exam Schedule", desc: "Create and publish exam timetables school-wide. Automatically notifies all relevant students and parents." },
    ],
  },
  {
    label: "Finance",
    color: "#15803D",
    bg: "#F0FDF4",
    border: "#BBF7D0",
    features: [
      { icon: "💳", name: "Fee Collection", desc: "Set up custom fee structures per class. Parents pay online using cards, net banking and more. Instant digital receipts generated." },
      { icon: "🧾", name: "Fee Receipts", desc: "Every payment generates a digital receipt stored in the system. Parents can download them anytime from their phone." },
      { icon: "📉", name: "Outstanding Dues", desc: "Track which students have pending fees. Send reminders via app notifications without any manual effort." },
    ],
  },
  {
    label: "Communication",
    color: "#C2410C",
    bg: "#FFF7ED",
    border: "#FED7AA",
    features: [
      { icon: "📢", name: "Notice Board", desc: "Post notices school-wide or to specific classes. All users get an instant push notification. Old notices remain searchable." },
      { icon: "💬", name: "Parent-Teacher Chat", desc: "Direct messaging between teachers and parents inside the app. No phone numbers exchanged. Full history saved." },
      { icon: "🔔", name: "Push Notifications", desc: "Any important update about attendance, fees or notices triggers an instant notification to the right person automatically." },
    ],
  },
  {
    label: "Administration",
    color: "#86198F",
    bg: "#FDF2F8",
    border: "#F5D0FE",
    features: [
      { icon: "👨‍🎓", name: "Student Management", desc: "Add and manage student profiles, admission numbers, class assignments and parent details from a single admin view." },
      { icon: "👩‍🏫", name: "Staff Management", desc: "Maintain staff profiles, assign subjects and classes, manage leave records and track availability." },
      { icon: "📋", name: "Admissions", desc: "Receive online admission applications. Review, communicate with applicants and confirm admissions without paper forms." },
      { icon: "📜", name: "Certificates & TC", desc: "Generate Transfer Certificates, completion certificates and student ID cards in bulk with a single tap." },
      { icon: "🚌", name: "School Transport", desc: "Configure bus routes, assign students to stops, and share driver details with parents automatically." },
      { icon: "🏖️", name: "Leave Management", desc: "Students apply for leave through the app. Teachers review and approve. Approved leaves sync with attendance records." },
    ],
  },
];

export default function FeaturesPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        {/* Page hero */}
        <div className="py-20 px-8 text-center" style={{ background: "var(--navy)" }}>
          <div className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: "rgba(90,122,232,0.8)" }}>Features</div>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight text-white mb-4" style={{ textWrap: "balance" }}>
            15+ features built for<br />how schools actually work
          </h1>
          <p className="text-base max-w-xl mx-auto" style={{ color: "rgba(255,255,255,0.5)" }}>
            Every feature solves a real daily problem, not something added to look good on a spec sheet.
          </p>
        </div>

        {/* Feature categories */}
        <div className="py-20 px-8 bg-white">
          <div className="max-w-6xl mx-auto flex flex-col gap-20">
            {categories.map((cat, i) => (
              <div key={cat.label}>
                <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-start mb-8">
                  <div className={`md:col-span-2 ${i % 2 === 1 ? "md:order-last" : ""}`}>
                    <img
                      src={categoryPhotos[cat.label]}
                      alt={cat.label}
                      className="w-full rounded-2xl object-cover"
                      style={{ height: 220 }}
                      loading="lazy"
                    />
                  </div>
                  <div className="md:col-span-3">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="h-1 w-8 rounded-full" style={{ background: cat.color }} />
                      <h2 className="text-xl font-black" style={{ color: cat.color }}>{cat.label}</h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {cat.features.map((f) => (
                        <div key={f.name} className="rounded-2xl p-5" style={{ background: cat.bg, border: `1px solid ${cat.border}` }}>
                          <div className="text-2xl mb-2">{f.icon}</div>
                          <h3 className="text-sm font-bold mb-1.5" style={{ color: cat.color }}>{f.name}</h3>
                          <p className="text-xs leading-relaxed" style={{ color: cat.color, opacity: 0.72 }}>{f.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="py-20 px-8 text-center" style={{ background: "var(--light)" }}>
          <h2 className="text-2xl md:text-3xl font-black mb-4" style={{ color: "var(--navy)" }}>
            Ready to bring these to your school?
          </h2>
          <p className="text-sm mb-8" style={{ color: "var(--muted)" }}>Free to set up. No training required. Works from day one.</p>
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
