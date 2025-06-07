import {Inter} from 'next/font/google'
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Header from '@/components/header';
import { dark } from '@clerk/themes';

const inter = Inter({subsets: ["latin"]})
export const metadata = {
   title: "Mentora - Learn By Digital Coach",
   description: ""
}

export default function RootLayout({ children }) {
  return (
    <ClerkProvider appearance={{baseTheme: dark}} >
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className}`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Header/>
          <main className="min-h-screen">{children}</main>
          {/* Footer */}
          <footer className="bg-neutral-500/30 py-10 text-center">
            <div className="container mx-auto px-4 py-2 text-center bg-muted-foreground">
              <p className="font-bold text-neutral-800">
                Made by Priyanshu Dhawan
              </p>
            </div>
            <p className="text-sm font-serif">2025 Terms and Conditions ©</p>
          </footer>
        </ThemeProvider>
      </body>
    </html>
    </ClerkProvider>
  );
}
