'use client'

import { useEffect, useState } from 'react'
import Portfolio from '../components/Portfolio'

export default function PortfolioPage() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  return (
    <section
      className="
        relative bg-[#F5F5F1] min-h-screen
        px-[24px] sm:px-[60px] md:px-[100px]
        pt-[40px] sm:pt-[60px] md:pt-[70px]
        pb-[100px] sm:pb-[160px] md:pb-[200px]
      "
    >
      {/* Pealkiri */}
      <h1
        className={`
          font-[Archivo] font-extrabold uppercase text-[#29282D]
          text-[48px] sm:text-[90px] md:text-[130px] lg:text-[185px]
          leading-[1.08]
          text-center md:text-left

          transition-all duration-700 ease-out transform
          ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-6'}
        `}
      >
        PORTFOLIO
      </h1>

      {/* Alamtekst */}
      <p
        className={`
          mt-[24px] sm:mt-[32px] md:mt-[40px]
          max-w-[940px]
          font-[Archivo] font-extralight text-[#29282D]
          text-[16px] sm:text-[22px] md:text-[28px] lg:text-[40px]
          leading-[1.4]
          text-center md:text-left
          px-[4px] sm:px-0

          transition-all duration-700 ease-out transform
          ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
        `}
        style={{ transitionDelay: '120ms' }}
      >
        A growing collection — each project crafted with intention,
        rhythm, and personality.
      </p>

      {/* 3 plokki */}
      <Portfolio />
    </section>
  )
}
