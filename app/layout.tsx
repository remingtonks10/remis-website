import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kesten Feed Co. | Reliable Feed from Folks You Can Trust",
  description:
    "Quality non-GMO and organic feed for homesteaders and livestock producers across west-central Missouri.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
