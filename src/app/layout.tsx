import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";
import Nav from "@/components/nav";
import Footer from "@/components/footer";

const rubik = Rubik({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: [
    "latin",
    "arabic",
    "cyrillic",
    "cyrillic-ext",
    "hebrew",
    "latin-ext",
  ],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Frontend Mentor | Bookmark landing page",
  description: "Frontend Mentor | Bookmark landing page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={rubik.className}>
        <Nav />
        <main className="min-h-screen transition-all delay-200">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
