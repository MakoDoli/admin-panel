import { UsersProvider } from "@/providers/UsersContext";

import { CssBaseline, ThemeProvider } from "@mui/material";
import type { Metadata } from "next";

import { demoTheme } from "@/components/dashboard/Overview";

import { montserrat } from "@/utils/fonts";

import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Admin Dashboard",
    template: "%s - Admin Dashboard",
  },
  description: "A Next.js admin dashboard with Material-UI components",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ThemeProvider theme={demoTheme}>
        <CssBaseline />
        <UsersProvider>
          <body className={`${montserrat.className} antialiased`}>
            {children}
          </body>
        </UsersProvider>
      </ThemeProvider>
    </html>
  );
}
