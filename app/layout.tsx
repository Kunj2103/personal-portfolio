import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "Kunj Jansari | Web Developer, Software Developer, Full Stack Developer",
  description:
    "Kunj Jnsari - Expert Web Developer specializing in Front-End and Full-Stack Development. Explore my portfolio, skills, and latest projects in web technology.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
