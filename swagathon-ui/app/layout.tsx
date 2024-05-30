import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { Providers } from "./providers";


import "@/styles/globals.css";
import "@/styles/globalsv0.css";
import "@/styles/fonts.css";
import "@/styles/styles.css";
import "@rainbow-me/rainbowkit/styles.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
// const open_sans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Swagathon",
  applicationName: "Swagathon",

  description: "Social Ratings for Event Swag",
  icons: "favicon.ico",
  manifest: "site.webmanifest",
};

export const viewport: Viewport = {
  initialScale: 1,
  width: "device-width",
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#151b28" },
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
  ],
  // userScalable: false,
  // colorScheme: 'dark'
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
