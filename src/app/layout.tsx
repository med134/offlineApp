import type { Metadata, Viewport } from "next";
import "./globals.css";
const APP_TITLE_TEMPLATE = "%s - Protection civile S/C";
export const metadata: Metadata = {
  applicationName: "Protection civile S/C",
  title: {
    default: "Protection civile S/C",
    template: APP_TITLE_TEMPLATE,
  },
  description: "center secours skhour rhamna",
  manifest: "/public/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Protection civile S/C",
    // startUpImage: [],
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: "website",
    siteName: "Protection civile S/C",
    title: {
      default: "Protection civile S/C",
      template: APP_TITLE_TEMPLATE,
    },
    description: "center secours skhour rhamna",
  },
  twitter: {
    card: "summary",
    title: {
      default: "Protection civile S/C",
      template: APP_TITLE_TEMPLATE,
    },
    description: "center secours skhour rhamna",
  },
};

export const viewport: Viewport = {
  themeColor: "#FFFFFF",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
