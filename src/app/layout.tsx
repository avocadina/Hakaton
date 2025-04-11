import type { Metadata } from "next";

import "~/src/app/style/global/font.css";
import "~/src/app/style/global/reset.scss";
import "~/src/app/style/global/template.scss";
import "~/src/app/style/global/global.scss";
import "~/src/app/globals.css";
import ClientRootLayout from "./client-layout";

export const metadata: Metadata = {
  title: "RouteFinder",
  description: "We will help you to find the route for your trip",
  keywords: "trip, Krasnodar region, tourism, travel, Russia, hotels",
};

export const viewport =
  "width=device-width, initial-scale=1, maximum-scale=1, viewport-fit=cover";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="row">
        <ClientRootLayout>{children}</ClientRootLayout>
      </body>
    </html>
  );
}
