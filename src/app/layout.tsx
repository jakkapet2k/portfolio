import type { Metadata } from "next";
import { Prompt } from "next/font/google";
import "./globals.css";
import Navbar from "@C/Navbar";
import Footer from "@C/Footer";

const geistSans = Prompt({
  variable: '--font-Prompt',
  subsets: ["latin"],
  weight: "100"
});

export const metadata: Metadata = {
  title: "Jakkapet Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <meta name="apple-mobile-web-app-title" content="MyWebSite" />
        <meta name="description" content="Portfolio" />
        <meta name="robots" content="noindex, nofollow" />
        {/* <!-- Facebook Meta Tags --> */}
        <meta property="og:url" content="https://www.jakkapet.com" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Jakkapet Portfolio" />
        <meta property="og:description" content="Portfolio" />
        <meta property="og:image" content="https://opengraph.b-cdn.net/production/images/72a467ae-433c-4b40-8f03-4d97fe18ccc5.png?token=NnhpYodm54XNq4DhXFuOwOMmBel34whydzoHDftGr9s&height=630&width=1200&expires=33274528464" />

        {/* <!-- Twitter Meta Tags --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="jakkapet.com" />
        <meta property="twitter:url" content="https://www.jakkapet.com" />
        <meta name="twitter:title" content="Jakkapet Portfolio" />
        <meta name="twitter:description" content="Portfolio" />
        <meta name="twitter:image" content="https://opengraph.b-cdn.net/production/images/72a467ae-433c-4b40-8f03-4d97fe18ccc5.png?token=NnhpYodm54XNq4DhXFuOwOMmBel34whydzoHDftGr9s&height=630&width=1200&expires=33274528464" />

        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={`${geistSans.variable} antialiased overflow-x-hidden`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
