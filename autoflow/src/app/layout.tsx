import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/theme-provier"

const sans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AutoFlow",
  description: "Automate your workflow with AutoFlow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={sans.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        </body>
    </html>
  );
}
