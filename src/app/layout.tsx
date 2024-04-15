import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./theme.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Stocks Compare",
  description: "A website created to facilitate the life of investors",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
