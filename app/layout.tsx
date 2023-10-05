import "styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { redirect } from "next/navigation";
import { isUserLogged } from "@/lib/utils";
import { cookies } from "next/headers";
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

async function getUser() {
  const token = cookies().get("userToken");
  console.log(token);
  if (!token) return redirect("/auth");
  return true;
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  await getUser();

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
