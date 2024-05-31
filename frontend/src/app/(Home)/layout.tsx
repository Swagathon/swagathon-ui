import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { APP_DESCRIPTION, APP_NAME } from "@/constants";

import "@/styles/globals.css";
import "@/styles/fonts.css";
import "@rainbow-me/rainbowkit/styles.css";

import { Providers } from "../providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: APP_NAME,
  applicationName: APP_NAME,

  description: APP_DESCRIPTION,
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
