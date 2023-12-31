import type { Metadata } from "next";
import "./globals.css";
import Topbar from "./components/Navbar/Topbar";

export const metadata: Metadata = {
  title: "Morris Shop",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
  types,
}: {
  children: React.ReactNode;
  types: React.ReactNode;
}) {
  return (
    <html lang="ko-KR">
      <body>
        <Topbar />
        {children}
      </body>
    </html>
  );
}
