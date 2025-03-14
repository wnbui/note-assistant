'use client'

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar";
import { SessionProvider } from 'next-auth/react';

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

// export const metadata: Metadata = {
//     title: "Create Next App",
//     description: "Generated by create next app",
// };

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" data-theme="nord">
        <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
        <SessionProvider>
            <NavBar />
            <main className="flex min-h-screen flex-col items-center p-10">
                {children}
            </main>
        </SessionProvider>
        </body>
        </html>
    );
}