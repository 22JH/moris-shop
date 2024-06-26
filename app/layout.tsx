import type { Metadata } from "next";
import "./globals.css";
import Topbar from "./components/navbar/Topbar";

interface RootLayoutType {
  children: React.ReactNode;
  params: {
    category: string | undefined;
  };
}

export const metadata: Metadata = {
  title: "Morris Shop",
  description: "Generated by create next app",
};

export default function RootLayout({ children, params }: RootLayoutType) {
  return (
    <html lang="ko-KR">
      <body>
        <Topbar />
        {children}
      </body>
    </html>
  );
}
