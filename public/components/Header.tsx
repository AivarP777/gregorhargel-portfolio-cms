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

  // desktop nav refs
  const homeRef = useRef<HTMLAnchorElement | null>(null);
  const portfolioRef = useRef<HTMLAnchorElement | null>(null);
  const contactRef = useRef<HTMLAnchorElement | null>(null);
  const navContainerRef = useRef<HTMLDivElement | null>(null);

  // underline state (desktop)
  const [indicator, setIndicator] = useState({
    left: 0,
    width: 0,
    visible: false,
    isHover: false,
  });

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

  // Fookus esimesele lingile mobiilimenüüs
  useEffect(() => {
    if (open) setTimeout(() => firstLinkRef.current?.focus(), 0);
  }, [open]);

  // aktiivse lingi ref (desktop)
  const getActiveRef = () => {
    if (pathname === '/') return homeRef;
    if (pathname === '/portfolio') return portfolioRef;
    if (pathname === '/contact') return contactRef;
    return null;
  };

  // uuenda desktop underline positsiooni
  const setIndicatorToElement = (
    el: HTMLAnchorElement | null,
    isHover: boolean
  ) => {
    if (!el || !navContainerRef.current) return;

    const linkRect = el.getBoundingClientRect();
    const containerRect = navContainerRef.current.getBoundingClientRect();

    setIndicator({
      left: linkRect.left - containerRect.left,
      width: linkRect.width,
      visible: true,
      isHover,
    });
  };

  // path muutudes: underline aktiivse lingi alla
  useEffect(() => {
    const activeRef = getActiveRef();
    if (activeRef?.current) {
      setIndicatorToElement(activeRef.current, false);
    }
  }, [pathname]);

  // resize korral korrigeeri asendit
  useEffect(() => {
    const handleResize = () => {
      const activeRef = getActiveRef();
      if (activeRef?.current) {
        setIndicatorToElement(activeRef.current, false);
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize);
    }
    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', handleResize);
      }
    };
  }, [pathname]);

  const NavLink = ({
    href,
    children,
    className = '',
    linkRef,
  }: {
    href: string;
    children: React.ReactNode;
    className?: string;
    linkRef?: React.RefObject<HTMLAnchorElement>;
  }) => {
    const active = pathname === href;

    const handleMouseEnter = () => {
      if (typeof window === 'undefined') return;
      if (window.innerWidth < 768) return; // ainult desktop
      if (!linkRef?.current) return;

      // hoveril, kui pole aktiivne – heledam must
      setIndicatorToElement(linkRef.current, !active);
    };

    const handleMouseLeave = () => {
      if (typeof window === 'undefined') return;
      if (window.innerWidth < 768) return;

      const activeRef = getActiveRef();
      if (activeRef?.current) {
        setIndicatorToElement(activeRef.current, false);
      }
    };

    return (
      <Link
        href={href}
        ref={linkRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={`${inter.className} relative uppercase text-[16px] leading-[19px] tracking-[0.02em] outline-none focus:outline-none ${className}`}
      >
        {children}
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

              <nav
                ref={navContainerRef}
                className="ml-auto flex items-start gap-[34px] text-black relative"
              >
                <NavLink href="/" linkRef={homeRef}>
                  HOME
                </NavLink>
                <NavLink href="/portfolio" linkRef={portfolioRef}>
                  PORTFOLIO
                </NavLink>
                <NavLink href="/contact" linkRef={contactRef}>
                  CONTACT
                </NavLink>

                {/* liikuv underline – ainult desktopil */}
                <span
                  aria-hidden
                  className="pointer-events-none absolute -bottom-[6px] h-[2px] hidden md:block origin-left transition-all duration-300"
                  style={{
                    left: indicator.left,
                    width: indicator.width,
                    opacity: indicator.visible ? 1 : 0,
                    backgroundColor: indicator.isHover
                      ? 'rgba(0,0,0,0.45)' // hover – heledam must
                      : '#000000', // aktiivne – täismust
                  }}
                />
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
            style={{ WebkitTapHighlightColor: 'transparent' }}
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

            {/* Lingid mobiilimenüüs */}
           {/* Lingid mobiilimenüüs */}
<nav className="flex h-[calc(100vh-72px)] flex-col items-center justify-center gap-8">
  <Link
    ref={firstLinkRef}
    href="/"
    onClick={() => setOpen(false)}
    className={`${inter.className} uppercase text-[28px] tracking-wide outline-none focus:outline-none text-center`}
  >
    <span className="inline-block relative">
      Home
      {pathname === '/' && (
        <span className="block h-[2px] bg-black w-full mt-2" />
      )}
    </span>
  </Link>

  <Link
    href="/portfolio"
    onClick={() => setOpen(false)}
    className={`${inter.className} uppercase text-[28px] tracking-wide outline-none focus:outline-none text-center`}
  >
    <span className="inline-block relative">
      Portfolio
      {pathname === '/portfolio' && (
        <span className="block h-[2px] bg-black w-full mt-2" />
      )}
    </span>
  </Link>

  <Link
    href="/contact"
    onClick={() => setOpen(false)}
    className={`${inter.className} uppercase text-[28px] tracking-wide outline-none focus:outline-none text-center`}
  >
    <span className="inline-block relative">
      Contact
      {pathname === '/contact' && (
        <span className="block h-[2px] bg-black w-full mt-2" />
      )}
    </span>
  </Link>
</nav>

          </div>
        </div>
      </div>
    </header>
  );
}
