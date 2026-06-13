import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "Suchismita Chatterjee",
  description:
    "Portfolio of Suchismita Chatterjee, a Full Stack Developer specialising in React, Node.js, and cloud-native applications.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900 antialiased">
        {children}
        <Toaster position="top-right" />
      </body>
    </html>
  );
}
