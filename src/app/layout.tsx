import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import NightSky from "./components/NightSky";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "return together;",
  description: "수진&징관 3주년 기념 사이트",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${inter.className} relative`}>
        <div className='fixed -z-10'>
          <NightSky />
          <span className='shooting-star' />
          <span className='shooting-star' />
          <span className='shooting-star' />
          <span className='shooting-star' />
          <span className='shooting-star' />
          <span className='shooting-star' />
          <span className='shooting-star' />
          <span className='shooting-star' />
          <span className='shooting-star' />
          <span className='shooting-star' />
        </div>
        <Header />
        <main className='px-16'>{children}</main>
      </body>
    </html>
  );
}
