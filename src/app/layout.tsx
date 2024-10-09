import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import TopNav from "~/Components/TopNav";
import { ClerkProvider } from "@clerk/nextjs";

export const metadata: Metadata = {
  title: "T3 Gallery",
  description: "Top notch Gallery",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <ClerkProvider>
      <html lang="en" className={`${GeistSans.variable}`}>
        <body className="bg-black text-white">
          <TopNav />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
