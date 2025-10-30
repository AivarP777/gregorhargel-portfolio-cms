'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
  return (
    <section
      className="
        mx-auto max-w-[1920px] bg-[#F5F5F1]
        px-5 pt-[40px] sm:px-[60px] md:px-[80px] lg:px-[100px] lg:pt-[70px]
      "
    >
      {/* PEALKIRI */}
      <h1
  className="
    text-[#29282D] font-extrabold leading-[1.085] tracking-[-0.01em]
    text-[40px] sm:text-[64px] md:text-[96px] lg:text-[150px] 2xl:text-[185px]
    text-center md:text-left whitespace-nowrap
    transform -translate-y-[40px] md:translate-y-0
  "
>
  GREGOR HARGEL
</h1>


      {/* GRID */}
      <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* FOTO */}
        <div className="col-span-12 lg:col-span-7 flex justify-center lg:block">
          <div className="relative w-[90%] sm:w-[80%] md:w-[70%] lg:w-full overflow-hidden aspect-[940/1170]">
            <Image
              src="/images/greks.webp"
              alt="Gregor portrait"
              fill
              sizes="(min-width:1024px) 58vw, 100vw"
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* TEKST + NUPP */}
        <div
          className="
            col-span-12 lg:col-span-5 lg:pl-6 flex flex-col justify-between
            mt-0 lg:mt-0
            items-start
            px-[5%] sm:px-[10%] md:px-0
          "
        >
          <h2
            className="
              font-extrabold text-black uppercase leading-[1.1]
              text-[28px] sm:text-[36px] md:text-[48px] lg:text-[64px] 2xl:text-[86px]
              text-left
            "
          >
            BALI-BASED<br />VIDEO EDITOR
          </h2>

          <div className="mt-6 lg:mt-auto text-left">
            <p
              className="
                max-w-[698px] text-[#29282D] font-extralight
                text-[16px] sm:text-[18px] md:text-[20px] lg:text-[24px] 2xl:text-[32px]
                leading-[1.55]
              "
            >
              Gregor Hargel is a Bali-based video editor focused on short-form
              videos with a smooth, cinematic rhythm — blending seamless flow,
              sharp pacing, and storytelling that keeps viewers hooked.
            </p>

            <Link
              href="/portfolio"
              className="
                group relative mt-6 inline-flex h-[52px] sm:h-[60px] md:h-[68px]
                items-center justify-center border border-[#29282D]
                bg-[#F5F6F1] px-6 sm:px-8 text-[#29282D]
                font-extralight text-[16px] sm:text-[18px] leading-[1]
                transition-all duration-300 ease-in-out
                hover:bg-[#29282D] hover:text-[#F5F6F1]
                active:scale-[0.98]
              "
            >
              <span className="transition-colors duration-300">PORTFOLIO</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
