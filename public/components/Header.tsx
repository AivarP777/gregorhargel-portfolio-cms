'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Inter } from 'next/font/google';
import { useEffect, useState } from 'react';

const inter = Inter({ subsets: ['latin'], weight: ['400'] });

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // lukusta scroll, kui mobiilimenüü on lahti
    if (open) document.body.classList.add('overflow-hidden');
    else document.body.classList.remove('overflow-hidden');
    return () => document.body.classList.remove('overflow-hidden');
  }, [open]);

  const NavLink = ({
    href,
    children,
  }: {
    href: string;
    children: React.ReactNode;
  }) => {
    const active = pathname === href;
    return (
      <Link
        href={href}
        className={`${inter.className} relative text-[16px] leading-[19px] font-normal tracking-normal uppercase`}
      >
        {children}
        <span
          className={`
            pointer-events-none absolute left-0 -bottom-[6px] h-[2px] w-full bg-black
            transition duration-200 origin-left
            ${active ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}
            group-hover:opacity-100
          `}
          style={{ transform: active ? 'scaleX(1)' : 'scaleX(0)' }}
        />
      </Link>
    );
  };

  const closeAndGo = () => setOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-[#F5F5F1]">
      <div className="mx-auto max-w-[1920px] border-b border-black">

        {/* DESKTOP (md+) – sinu algne kood, EI MUUDA */}
        <div className="hidden md:block">
          <div className="h-[134px] px-[100px]">
            <div className="flex h-full items-start pt-[57px]">
              <Link
                href="/"
                className={`${inter.className} text-[16px] leading-[19px] font-normal uppercase text-black hover:opacity-70 transition`}
              >
                GREGOR HARGEL
              </Link>

              <nav className="ml-auto flex items-start gap-[34px] text-black">
                <NavLink href="/">HOME</NavLink>
                <NavLink href="/portfolio">PORTFOLIO</NavLink>
                <NavLink href="/contact">CONTACT</NavLink>
              </nav>
            </div>
          </div>
        </div>

        {/* MOBILE (alla md) */}
        <div className="md:hidden">
          <div className="h-[100px] px-5">
            <div className="flex h-full items-center">
              <Link
                href="/"
                onClick={closeAndGo}
                className={`${inter.className} text-[16px] font-normal uppercase text-black`}
              >
                Gregor Hargel
              </Link>

              {/* Burger */}
              <button
                aria-label={open ? 'Close menu' : 'Open menu'}
                onClick={() => setOpen((v) => !v)}
                className="ml-auto relative h-6 w-8"
              >
                {/* 2 joont → X */}
                <span
                  className={`absolute left-0 top-[10px] h-[2px] w-full bg-black transition-transform duration-200 ${
                    open ? 'rotate-45' : ''
                  }`}
                />
                <span
                  className={`absolute left-0 top-[18px] h-[2px] w-full bg-black transition-transform duration-200 ${
                    open ? '-rotate-45 -translate-y-2' : ''
                  }`}
                />
              </button>
            </div>
          </div>

          {/* Täisekraani menüü */}
          {open && (
            <div className="fixed inset-0 z-50 bg-[#F5F5F1]">
              <div className="flex h-[100px] items-center px-5 border-b border-black">
                <span className={`${inter.className} text-[16px] uppercase`}>
                  Gregor Hargel
                </span>
                <button
                  aria-label="Close menu"
                  onClick={() => setOpen(false)}
                  className="ml-auto relative h-6 w-8"
                >
                  <span className="absolute left-0 top-[10px] h-[2px] w-full bg-black rotate-45" />
                  <span className="absolute left-0 top-[10px] h-[2px] w-full bg-black -rotate-45" />
                </button>
              </div>

              <nav className="flex h-[calc(100vh-64px)] flex-col items-center justify-center gap-8">
                <Link
                  href="/"
                  onClick={closeAndGo}
                  className={`${inter.className} uppercase text-[28px] tracking-wide ${
                    pathname === '/' ? 'opacity-100' : 'opacity-90'
                  }`}
                >
                  Home
                </Link>
                <Link
                  href="/portfolio"
                  onClick={closeAndGo}
                  className={`${inter.className} uppercase text-[28px] tracking-wide ${
                    pathname === '/portfolio' ? 'opacity-100' : 'opacity-90'
                  }`}
                >
                  Portfolio
                </Link>
                <Link
                  href="/contact"
                  onClick={closeAndGo}
                  className={`${inter.className} uppercase text-[28px] tracking-wide ${
                    pathname === '/contact' ? 'opacity-100' : 'opacity-90'
                  }`}
                >
                  Contact
                </Link>
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
