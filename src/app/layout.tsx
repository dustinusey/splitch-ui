import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import { Providers, accentScript } from "@/components/theme/providers";
import "./globals.css";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "splitch ui kit",
  description: "Reusable UI starter kit — tokens, themed shadcn/ui components and chat-style kit components.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-accent="blue" className={`${inter.variable} ${geistMono.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: accentScript }} />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
