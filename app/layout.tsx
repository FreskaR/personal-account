import type { Metadata } from "next";
import { sans } from "./ui/fonts";
import '@/app/ui/global.css'
import Header from "./ui/header";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${sans.className} antialiased bg-white text-black items-center`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
