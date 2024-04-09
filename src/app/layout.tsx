import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CRSCounter App",
  description: "A real counter app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className=" bg-gray-800">{children} </body>
    </html>
  );
}
