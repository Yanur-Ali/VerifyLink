import './globals.css';
import { Inter } from 'next/font/google';
import { Metadata } from 'next';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap', // Optimize font loading
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'VerifyLink - Content Authenticity Platform',
  description: 'Verify the authenticity of online content using AI and real-time data',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <main className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
          {children}
        </main>
      </body>
    </html>
  );
}