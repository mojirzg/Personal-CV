import React from "react";
import "@/styles/globals.scss";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import { PageContainer } from "@/components";
import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

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
    notFound();
  }
  return (
    <html lang={params.locale}>
      <Script src="/bg-animation.js" />
      <body>
        <canvas id="mosaicCanvas" />
        <main>
          <NextIntlClientProvider locale={params.locale} messages={messages}>
            <PageContainer>{children}</PageContainer>
          </NextIntlClientProvider>
        </main>
      </body>
    </html>
  );
}
