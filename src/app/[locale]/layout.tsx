import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import Header from "@/components/Header/header";
import Footer from "@/components/Footer/footer";
import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "ru" }, { locale: "uz" }];
}

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const { locale } = await params;

  const baseUrl = "https://leafcoffee.uz";
  const siteName = "Leafcoffee";
  const imageUrl = `${baseUrl}/og-image.jpg`;

  const meta: Record<string, Metadata> = {
    uz: {
      title: {
        default: `${siteName} — Coffee va Desertlar Do‘koni`,
        template: `%s | ${siteName}`,
      },
      description:
        "Leafcoffee — coffee va desertlar sotuv do‘koni. Mijozlarimiz bu yerda mahsulotlar, biz haqimizda ma’lumot va kontakt manzillarni topishlari mumkin.",
      keywords: ["coffee", "desert", "leafcoffee", "kofe", "shirinliklar", "Qoqon"],
      openGraph: {
        locale: "uz_UZ",
        url: `${baseUrl}/uz`,
        title: siteName,
        description:
          "Leafcoffee — coffee va desertlar sotuv do‘koni. Mijozlarimiz bu yerda mahsulotlar, biz haqimizda ma’lumot va kontakt manzillarni topishlari mumkin.",
        siteName,
        images: [
          {
            url: imageUrl,
            width: 1200,
            height: 630,
            alt: "Leafcoffee rasm",
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title: siteName,
        description: "Coffee va desertlar do‘koni — Leafcoffee.",
        images: [imageUrl],
      },
      icons: {
        icon: "/logocircle.png",
        apple: "/logocircle.png",
      },
      robots: { index: true, follow: true },
    },

    ru: {
      title: {
        default: `${siteName} — Кофе и десерты`,
        template: `%s | ${siteName}`,
      },
      description:
        "Leafcoffee — сайт магазина кофе и десертов. Здесь вы найдете информацию о нашей продукции, о нас и контактные данные.",
      openGraph: {
        locale: "ru_RU",
        url: `${baseUrl}/ru`,
        title: siteName,
        description:
          "Leafcoffee — сайт магазина кофе и десертов. Здесь вы найдете информацию о нашей продукции, о нас и контактные данные.",
        siteName,
        images: [
          {
            url: imageUrl,
            width: 1200,
            height: 630,
            alt: "Изображение Leafcoffee",
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title: siteName,
        description: "Магазин кофе и десертов — Leafcoffee.",
        images: [imageUrl],
      },
      icons: { icon: "/logocircle.png" },
    },

    en: {
      title: {
        default: `${siteName} — Coffee & Desserts Shop`,
        template: `%s | ${siteName}`,
      },
      description:
        "Leafcoffee — a coffee and dessert shop website. Customers can explore our products, learn about us, and find contact information.",
      openGraph: {
        locale: "en_US",
        url: `${baseUrl}/en`,
        title: siteName,
        description:
          "Leafcoffee — a coffee and dessert shop website. Customers can explore our products, learn about us, and find contact information.",
        siteName,
        images: [
          {
            url: imageUrl,
            width: 1200,
            height: 630,
            alt: "Leafcoffee image",
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title: siteName,
        description: "Coffee & dessert shop — Leafcoffee.",
        images: [imageUrl],
      },
      icons: { icon: "/logocircle.png" },
    },
  };

  return meta[locale] || meta["uz"];
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  let messages;
  try {
    messages = (await import(`@/i18n/${locale}.json`)).default;
  } catch {
    notFound();
  }

  return (
    <html lang={locale}>
      <head>
        <link rel="alternate" hrefLang="uz" href="https://leafcoffee.uz/uz" />
        <link rel="alternate" hrefLang="ru" href="https://leafcoffee.uz/ru" />
        <link rel="alternate" hrefLang="en" href="https://leafcoffee.uz/en" />
        <link rel="alternate" hrefLang="x-default" href="https://leafcoffee.uz" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <NextIntlClientProvider locale={locale} messages={messages} key={locale}>
          <div className="flex flex-col h-screen justify-between">
            <div>
              <Header />
              {children}
              <Footer locale={locale} />
            </div>
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
