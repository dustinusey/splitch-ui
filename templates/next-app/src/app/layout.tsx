import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "@splitch/ui";
import "./globals.css";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "New splitch app",
  description: "Built with @splitch/ui",
};

// Brand color: keep data-accent and defaultAccent in sync
// (blue | purple | green | red | cyan | orange | pink | teal).
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-accent="blue" className={inter.variable} suppressHydrationWarning>
      <head>
        {/* Applies a visitor's saved accent before paint (see AccentPicker). */}
        <script dangerouslySetInnerHTML={{ __html: `try{var a=localStorage.getItem("splitch-accent");if(a)document.documentElement.dataset.accent=a}catch(e){}` }} />
      </head>
      <body>
        <Providers defaultAccent="blue">{children}</Providers>
      </body>
    </html>
  );
}
