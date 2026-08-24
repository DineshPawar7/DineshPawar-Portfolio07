'use client';

import React from 'react';
import Head from 'next/head';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  ogImage?: string;
  ogUrl?: string;
  canonical?: string;
}

export const SEO: React.FC<SEOProps> = ({
  title = 'Dinesh Pawar - Full Stack Developer | India\'s Top Web Developer',
  description = 'Dinesh Pawar is a Full Stack Web Developer and SaaS Builder from India. Expert in React, Node.js, Next.js, MongoDB, and modern web technologies.',
  keywords = [
    'Dinesh Pawar',
    'Full Stack Developer',
    'Web Developer India',
    'React Developer',
    'Node.js Developer',
    'SaaS Builder',
    'MERN Stack Developer',
    'Next.js Developer',
  ],
  ogImage = '/og-image.jpg',
  ogUrl = 'https://dinesh-pawar.netlify.app',
  canonical = 'https://dinesh-pawar.netlify.app',
}) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={ogUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:creator" content="@DineshPawarr07" />

      {/* Canonical */}
      <link rel="canonical" href={canonical} />

      {/* Additional SEO */}
      <meta name="author" content="Dinesh Pawar" />
      <meta name="publisher" content="Dinesh Pawar" />
      <meta name="application-name" content="Dinesh Pawar Portfolio" />
      <meta name="theme-color" content="#0a0a0a" />
    </Head>
  );
};

export default SEO;