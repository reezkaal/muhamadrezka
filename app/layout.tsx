import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const siteName = "Muhamad Rezka Al Anshori";
const description =
  "Fresh graduate software developer focused on building clean, reliable web applications. Explore my projects, stack, and background.";

export const metadata: Metadata = {
  metadataBase: new URL("https://muhamadrezka.dev"),
  title: {
    default: siteName,
    template: "%s · Muhamad Rezka Al Anshori",
  },
  description,
  keywords: [
    "software developer",
    "web developer",
    "fresh graduate",
    "portfolio",
    "Node.js",
    "Vue.js",
    "full stack developer",
  ],
  authors: [{ name: "Muhamad Rezka Al Anshori" }],
  openGraph: {
    title: siteName,
    description,
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans bg-background text-foreground antialiased">
        {children}
      </body>
    </html>
  );
}
