import type { Metadata, Viewport } from 'next';
import { Inter, Poppins } from 'next/font/google';
import './styles/globals.css';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Card } from './components/Card';
import { Button } from './components/Button';
import { Header } from './components/Header';

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
  metadataBase: new URL('https://dinesh-pawar.netlify.app'),
  title: {
    default: 'Dinesh Pawar - Full Stack Developer | India\'s Top Web Developer',
    template: '%s | Dinesh Pawar - Full Stack Developer',
  },
  description: 'Dinesh Pawar is a Full Stack Web Developer and SaaS Builder from India. Expert in React, Node.js, Next.js, MongoDB, and modern web technologies. Building scalable digital products since 2021.',
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
  authors: [{ name: 'Dinesh Pawar', url: 'https://dinesh-pawar.netlify.app' }],
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
    url: 'https://dinesh-pawar.netlify.app',
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
  alternates: {
    canonical: 'https://dinesh-pawar.netlify.app',
  },
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
    url: 'https://dinesh-pawar.netlify.app',
    image: 'https://dinesh-pawar.netlify.app/logo.png',
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
        <Header />

        <div className="flex max-w-7xl mx-auto min-h-screen">
          {/* Left Card - Fixed No Scroll */}
          <div className="hidden lg:block fixed w-[380px] h-screen overflow-hidden">
            <div className="flex items-center justify-center h-full">
              <Card />
            </div>
          </div>

          {/* Right Content */}
          <div className="flex-1 lg:ml-[380px]">
            <main className="px-4 sm:px-6 lg:px-8 py-8 md:py-12">
              {children}
            </main>
          </div>
        </div>

        <Button />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}