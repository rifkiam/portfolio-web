import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import clsxm from "@/lib/clsxm";

const poppins = Poppins({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={clsxm(poppins.variable)}>
      <body>{children}</body>
    </html>
  );
}
