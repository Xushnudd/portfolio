import type { Metadata } from "next";
import "./globals.css";
import Header from "./_components/Header";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Portfolio my web site",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body
        className="
          selection:bg-green-600
          selection:text-black"
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
