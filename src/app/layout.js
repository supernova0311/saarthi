import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./Header";
import Footer from "./Footer";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
import {
  ClerkProvider,
  ClerkLoading,
  ClerkLoaded,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'


const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
export const metadata = {
  title: "Saarthi",
  description: "A ONE STOP SOLUTION FOR EDUCATION",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ClerkLoading>
          <div className="flex items-center justify-center h-screen text-2xl">
            LOADING....
          </div>
        </ClerkLoading>
        <Header/>
        {children}
        <Footer/>
        </body>
      </html>
    </ClerkProvider>
  );
}

