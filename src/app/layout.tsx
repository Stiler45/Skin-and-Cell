import type { Metadata } from "next";
import { Hanken_Grotesk } from "next/font/google";
import "./globals.css";

const Grotesk = Hanken_Grotesk({
  variable: "--Hanken Grotesk",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Skin and Cell",
  description: "Protect and repair your skin with our formula.",
  icons: {
    icon: "/skinandcellfavicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${Grotesk.variable} ${Grotesk.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
