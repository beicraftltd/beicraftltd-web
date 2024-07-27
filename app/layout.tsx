import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
// import NavbarSection from "./components/guest/NavbarSection";
// import FooterSection from "./components/guest/FooterSection";
import { ThemeProvider } from "./components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Beicraft Limited",
  description: "Bringing your ideas to live",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider 
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange>

        
        {/* <NavbarSection /> */}
        {children}
        {/* <FooterSection /> */}
        </ThemeProvider>
        </body>

    </html>
  );
}
