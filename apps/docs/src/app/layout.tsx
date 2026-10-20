import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import { Providers } from "@splitch/ui";
import "./globals.css";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "@splitch/ui docs",
  description: "Component gallery for the splitch design system.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-accent="blue" className={`${inter.variable} ${geistMono.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: `try{var a=localStorage.getItem("splitch-accent");if(a)document.documentElement.dataset.accent=a}catch(e){}` }} />
      </head>
      <body>
        <Providers defaultAccent="blue">{children}</Providers>
      </body>
    </html>
  );
}
