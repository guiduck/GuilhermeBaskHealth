import "styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bask Health",
  description: "The shopify of e-prescribing",
  keywords: ["Next.js", "React", "Tailwind CSS", "Server Components", "Shadcn"],
  authors: [
    {
      name: "Guilherme",
      url: "https://github.com/guiduck",
    },
  ],
  creator: "Guilherme",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system">
          <Navbar />
          {children}
          {/* <Footer /> */}
        </ThemeProvider>
      </body>
    </html>
  );
}
