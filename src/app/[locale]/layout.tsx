import React from "react";
import "@/styles/globals.scss";
import type { Metadata } from "next";
import Script from "next/script";
import { PageContainer } from "@/components";
import { NextIntlClientProvider } from "next-intl";
import localFont from "next/font/local";

const SatoshiFont = localFont({
  src: "../../../public/font/Satoshi-Variable.ttf",
  variable: "--font-satoshi",
  display: "swap",
});

interface Props {
  children: React.ReactNode;
  params: {
    locale: "en-US";
  };
}

export const metadata: Metadata = {
  title: "Mojtaba Razaghi",
  description: "Frontend Developer",
};

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "de" }];
}

export default async function RootLayout({ children, params }: Props) {
  let messages;
  try {
    messages = (await import(`@/messages/${params.locale}.json`)).default;
  } catch (error) {
    console.error(error);
  }
  return (
    <html
      dir="ltr"
      lang={params.locale}
      className={`${SatoshiFont.variable} font-satoshi dark snap-y`}
    >
      <Script src="/bg-animation.js" />
      <body>
        <canvas id="mosaicCanvas" />
        <main>
          <NextIntlClientProvider locale={params.locale} messages={messages}>
            {/* <PageContainer>{children}</PageContainer> */}
            {children}
          </NextIntlClientProvider>
        </main>
      </body>
    </html>
  );
}
