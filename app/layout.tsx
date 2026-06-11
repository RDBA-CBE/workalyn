import "./globals.css";
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "Workalyn",
  description: "Premium co-working spaces",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-K7CM8R8R');`,
          }}
        />
        {/* End Google Tag Manager */}
        <script src="https://cdn.tailwindcss.com"></script>
        <link
          href="https://fonts.googleapis.com/css2?family=GFS+Didot&family=Raleway:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-K7CM8R8R"
            height="0"
            width="0"
            style={{display:"none",visibility:"hidden"}}
          ></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <Header />
        <main className="pt-[75px] lg:pt-[140px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
