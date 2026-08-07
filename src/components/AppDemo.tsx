"use client";
import { useState, useEffect } from "react";

const tabs = [
  { id: "dashboard",  label: "Dashboard",  icon: "🏠" },
  { id: "attendance", label: "Attendance",  icon: "✅" },
  { id: "marks",      label: "Marks",       icon: "📊" },
  { id: "fees",       label: "Fees",        icon: "💳" },
  { id: "messages",   label: "Messages",    icon: "💬" },
];

/* ── individual mock screens ── */

function DashboardScreen() {
  return (
    <div style={{ fontFamily: "sans-serif", height: "100%", display: "flex", flexDirection: "column", background: "#F5F7FA" }}>
      {/* top bar */}
      <div style={{ background: "linear-gradient(135deg,#0D2A1A,#1B8F4A)", padding: "14px 16px 18px", borderRadius: "0 0 20px 20px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
          <span style={{ color: "#fff", fontSize: 13, fontWeight: 700 }}>CampZa</span>
          <div style={{ width: 28, height: 28, borderRadius: "50%", background: "rgba(255,255,255,0.15)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span style={{ fontSize: 13 }}>🔔</span>
          </div>
        </div>
        <div style={{ color: "rgba(255,255,255,0.7)", fontSize: 10, marginBottom: 2 }}>Good morning,</div>
        <div style={{ color: "#fff", fontSize: 15, fontWeight: 700 }}>Principal Sharma</div>
      </div>

      <div style={{ padding: "14px 12px", flex: 1, overflowY: "auto" }}>
        {/* stats row */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginBottom: 14 }}>
          {[
            { n: "342", l: "Students",  c: "#4338CA", bg: "#EEF2FF" },
            { n: "24",  l: "Teachers",  c: "#15803D", bg: "#F0FDF4" },
            { n: "₹2.1L", l: "Fees Due", c: "#C2410C", bg: "#FFF7ED" },
            { n: "94%", l: "Today's Attendance", c: "#0369A1", bg: "#F0F9FF" },
          ].map((s) => (
            <div key={s.l} style={{ background: s.bg, borderRadius: 12, padding: "10px 12px" }}>
              <div style={{ color: s.c, fontSize: 16, fontWeight: 800 }}>{s.n}</div>
              <div style={{ color: s.c, fontSize: 9, opacity: 0.7, marginTop: 2 }}>{s.l}</div>
            </div>
          ))}
        </div>

        {/* quick actions */}
        <div style={{ fontSize: 10, fontWeight: 700, color: "#8898BB", letterSpacing: 0.6, textTransform: "uppercase", marginBottom: 8 }}>Quick Actions</div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 7 }}>
          {[
            { icon: "👥", label: "Students", c: "#4338CA", bg: "#EEF2FF" },
            { icon: "✅", label: "Attendance", c: "#15803D", bg: "#F0FDF4" },
            { icon: "📊", label: "Marks", c: "#0369A1", bg: "#F0F9FF" },
            { icon: "💳", label: "Fees", c: "#C2410C", bg: "#FFF7ED" },
            { icon: "📚", label: "Homework", c: "#7C3AED", bg: "#F5F3FF" },
            { icon: "📢", label: "Notices", c: "#0369A1", bg: "#F0F9FF" },
            { icon: "🗓️", label: "Timetable", c: "#15803D", bg: "#F0FDF4" },
            { icon: "💬", label: "Messages", c: "#86198F", bg: "#FDF2F8" },
          ].map((a) => (
            <div key={a.label} style={{ background: "#fff", borderRadius: 10, padding: "8px 4px", textAlign: "center", border: "1px solid #E8EDF5" }}>
              <div style={{ width: 28, height: 28, borderRadius: 8, background: a.bg, margin: "0 auto 4px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14 }}>{a.icon}</div>
              <div style={{ fontSize: 8.5, color: "#444E6A", fontWeight: 500 }}>{a.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function AttendanceScreen() {
  const [marked, setMarked] = useState<Record<string, boolean>>({
    "Aarav Shah": true, "Priya Nair": true, "Rishi Mehta": false,
    "Sneha Joshi": true, "Dev Patel": true, "Meera Iyer": false,
  });
  const names = Object.keys(marked);
  const presentCount = Object.values(marked).filter(Boolean).length;

  return (
    <div style={{ fontFamily: "sans-serif", height: "100%", display: "flex", flexDirection: "column", background: "#F5F7FA" }}>
      <div style={{ background: "linear-gradient(135deg,#1B3A6B,#2B4FA8)", padding: "14px 16px 16px", borderRadius: "0 0 20px 20px" }}>
        <div style={{ color: "rgba(255,255,255,0.65)", fontSize: 10, marginBottom: 3 }}>Class 8A · Today</div>
        <div style={{ color: "#fff", fontSize: 15, fontWeight: 700, marginBottom: 10 }}>Mark Attendance</div>
        <div style={{ display: "flex", gap: 8 }}>
          <div style={{ flex: 1, background: "rgba(255,255,255,0.12)", borderRadius: 10, padding: "7px 10px" }}>
            <div style={{ color: "#fff", fontSize: 16, fontWeight: 800 }}>{presentCount}</div>
            <div style={{ color: "rgba(255,255,255,0.6)", fontSize: 9 }}>Present</div>
          </div>
          <div style={{ flex: 1, background: "rgba(255,255,255,0.12)", borderRadius: 10, padding: "7px 10px" }}>
            <div style={{ color: "#fff", fontSize: 16, fontWeight: 800 }}>{names.length - presentCount}</div>
            <div style={{ color: "rgba(255,255,255,0.6)", fontSize: 9 }}>Absent</div>
          </div>
          <div style={{ flex: 1, background: "rgba(255,255,255,0.12)", borderRadius: 10, padding: "7px 10px" }}>
            <div style={{ color: "#fff", fontSize: 16, fontWeight: 800 }}>{Math.round(presentCount / names.length * 100)}%</div>
            <div style={{ color: "rgba(255,255,255,0.6)", fontSize: 9 }}>Rate</div>
          </div>
        </div>
      </div>

      <div style={{ flex: 1, overflowY: "auto", padding: "12px 12px" }}>
        {names.map((name, i) => (
          <div key={name} onClick={() => setMarked(m => ({ ...m, [name]: !m[name] }))}
            style={{ display: "flex", alignItems: "center", justifyContent: "space-between", background: "#fff", borderRadius: 12, padding: "10px 12px", marginBottom: 7, border: "1px solid #E8EDF5", cursor: "pointer" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 9 }}>
              <div style={{ width: 30, height: 30, borderRadius: "50%", background: "#EEF2FF", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 700, color: "#4338CA" }}>
                {name.split(" ").map(p => p[0]).join("")}
              </div>
              <div>
                <div style={{ fontSize: 12, fontWeight: 600, color: "#0D1B4A" }}>{name}</div>
                <div style={{ fontSize: 9, color: "#8898BB" }}>Roll #{i + 1}</div>
              </div>
            </div>
            <div style={{
              padding: "4px 10px", borderRadius: 20, fontSize: 10, fontWeight: 700,
              background: marked[name] ? "#F0FDF4" : "#FEF2F2",
              color: marked[name] ? "#15803D" : "#DC2626",
              border: `1px solid ${marked[name] ? "#BBF7D0" : "#FECACA"}`,
            }}>
              {marked[name] ? "Present" : "Absent"}
            </div>
          </div>
        ))}
        <div style={{ background: "#4338CA", borderRadius: 12, padding: "11px", textAlign: "center", marginTop: 4 }}>
          <span style={{ color: "#fff", fontSize: 12, fontWeight: 700 }}>Save Attendance</span>
        </div>
      </div>
    </div>
  );
}

function MarksScreen() {
  const students = [
    { name: "Aarav Shah",  eng: 88, math: 91, sci: 79, total: 258 },
    { name: "Priya Nair",  eng: 94, math: 87, sci: 90, total: 271 },
    { name: "Rishi Mehta", eng: 72, math: 68, sci: 74, total: 214 },
    { name: "Sneha Joshi", eng: 95, math: 96, sci: 93, total: 284 },
    { name: "Dev Patel",   eng: 80, math: 75, sci: 82, total: 237 },
  ];

  const grade = (t: number) => t >= 270 ? "A+" : t >= 240 ? "A" : t >= 210 ? "B+" : "B";
  const gradeColor = (t: number) => t >= 270 ? "#15803D" : t >= 240 ? "#0369A1" : t >= 210 ? "#C2410C" : "#7C3AED";

  return (
    <div style={{ fontFamily: "sans-serif", height: "100%", display: "flex", flexDirection: "column", background: "#F5F7FA" }}>
      <div style={{ background: "linear-gradient(135deg,#0369A1,#0EA5E9)", padding: "14px 16px 16px", borderRadius: "0 0 20px 20px" }}>
        <div style={{ color: "rgba(255,255,255,0.65)", fontSize: 10, marginBottom: 3 }}>Class 8A · Unit Test 1</div>
        <div style={{ color: "#fff", fontSize: 15, fontWeight: 700 }}>Marks & Grades</div>
      </div>

      <div style={{ flex: 1, overflowY: "auto", padding: "12px 12px" }}>
        <div style={{ background: "#fff", borderRadius: 12, border: "1px solid #E8EDF5", overflow: "hidden", marginBottom: 10 }}>
          <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr 1fr 1fr", padding: "8px 10px", borderBottom: "1px solid #F0F4FF", background: "#F8FAFF" }}>
            {["Student","Eng","Math","Sci","Tot","Gr"].map(h => (
              <div key={h} style={{ fontSize: 9, fontWeight: 700, color: "#8898BB", textAlign: h === "Student" ? "left" : "center" }}>{h}</div>
            ))}
          </div>
          {students.map((s, i) => (
            <div key={s.name} style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr 1fr 1fr", padding: "9px 10px", borderBottom: i < students.length - 1 ? "1px solid #F0F4FF" : "none", alignItems: "center" }}>
              <div style={{ fontSize: 10, fontWeight: 600, color: "#0D1B4A" }}>{s.name.split(" ")[0]}</div>
              {[s.eng, s.math, s.sci, s.total].map((v, j) => (
                <div key={j} style={{ fontSize: 10, textAlign: "center", color: "#444E6A" }}>{v}</div>
              ))}
              <div style={{ textAlign: "center" }}>
                <span style={{ fontSize: 9, fontWeight: 700, color: gradeColor(s.total), background: gradeColor(s.total) + "15", borderRadius: 6, padding: "2px 5px" }}>{grade(s.total)}</span>
              </div>
            </div>
          ))}
        </div>
        <div style={{ background: "#0369A1", borderRadius: 12, padding: "11px", textAlign: "center" }}>
          <span style={{ color: "#fff", fontSize: 12, fontWeight: 700 }}>Share Results with Parents</span>
        </div>
      </div>
    </div>
  );
}

function FeesScreen() {
  const students = [
    { name: "Aarav Shah",  amount: "₹12,500", status: "paid",    due: "Paid on 1 Aug" },
    { name: "Priya Nair",  amount: "₹12,500", status: "paid",    due: "Paid on 3 Aug" },
    { name: "Rishi Mehta", amount: "₹12,500", status: "overdue", due: "Due: 31 Jul" },
    { name: "Sneha Joshi", amount: "₹12,500", status: "paid",    due: "Paid on 2 Aug" },
    { name: "Dev Patel",   amount: "₹12,500", status: "pending", due: "Due: 10 Aug" },
    { name: "Meera Iyer",  amount: "₹12,500", status: "overdue", due: "Due: 31 Jul" },
  ];

  const sc: Record<string, { bg: string; color: string; label: string }> = {
    paid:    { bg: "#F0FDF4", color: "#15803D", label: "Paid" },
    pending: { bg: "#FFF7ED", color: "#C2410C", label: "Pending" },
    overdue: { bg: "#FEF2F2", color: "#DC2626", label: "Overdue" },
  };

  const paidCount = students.filter(s => s.status === "paid").length;

  return (
    <div style={{ fontFamily: "sans-serif", height: "100%", display: "flex", flexDirection: "column", background: "#F5F7FA" }}>
      <div style={{ background: "linear-gradient(135deg,#7C3AED,#A855F7)", padding: "14px 16px 16px", borderRadius: "0 0 20px 20px" }}>
        <div style={{ color: "rgba(255,255,255,0.65)", fontSize: 10, marginBottom: 3 }}>Q1 Fees · Class 8A</div>
        <div style={{ color: "#fff", fontSize: 15, fontWeight: 700, marginBottom: 10 }}>Fee Collection</div>
        <div style={{ display: "flex", gap: 8 }}>
          <div style={{ flex: 1, background: "rgba(255,255,255,0.12)", borderRadius: 10, padding: "7px 10px" }}>
            <div style={{ color: "#fff", fontSize: 14, fontWeight: 800 }}>₹{paidCount * 12.5}K</div>
            <div style={{ color: "rgba(255,255,255,0.6)", fontSize: 9 }}>Collected</div>
          </div>
          <div style={{ flex: 1, background: "rgba(255,255,255,0.12)", borderRadius: 10, padding: "7px 10px" }}>
            <div style={{ color: "#fff", fontSize: 14, fontWeight: 800 }}>₹{(students.length - paidCount) * 12.5}K</div>
            <div style={{ color: "rgba(255,255,255,0.6)", fontSize: 9 }}>Pending</div>
          </div>
        </div>
      </div>

      <div style={{ flex: 1, overflowY: "auto", padding: "12px 12px" }}>
        {students.map((s) => (
          <div key={s.name} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", background: "#fff", borderRadius: 12, padding: "10px 12px", marginBottom: 7, border: "1px solid #E8EDF5" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 9 }}>
              <div style={{ width: 30, height: 30, borderRadius: "50%", background: "#F5F3FF", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 700, color: "#7C3AED" }}>
                {s.name.split(" ").map(p => p[0]).join("")}
              </div>
              <div>
                <div style={{ fontSize: 12, fontWeight: 600, color: "#0D1B4A" }}>{s.name}</div>
                <div style={{ fontSize: 9, color: "#8898BB" }}>{s.due}</div>
              </div>
            </div>
            <div style={{ textAlign: "right" }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: "#0D1B4A", marginBottom: 3 }}>{s.amount}</div>
              <span style={{ fontSize: 9, fontWeight: 700, color: sc[s.status].color, background: sc[s.status].bg, borderRadius: 6, padding: "2px 7px" }}>{sc[s.status].label}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function MessagesScreen() {
  const [msg, setMsg] = useState("");
  const [chats, setChats] = useState([
    { from: "parent", name: "Mrs. Shah", text: "Good morning! Aarav was not well today." },
    { from: "teacher", name: "You", text: "Thank you for letting me know. Please share the doctor's note when he returns." },
    { from: "parent", name: "Mrs. Shah", text: "Sure, will do. Can you share today's homework?" },
    { from: "teacher", name: "You", text: "I've posted it on the Homework section. Aarav can check once he's better." },
  ]);

  const send = () => {
    if (!msg.trim()) return;
    setChats(c => [...c, { from: "teacher", name: "You", text: msg }]);
    setMsg("");
  };

  return (
    <div style={{ fontFamily: "sans-serif", height: "100%", display: "flex", flexDirection: "column", background: "#F5F7FA" }}>
      <div style={{ background: "linear-gradient(135deg,#86198F,#C026D3)", padding: "14px 16px 14px", borderRadius: "0 0 20px 20px" }}>
        <div style={{ color: "rgba(255,255,255,0.65)", fontSize: 10, marginBottom: 2 }}>Parent Chat</div>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div style={{ width: 30, height: 30, borderRadius: "50%", background: "rgba(255,255,255,0.2)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, fontWeight: 700, color: "#fff" }}>M</div>
          <div>
            <div style={{ color: "#fff", fontSize: 13, fontWeight: 700 }}>Mrs. Shah</div>
            <div style={{ color: "rgba(255,255,255,0.6)", fontSize: 9 }}>Aarav Shah's mother</div>
          </div>
        </div>
      </div>

      <div style={{ flex: 1, overflowY: "auto", padding: "10px 12px", display: "flex", flexDirection: "column", gap: 8 }}>
        {chats.map((c, i) => (
          <div key={i} style={{ display: "flex", justifyContent: c.from === "teacher" ? "flex-end" : "flex-start" }}>
            <div style={{
              maxWidth: "78%", padding: "8px 10px", borderRadius: 12,
              background: c.from === "teacher" ? "#86198F" : "#fff",
              color: c.from === "teacher" ? "#fff" : "#0D1B4A",
              border: c.from === "parent" ? "1px solid #E8EDF5" : "none",
              borderBottomRightRadius: c.from === "teacher" ? 4 : 12,
              borderBottomLeftRadius: c.from === "parent" ? 4 : 12,
            }}>
              <div style={{ fontSize: 11, lineHeight: 1.4 }}>{c.text}</div>
            </div>
          </div>
        ))}
      </div>

      <div style={{ padding: "8px 12px 12px", display: "flex", gap: 7, alignItems: "center" }}>
        <input
          value={msg}
          onChange={e => setMsg(e.target.value)}
          onKeyDown={e => e.key === "Enter" && send()}
          placeholder="Type a message…"
          style={{ flex: 1, border: "1px solid #E8EDF5", borderRadius: 20, padding: "9px 13px", fontSize: 11, outline: "none", background: "#fff", color: "#0D1B4A" }}
        />
        <button onClick={send} style={{ width: 32, height: 32, borderRadius: "50%", background: "#86198F", border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14 }}>
          ➤
        </button>
      </div>
    </div>
  );
}

const screenMap: Record<string, React.ReactNode> = {
  dashboard: <DashboardScreen />,
  attendance: <AttendanceScreen />,
  marks: <MarksScreen />,
  fees: <FeesScreen />,
  messages: <MessagesScreen />,
};

const TAB_IDS = tabs.map((t) => t.id);
const INTERVAL_MS = 4000;

export default function AppDemo() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [paused, setPaused] = useState(false);
  const active = TAB_IDS[activeIdx];

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => {
      setActiveIdx((i) => (i + 1) % TAB_IDS.length);
    }, INTERVAL_MS);
    return () => clearInterval(timer);
  }, [paused]);

  const selectTab = (id: string) => {
    setActiveIdx(TAB_IDS.indexOf(id));
    setPaused(true);
  };

  return (
    <section className="py-12 md:py-24 px-8" style={{ background: "var(--navy)" }}>
      <style>{`@keyframes progress { from { width: 0% } to { width: 100% } }`}</style>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 md:mb-14">
          <div className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: "rgba(90,122,232,0.8)" }}>See it in action</div>
          <h2 className="text-3xl md:text-4xl font-black tracking-tight text-white" style={{ textWrap: "balance" }}>
            A real look at the app
          </h2>
          <p className="text-sm mt-4 max-w-md mx-auto" style={{ color: "rgba(255,255,255,0.45)" }}>
            Screens cycle automatically. Click any tab to jump to it.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center gap-10">
          {/* Tab buttons */}
          <div className="flex lg:flex-col gap-2.5 flex-wrap justify-center lg:justify-start lg:pt-16">
            {tabs.map((t) => (
              <button key={t.id} onClick={() => selectTab(t.id)}
                style={{
                  display: "flex", alignItems: "center", gap: 10,
                  padding: "11px 18px", borderRadius: 14, border: "none", cursor: "pointer",
                  background: active === t.id ? "rgba(90,122,232,0.18)" : "rgba(255,255,255,0.04)",
                  outline: active === t.id ? "1.5px solid rgba(90,122,232,0.45)" : "1.5px solid transparent",
                  transition: "all 0.18s",
                  minWidth: 150,
                  position: "relative",
                  overflow: "hidden",
                }}>
                <span style={{ fontSize: 18 }}>{t.icon}</span>
                <span style={{ fontSize: 13, fontWeight: active === t.id ? 700 : 500, color: active === t.id ? "#fff" : "rgba(255,255,255,0.45)" }}>
                  {t.label}
                </span>
                {active === t.id && !paused && (
                  <span style={{
                    position: "absolute", bottom: 0, left: 0, height: 2,
                    background: "#5A7AE8", borderRadius: 2,
                    animation: `progress ${INTERVAL_MS}ms linear`,
                  }} />
                )}
                {active === t.id && (
                  <span style={{ marginLeft: "auto", width: 6, height: 6, borderRadius: "50%", background: "#5A7AE8", flexShrink: 0 }} />
                )}
              </button>
            ))}
          </div>

          {/* Phone frame */}
          <div style={{
            width: 270,
            height: 560,
            borderRadius: 44,
            background: "#0A0A0F",
            boxShadow: "0 0 0 2px #1e2030, 0 30px 80px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.07)",
            padding: 10,
            flexShrink: 0,
            position: "relative",
          }}>
            {/* notch */}
            <div style={{ position: "absolute", top: 10, left: "50%", transform: "translateX(-50%)", width: 80, height: 22, background: "#0A0A0F", borderRadius: "0 0 14px 14px", zIndex: 10, display: "flex", alignItems: "center", justifyContent: "center", gap: 6 }}>
              <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#1a1a2a", border: "1px solid #2a2a3a" }} />
              <div style={{ width: 40, height: 5, borderRadius: 3, background: "#1a1a2a" }} />
            </div>
            {/* screen */}
            <div style={{ width: "100%", height: "100%", borderRadius: 36, overflow: "hidden", background: "#F5F7FA" }}>
              {screenMap[active]}
            </div>
          </div>

          {/* Right description */}
          <div className="lg:pt-16 max-w-xs text-center lg:text-left">
            {tabs.map((t) => active === t.id && (
              <div key={t.id}>
                <div style={{ fontSize: 28, marginBottom: 12 }}>{t.icon}</div>
                <h3 className="text-xl font-black text-white mb-3">{descriptions[t.id].title}</h3>
                <p className="text-sm leading-relaxed mb-5" style={{ color: "rgba(255,255,255,0.5)" }}>
                  {descriptions[t.id].desc}
                </p>
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  {descriptions[t.id].bullets.map((b) => (
                    <li key={b} style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                      <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#5A7AE8", flexShrink: 0 }} />
                      <span style={{ fontSize: 12, color: "rgba(255,255,255,0.55)" }}>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const descriptions: Record<string, { title: string; desc: string; bullets: string[] }> = {
  dashboard: {
    title: "Admin Dashboard",
    desc: "Everything your school admin needs at a glance: students, staff, attendance and fee status, all on one screen.",
    bullets: ["Live student and staff counts", "Today's attendance rate", "Pending fees summary", "One-tap access to all modules"],
  },
  attendance: {
    title: "Attendance Marking",
    desc: "Teachers mark attendance in under a minute. Parents get notified automatically. No registers, no paperwork.",
    bullets: ["Tap to toggle present / absent", "Live count and percentage", "Parents notified instantly", "Monthly reports auto-generated"],
  },
  marks: {
    title: "Marks & Grades",
    desc: "Enter exam scores for each subject. Grades calculate automatically. Parents can view results directly in the app.",
    bullets: ["Per-subject score entry", "Automatic grade calculation", "Class rankings and averages", "Shareable result cards"],
  },
  fees: {
    title: "Fee Collection",
    desc: "Track who has paid and who hasn't. Send reminders for overdue fees. Generate receipts with one tap.",
    bullets: ["Paid / pending / overdue view", "Auto payment reminders", "Digital receipts on collection", "Term-wise fee reports"],
  },
  messages: {
    title: "Parent–Teacher Chat",
    desc: "Direct messaging between teachers and parents inside the app. No phone numbers shared. Every conversation logged.",
    bullets: ["Private 1-on-1 conversations", "No personal numbers required", "Message history always saved", "Works across all devices"],
  },
};
