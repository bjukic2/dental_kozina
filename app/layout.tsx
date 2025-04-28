import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomSessionProvider from "./SessionProvider";

export const metadata: Metadata = {
  title: "Aestethic Dental Kozina",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-grow pt-16">
          <CustomSessionProvider>{children}</CustomSessionProvider>
        </main>
        <Footer />
      </body>
    </html>
  );
}
