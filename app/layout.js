
import {Inter} from 'next/font/google'
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Header from '@/components/header';
import { dark, experimental__simple } from '@clerk/themes';
import Footer from '@/components/footer';

const inter = Inter({subsets: ["latin"]})

export  const metadata = {
  title: "Mentora - Learn By Digital Coach",
  description: ""
}

export default function RootLayout({ children }) {

  return (
    <ClerkProvider appearance={{baseTheme: experimental__simple}} >
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
          <Footer/>
        </ThemeProvider>
      </body>
    </html>
    </ClerkProvider>
  );
}
