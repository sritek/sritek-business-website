import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "SriTek — Product Engineering Agency | Build. Launch. Scale.",
  description:
    "We build full-stack web products — MVPs, dashboards, and automations — using modern JavaScript and TypeScript. Your engineering partner for startup success.",
  keywords: [
    "MVP development",
    "React engineering agency",
    "freelance dev agency",
    "web app development",
    "SaaS development",
    "product engineering",
  ],
  authors: [{ name: "SriTek" }],
  openGraph: {
    title: "SriTek — Product Engineering Agency",
    description:
      "Build. Launch. Scale. Your full-stack product engineering team — on demand.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "SriTek — Product Engineering Agency",
    description:
      "Build. Launch. Scale. Your full-stack product engineering team — on demand.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "SriTek",
              description:
                "Product Engineering Agency specializing in MVPs, dashboards, and automations",
              url: "https://sritek.com",
              logo: "https://sritek.com/logo.png",
              sameAs: [],
            }),
          }}
        />
      </head>
      <body className="antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

