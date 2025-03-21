import type { Metadata } from "next";
import { Hanken_Grotesk } from "next/font/google";
import "./globals.css";
import NextTopLoader from "nextjs-toploader";
import { Hero } from "@/components/hero";
import { Footer } from "@/components/global/Footer";

const grotesk = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Bubbles",
  description: "Bubbles connects busy professionals to reliable laundry services near them. Easily schedule pickups, track orders, and enjoy hassle-free cleaning. Grow your laundry business with secure payments, seamless order management, and delivery support.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`m-auto min-h-[100vh] flex flex-col ${grotesk.className}`}
      >
        <NextTopLoader color="#001029" showSpinner={false} />
        <Hero />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
