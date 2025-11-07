'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Inter } from 'next/font/google';
import { useEffect, useRef, useState } from 'react';

const inter = Inter({ subsets: ['latin'], weight: ['400'] });

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const firstLinkRef = useRef<HTMLAnchorElement | null>(null);

  // Lukusta body scroll, kui menüü on lahti
  useEffect(() => {
    const cls = 'overflow-hidden';
    if (open) document.body.classList.add(cls);
    else document.body.classList.remove(cls);
    return () => document.body.classList.remove(cls);
  }, [open]);

  // Sulge menüü, kui marsruut muutub
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Fookus esimesele lingile (kui soovid; visuaalset rõngast ei näidata)
  useEffect(() => {
    if (open) setTimeout(() => firstLinkRef.current?.focus(), 0);
  }, [open]);

  const NavLink = ({
    href,
    children,
    className = '',
  }: {
    href: string;
    children: React.ReactNode;
    className?: string;
  }) => {
    const active = pathname === href;
    return (
      <Link
        href={href}
        className={`${inter.className} relative uppercase text-[16px] leading-[19px] tracking-[0.02em] outline-none focus:outline-none ${className}`}
      >
        {children}
        <span
          aria-hidden
          className={`pointer-events-none absolute left-0 -bottom-[6px] h-[2px] w-full bg-black origin-left transition-transform duration-200 ${
            active ? 'scale-x-100' : 'scale-x-0'
          }`}
        />
      </Link>
    );
  };

  return (
    <header className="fixed inset-x-0 top-0 z-[60] bg-[#F5F5F1] border-b border-black/80">
      <div className="mx-auto max-w-[1920px]">
        {/* DESKTOP (md+) */}
        <div className="hidden md:block">
          <div className="h-[134px] px-[100px]">
            <div className="flex h-full items-start pt-[57px]">
              <Link
                href="/"
                className={`${inter.className} uppercase text-[16px] leading-[19px] text-black hover:opacity-70 transition outline-none focus:outline-none`}
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
                className={`${inter.className} uppercase text-[16px] text-black outline-none focus:outline-none`}
                aria-label="Go to home"
              >
                Gregor Hargel
              </Link>

              {/* Burger */}
              <button
                aria-expanded={open}
                aria-controls="mobile-menu"
                aria-label={open ? 'Close menu' : 'Open menu'}
                onClick={() => setOpen((v) => !v)}
                className="ml-auto relative h-6 w-8 outline-none focus:outline-none"
              >
                {/* 2 joont → X */}
                <span
                  className={`absolute left-0 top-[8px] h-[2px] w-full bg-black transition-transform duration-200 ${
                    open ? 'rotate-45 translate-y-[4px]' : ''
                  }`}
                />
                <span
                  className={`absolute left-0 top-[16px] h-[2px] w-full bg-black transition-transform duration-200 ${
                    open ? '-rotate-45 -translate-y-[4px]' : ''
                  }`}
                />
              </button>
            </div>
          </div>

          {/* Täisekraani overlay menüü */}
          <div
            id="mobile-menu"
            style={{ WebkitTapHighlightColor: 'transparent' }} // iOS kliki-halli eemaldus
            className={`fixed inset-0 z-[70] bg-[#F5F5F1] text-[#29282D] transition-opacity duration-200 ${
              open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
            }`}
            role="dialog"
            aria-modal="true"
          >
            {/* Ülaosa: logo + sulgemine */}
            <div className="flex h-[100px] items-center px-5 border-b border-black/80">
              <span className={`${inter.className} uppercase text-[16px]`}>Gregor Hargel</span>
              <button
                aria-label="Close menu"
                onClick={() => setOpen(false)}
                className="ml-auto relative h-6 w-8 outline-none focus:outline-none"
              >
                <span className="absolute left-0 top-[10px] h-[2px] w-full bg-black rotate-45" />
                <span className="absolute left-0 top-[10px] h-[2px] w-full bg-black -rotate-45" />
              </button>
            </div>

            {/* Lingid */}
            <nav className="flex h-[calc(100vh-72px)] flex-col items-center justify-center gap-8">
              <Link
                ref={firstLinkRef}
                href="/"
                onClick={() => setOpen(false)}
                className={`${inter.className} uppercase text-[28px] tracking-wide outline-none focus:outline-none`}
              >
                Home
              </Link>
              <Link
                href="/portfolio"
                onClick={() => setOpen(false)}
                className={`${inter.className} uppercase text-[28px] tracking-wide outline-none focus:outline-none`}
              >
                Portfolio
              </Link>
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className={`${inter.className} uppercase text-[28px] tracking-wide outline-none focus:outline-none`}
              >
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
