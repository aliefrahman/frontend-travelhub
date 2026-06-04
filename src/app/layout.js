import "./globals.css";

export const metadata = {
  title: "Indonesia Tour Hub — Discover the Magic of Indonesia",
  description:
    "Unforgettable day tours and multiday adventures across the Indonesian archipelago. From Bali to Raja Ampat.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Geist:wght@100..900&family=Geist+Mono:wght@100..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased text-dark bg-white">
        {children}
      </body>
    </html>
  );
}