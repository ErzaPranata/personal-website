import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Erza Pranata Ramadhan",
  description: "This is my Personal Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className="ambient-glow antialiased selection:bg-brand-purple/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}