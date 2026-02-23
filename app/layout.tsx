import './globals.css';
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Workalyn',
  description: 'Premium co-working spaces',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script src="https://cdn.tailwindcss.com"></script>
        <link href="https://fonts.googleapis.com/css2?family=GFS+Didot&family=Raleway:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />
      </head>
      <body>
        <Header />
        <main className="pt-[75px] lg:pt-[140px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
