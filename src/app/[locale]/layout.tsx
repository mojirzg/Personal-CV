import React from "react";
import "@/styles/globals.scss";
import Script from "next/script";
import localFont from "next/font/local";
import type { Metadata } from "next";
import {hasLocale, NextIntlClientProvider} from 'next-intl'
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";


const SatoshiFont = localFont({
  src: "../../../public/font/Satoshi-Variable.ttf",
  variable: "--font-satoshi",
  display: "swap",
});

type Props = {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
};
 

export const metadata: Metadata = {
  title: "Mojtaba Razaghi",
  description: "Frontend Developer",
};

export default async function RootLayout({children, params}: Props) {
  const {locale} = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html
      dir="ltr"
      className={`${SatoshiFont.variable} font-satoshi dark snap-y px-10`}
    >
      <Script src="/bg-animation.js" />
      <body>
        <canvas id="mosaicCanvas" />
        <main>
          <NextIntlClientProvider>
            {children}
          </NextIntlClientProvider>
        </main>
      </body>
    </html>
  );
}
