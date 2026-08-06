import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CampZa – School Management System",
  description: "CampZa empowers schools through simplicity. Attendance, fees, marks, homework, timetables and parent communication in one app.",
  keywords: "school management system, school management app, attendance management, fee collection, parent communication",
  openGraph: {
    title: "CampZa – School Management System",
    description: "Empowering schools through simplicity.",
    url: "https://campza.in",
    siteName: "CampZa",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
