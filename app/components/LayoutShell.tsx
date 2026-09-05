'use client';

import { usePathname } from 'next/navigation';
import { Card } from './Card';
import { Header } from './Header';
import { Button } from './Button';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';

export default function LayoutShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isToolsSection = pathname.startsWith('/tools');

  if (isToolsSection) {
    return (
      <>
        <SiteHeader />
        <main className="min-h-screen">{children}</main>
        <SiteFooter />
      </>
    );
  }

  return (
    <>
      <Header />
      <div className="flex max-w-[1400px] mx-auto min-h-screen">
        <div className="hidden lg:block fixed w-[380px] h-screen overflow-hidden">
          <div className="flex items-center justify-center h-full"><Card /></div>
        </div>
        <div className="flex-1 lg:ml-[380px]">
          <main className="px-4 sm:px-6 lg:px-8 py-8 md:py-12">{children}</main>
        </div>
      </div>
      <Button />
    </>
  );
}
