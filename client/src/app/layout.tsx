import { Metadata, Viewport } from "next";
import { pretendard } from "@/fonts";
import "./globals.css";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";

const APP_INFO = {
  name: "Qdio",
  title: "Hello, Qdio!",
  titleTemplate: "%s - Qdio",
  description:
    "Qdio is a web application that allows users to create and share music in a 3D environment.",
  keywords: ["Qdio", "music", "3D", "web", "application", "create", "share"],
  authors: [
    {
      name: "SEJIN OH",
      url: "https://sejinoh.site",
    },
  ],
};

export const metadata: Metadata = {
  title: {
    default: APP_INFO.title,
    template: APP_INFO.titleTemplate,
  },
  description: APP_INFO.description,
  keywords: APP_INFO.keywords,
  authors: APP_INFO.authors,
  creator: "SEJIN OH",
  publisher: "SEJIN OH",
  generator: "SEJIN OH",
  category: "web",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    siteName: APP_INFO.name,
    title: {
      default: APP_INFO.title,
      template: APP_INFO.titleTemplate,
    },
    description: APP_INFO.description,
    images: [
      {
        url: "/icons/og-image.png", // OG 이미지 경로 설정
        width: 1200, // 이미지 너비 설정 (권장 크기)
        height: 630, // 이미지 높이 설정 (권장 크기)
        alt: "A descriptive text for the OG image", // 대체 텍스트
      },
    ],
  },
  referrer: "origin-when-cross-origin",
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/icons/apple-touch-icon.png" },
      { url: "/icons/favicon-16x16.png", sizes: "16x16" },
      { url: "/icons/favicon-32x32.png", sizes: "32x32" },
      { url: "/icons/apple-touch-icon.png", sizes: "180x180" },
    ],
    apple: [
      { url: "/icons/apple-touch-icon.png" },
      { url: "/icons/favicon-16x16.png", sizes: "16x16" },
      { url: "/icons/favicon-32x32.png", sizes: "32x32" },
      { url: "/icons/apple-touch-icon.png", sizes: "180x180" },
    ],
    other: {
      rel: "mask-icon",
      url: "/icons/safari-pinned-tab.svg",
      color: "#000000",
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  minimumScale: 1,
  themeColor: "#ffffff",
  userScalable: false,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${pretendard}`}>
        {children}
        <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GA_ID || ""} />
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GTM_ID || ""} />
      </body>
    </html>
  );
}
