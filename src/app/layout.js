import './globals.css';
import { Toaster } from "react-hot-toast";

export const metadata = {
  title: 'My App',
  description: 'PWA Example',
  manifest: '/manifest.json',
};

export const viewport = {
  themeColor: '#ffffff',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body>
        {children}
        <Toaster position="top-right" reverseOrder={false} />
      </body>
    </html>
  );
}
