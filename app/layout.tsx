import type { Metadata, Viewport } from "next";
import { El_Messiri } from "next/font/google";
import Footer from "./_components/Footer";
import Header from "./_components/Header";
import "./globals.css";

const elMessiri = El_Messiri({
  subsets: ["arabic"],
  weight: ["400", "700"],
  display: "swap",
  adjustFontFallback: true,
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL("https://aynaa.org"),
  title: {
    default: "عَيْنًا سَلْسَبِيلًا - حماية إسلامية متكاملة",
    template: "%s | عينا سلسبيلا",
  },
  icons: {
    icon: "/logo-small.svg",
  },
  description:
    "استخدم حماية عَيْنًا سَلْسَبِيلًا لحجب المواقع الإباحية والتيك توك والأغاني والأفلام، وتأمين الإنترنت للأطفال والعائلة بفعالية وخصوصية عالية.",
  keywords: [
    "حجب المواقع الإباحية",
    "حماية الأطفال على الإنترنت",
    "فلترة المحتوى",
    "تصفية الإنترنت",
    "تطبيق أندرويد للحماية",
    "حماية ويندوز من المحتوى الضار",
    "حماية الراوتر",
    "إنترنت آمن للعائلة",
    "حماية إسلامية للإنترنت",
    "حجب تيك توك",
    "حجب المواقع السيئة",
    "تأمين الإنترنت للأطفال",
    "تطبيق مجاني لحجب الإباحية",
    "فلترة الإنترنت للعائلة",
    "حماية الهاتف من المحتوى الضار",
  ],
  openGraph: {
    title: "عَيْنًا سَلْسَبِيلًا - حماية إسلامية متكاملة",
    description:
      "حماية متقدمة لحجب المواقع الإباحية والتيك توك والأغاني والأفلام، وتأمين الإنترنت للأطفال والعائلات.",
    url: "https://aynaa.org",
    siteName: "عينًا سلسبيلًا",
    locale: "ar_EG",
    type: "website",
    images: [
      {
        url: "/start/hero-image.png",
        alt: "عَيْنًا سَلْسَبِيلًا",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "عَيْنًا سَلْسَبِيلًا - حماية إسلامية متكاملة",
    description:
      "حماية متقدمة لحجب المواقع الإباحية والتيك توك والأغاني والأفلام، وتأمين الإنترنت للأطفال والعائلات.",
    images: ["/start/hero-image.png"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className={elMessiri.className}>
      <body>
        <Header />
        <main className="pt-10 min-h-[550px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
