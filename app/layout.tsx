import type { Metadata } from "next";
import "./globals.css";
import Header from "./_components/Header";
import BgGrid from "./_components/BgGrid";
import Footer from "./_components/Footer";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Portfolio my web site",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body
        className="
          relative
          bg-slate-900
          text-amber-50
          selection:bg-emerald-400
          selection:text-black
        "
      >
        <BgGrid />
        <div className="relative">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
