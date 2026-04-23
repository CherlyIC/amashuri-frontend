import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Providers from '@/components/Providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Amashuri.rw — Rwanda\'s Secondary School Directory',
  description:
    'Find, compare and choose the best secondary school in Rwanda. Search from 24+ verified schools across all provinces.',
  keywords: 'Rwanda schools, secondary schools, amashuri, education Rwanda',
  openGraph: {
    title: 'Amashuri.rw',
    description: 'Rwanda\'s Secondary School Directory',
    url: 'https://amashuri.rw',
    siteName: 'Amashuri.rw',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}