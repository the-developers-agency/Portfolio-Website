import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>The Developers Agency</title>
        <meta
          content="The Developers Agency help you iterate your product faster."
          name="description"
        />
        <meta content="The Developers Agency" property="og:title" />
        <meta
          content="The Developers Agency help you iterate your product faster."
          property="og:description"
        />
        <meta
          content="https://thedevelopers.agency/images/logo.png"
          property="og:image"
        />
        <meta content="The Developers Agency" property="twitter:title" />
        <meta
          content="The Developers Agency help you iterate your product faster."
          property="twitter:description"
        />
        <meta
          content="https://thedevelopers.agency/images/logo.png"
          property="twitter:image"
        />
        <meta property="og:type" content="website" />
        <meta content="summary_large_image" name="twitter:card" />
        <link href="/images/logo.png" rel="shortcut icon" type="image/x-icon" />
        <link href="/images/logo.png" rel="apple-touch-icon" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
