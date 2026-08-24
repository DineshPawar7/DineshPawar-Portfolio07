'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  AiOutlineHome,
  AiOutlineMail,
 
} from 'react-icons/ai';
import { IoFolderOpenOutline } from 'react-icons/io5';
import { RiBrainLine } from "react-icons/ri";
import { MdWorkOutline } from 'react-icons/md';
import { PiStudentBold } from 'react-icons/pi';
import { motion } from 'framer-motion';

const navItems = [
  { path: '/', icon: AiOutlineHome, label: 'Home' },
  { path: '/projects', icon: IoFolderOpenOutline, label: 'Projects' },
  { path: '/skills', icon: RiBrainLine, label: 'Skills' },
  { path: '/experience', icon: MdWorkOutline, label: 'Experience' },
  { path: '/education', icon: PiStudentBold, label: 'Education' },
  { path: '/contact', icon: AiOutlineMail, label: 'Contact' },
];

export const Header = () => {
  const pathname = usePathname();

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-auto">
      <nav className="bg-[#1a1a1a]/90 backdrop-blur-xl border border-white/10 rounded-full px-4 py-3 shadow-2xl">
        <div className="flex items-center gap-1 md:gap-2">
          {navItems.map((item) => {
            const isActive = pathname === item.path;
            const Icon = item.icon;

            return (
              <Link
                key={item.path}
                href={item.path}
                className={`relative p-2 md:p-3 rounded-full transition-all duration-300 ${
                  isActive
                    ? 'text-black bg-primary'
                    : 'text-white/60 hover:text-white hover:bg-white/10'
                }`}
                aria-label={item.label}
              >
                <Icon className="text-lg md:text-xl" />
                {isActive && (
                  <motion.div
                    layoutId="active-nav"
                    className="absolute inset-0 rounded-full bg-primary -z-10"
                    transition={{ type: 'spring', duration: 0.5 }}
                  />
                )}
              </Link>
            );
          })}
        </div>
      </nav>
    </header>
  );
};