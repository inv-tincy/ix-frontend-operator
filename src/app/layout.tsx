import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "@/store/provider";
import SystemMaintenanceLayout from "@/layouts/SystemMaintanenceLayout";
import Script from "next/script";

export const metadata: Metadata = {
  title: "InterviewX",
  description: "InterviewX application",
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" translate="no">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
        {/* <Script id="gtm" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-KZ9PQTCW');`}
        </Script> */}
      </head>
      <body>
        <Providers>
          <SystemMaintenanceLayout>{children}</SystemMaintenanceLayout>
          <noscript>
            <iframe
              src="https://www.googletagmanager.com/ns.html?id=GTM-KZ9PQTCW"
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            ></iframe>
          </noscript>
        </Providers>
      </body>
    </html>
  );
}
