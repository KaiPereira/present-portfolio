import type { Metadata } from "next";
import { VT323 } from "next/font/google";
import "./globals.css";

const vt323 = VT323({
  variable: "--font-retro",
  subsets: ["latin"],
  weight: "400"
});

export const metadata: Metadata = {
  title: "kai pereira - hacker from canada",
  description: "i'm kai, a hacker from victoria, bc. i program anything from machine learning to operating systems and everything in between.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${vt323.variable}`}>
        {children}
      </body>
    </html>
  );
}
