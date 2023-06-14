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
        <main className="flex min-h-screen  flex-col phone:items-center laptop:items-stretch justify-evenly phone:py-6 tablet:py-12 laptop:py-20 phone:space-y-4 tablet:space-y-12">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
