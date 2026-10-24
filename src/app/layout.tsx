import type { Metadata } from "next";
import "@fontsource-variable/schibsted-grotesk";
import "./globals.css";
import { profile } from "@/data/site";

export const metadata: Metadata = {
  title: `${profile.name} | ${profile.role}`,
  description: profile.intro,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
