'use client'

import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="relative w-full bg-[#1C1B20] text-[#F5F6F1] overflow-x-hidden">
      <div
        className="relative mx-auto max-w-[1920px]
        h-auto md:min-h-[530px]
        px-[24px] sm:px-[48px] md:px-[104px]
        pt-[60px] sm:pt-[100px] md:pt-[180px]
        pb-[40px] sm:pb-[60px] md:pb-0
        flex flex-col justify-end"
      >
        {/* Testimonial */}
        <div
          className="md:absolute md:bottom-[280px] md:left-[104px]
          left-[24px] right-[24px] sm:left-[48px] sm:right-[48px]
          text-left md:max-w-[800px]
          mb-[50px] md:-mb-8"
        >
          <p className="text-[#F5F6F1]/85 font-extralight text-[15px] sm:text-[18px] md:text-[24px] leading-[1.4] mb-4">
            “His commercial editing is going from strength to strength. He only has two videos
            in his portfolio, but each of them are of a quality I see from editors with 7 years experience.”
          </p>
          <div>
            <h3 className="text-[#F5F6F1] font-semibold text-[15px] sm:text-[17px] md:text-[22px]">
              — Shiny Perkins
            </h3>
            <p className="text-[#F5F6F1]/60 font-light text-[13px] sm:text-[15px]">
              Emmy-nominated editor and founder of Unsplice
            </p>
          </div>
        </div>

        {/* GREGOR HARGEL */}
        <h2
          className="
            font-extrabold uppercase tracking-[-0.01em] leading-[1.08]
            text-left mb-[20px] md:mb-[45px]
            /* Mobiilis: võib murduda, et mitte lõigata */
            whitespace-normal break-words
            text-[clamp(2rem,8.5vw,2.75rem)]        /* ~32–44px */
            /* ≥640px: hoia ühel real ja lase suuremaks minna */
            sm:whitespace-nowrap
            sm:text-[clamp(2.5rem,7.5vw,4rem)]      /* ~40–64px */
            md:text-[clamp(3rem,6.8vw,6.5rem)]      /* ~48–104px */
            lg:text-[clamp(3.5rem,6vw,9rem)]        /* ~56–144px */
            xl:text-[clamp(4rem,5.5vw,11.5rem)]     /* ~64–184px */
          "
        >
          GREGOR HARGEL
        </h2>
        {/* Made by DuoCom */}
        <div className="hidden md:block absolute bottom-[20px] right-[104px] text-right">
  <Link
    href="https://www.duocom.ee"
    target="_blank"
    rel="noopener noreferrer"
    className="text-[#F5F6F1]/50 hover:text-[#F5F6F1] text-[14px] font-light transition-colors duration-300"
  >
    made by <span className="font-normal">DuoCom</span>
  </Link>
</div>

      </div>
    </footer>
  )
}
