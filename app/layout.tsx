import type { Metadata, Viewport } from 'next';
import { Inter, Poppins } from 'next/font/google';
import './styles/globals.css';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import LayoutShell from './components/LayoutShell';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#0a0a0a',
};

export const metadata: Metadata = {
   verification: {
    google: "google-site-verification=KcoLoXd03ZyyXIxXM--paqc6Pqh-StNCbIqy_35TNCg",
  },
  metadataBase: new URL('https://dineshpawar.work'),
  title: {
    default: 'Dinesh Pawar - Full Stack Developer | India\'s Top Web Developer',
    template: '%s | Dinesh Pawar - Full Stack Developer',
  },
    description: 'Dinesh Pawar is a Full Stack Developer and SaaS builder from India, creating scalable products with React, Next.js, Node.js and MongoDB.',
  keywords: [
    'Dinesh Pawar',
    'Full Stack Developer',
    'Web Developer India',
    'React Developer',
    'Node.js Developer',
    'SaaS Builder',
    'MERN Stack Developer',
    'Next.js Developer',
    'Best Web Developer India',
    'Freelance Web Developer',
    'Portfolio Website',
  ],
  authors: [{ name: 'Dinesh Pawar', url: 'https://dineshpawar.work' }],
  creator: 'Dinesh Pawar',
  publisher: 'Dinesh Pawar',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://dineshpawar.work',
    title: 'Dinesh Pawar - Full Stack Developer | India\'s Top Web Developer',
    description: 'Full Stack Web Developer & SaaS Builder focused on building scalable digital products. Expert in React, Node.js, Next.js, and MongoDB.',
    siteName: 'Dinesh Pawar Portfolio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Dinesh Pawar - Full Stack Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dinesh Pawar - Full Stack Developer',
    description: 'Full Stack Web Developer & SaaS Builder from India',
    creator: '@DineshPawarr07',
    images: ['/og-image.jpg'],
  },
  alternates: { canonical: '/' },
  category: 'technology',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Dinesh Pawar',
    url: 'https://dineshpawar.work',
    image: 'https://dineshpawar.work/logo.png',
    jobTitle: 'Full Stack Developer',
    worksFor: {
      '@type': 'Organization',
      name: 'Freelance',
    },
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'India',
    },
    sameAs: [
      'https://www.linkedin.com/in/dineshpawar07/',
      'https://github.com/DineshPawar7',
      'https://www.youtube.com/@DineshPawarr07',
      'https://www.instagram.com/dineshpawarr07/',
      'https://www.fiverr.com/s/kXxm2xg',
    ],
    description:
      'Full Stack Web Developer and SaaS Builder from India with 1+ year of professional experience building scalable web applications.',
    alumniOf: {
      '@type': 'EducationalOrganization',
      name: 'Hi-Tech Institute of Technology, Aurangabad',
    },
  };

  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-dark text-white font-poppins antialiased">
        <LayoutShell>{children}</LayoutShell>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
