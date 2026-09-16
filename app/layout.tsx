import type { Metadata } from "next";
import "@/styles/globals.css";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";

export const metadata: Metadata = {
  title: "Mailgo - Intelligent Email Marketing & Campaign Service",
  description:
    "Gain control of your business's growth with Mailgo's comprehensive marketing, automation, and email marketing platform.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-gray-900 text-gray-100">
      <body className="min-h-screen bg-gray-900 antialiased flex flex-col justify-between selection:bg-purple-600 selection:text-white">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
