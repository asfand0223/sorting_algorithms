import type { Metadata } from "next";
import "./globals.css";
import ClientLayout from "./client_layout";

export const metadata: Metadata = {
  title: "Sorting Algorithms",
  description: "Visualisation for various common algorithms",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
