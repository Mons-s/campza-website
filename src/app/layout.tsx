import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.campza.in"),
  title: {
    default: "CampZa – School Management App",
    template: "%s",
  },
  description: "CampZa is an all-in-one school management app covering attendance, fees, marks, homework, timetables and parent communication.",
  keywords: ["school management system", "school management app", "attendance management", "fee collection app", "parent teacher communication", "school ERP"],
  openGraph: {
    siteName: "CampZa",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
  },
  verification: {
    google: "AqT716_GafwuLfJopDiEen2RkPi5l_zmH7ioIoufq1o",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
