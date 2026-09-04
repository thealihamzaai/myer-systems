import './globals.css';
import type { Metadata } from 'next';
import { Inter, Sora, DM_Sans, Lora } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  display: 'swap',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
});

const lora = Lora({
  subsets: ['latin'],
  variable: '--font-lora',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Myer Systems — Governed AI Systems for Accountability, Scale & Control',
  description:
    'Myer Systems designs, governs, and deploys accountable AI — from healthcare revenue cycle to enterprise workflow reengineering and resource augmentation.',
  openGraph: {
    title: 'Myer Systems — Governed AI Systems',
    description:
      'AI systems built for accountability, scale, and control.',
    images: [{ url: '/dashboard-mockup.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    images: [{ url: '/dashboard-mockup.jpg' }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${sora.variable} ${dmSans.variable} ${lora.variable} font-sans`}>{children}</body>
    </html>
  );
}
