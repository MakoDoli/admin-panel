import type { Metadata } from "next";
//import { Montserrat } from "next/font/google";
import "./globals.css";
import { UsersProvider } from "@/providers/UsersContext";
import { montserrat } from "@/utils/fonts";

export const metadata: Metadata = {
  title: "Admin Dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <UsersProvider>
        <body className={`${montserrat.className} antialiased`}>
          {children}
        </body>
      </UsersProvider>
    </html>
  );
}
