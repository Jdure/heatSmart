import "./globals.css";
import { Inter } from "next/font/google";
import { NavBar } from "./components/NavBar";
import { Footer } from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "HeatSmart Solutions",
  description: "Heating appliance company",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-hue-primary text-hue-base">
      <body className={inter.className}>
        <NavBar />
        <main className="flex min-h-screen flex-col items-center justify-even py-12 space-y-12">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
