import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "../../styles/globals.css";
import { cn } from "@/lib/utils";

const ns = Noto_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pollit - Real-time Q&A and polls",
  description: "Connect with your audience with real-time Q&A and polls.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="h-full" lang="en" suppressHydrationWarning>
      <body className={cn("theme-yellow bg-zinc-100 h-full", ns.className)}>
        {children}
      </body>
    </html>
  );
}
