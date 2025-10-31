'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
  return (
    <section
      className="
        mx-auto max-w-[1920px] bg-[#F5F5F1] overflow-x-clip
        px-5 pt-[40px] sm:px-[60px] md:px-[80px] lg:px-[100px] lg:pt-[70px]
      "
    >
      {/* PEALKIRI */}
      <h1
        className="
          text-[#29282D] font-extrabold leading-[1.085] tracking-[-0.01em]
          /* sinu algsed baassuurused väiksematel */
          text-[40px] sm:text-[64px]
          /* alates md teeme sujuvaks: 96px max... kuni 150px/185px */
          md:text-[clamp(96px,8.2vw,150px)]
          lg:text-[clamp(120px,7.8vw,150px)]
          2xl:text-[clamp(150px,9.6vw,185px)]
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
              src="/images/greks1.jpg"
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
              font-extrabold text-[#29282D] uppercase leading-[1.1] text-left
              /* sinu algsed baassuurused väiksematel */
              text-[28px] sm:text-[36px]
              /* sujuv desktop: 48px... kuni 86px */
              md:text-[clamp(48px,3.6vw,64px)]
              2xl:text-[clamp(64px,4.4vw,86px)]
              /* ei lase sõnadel ümber murduda – ridade asetus jääb samaks */
              whitespace-nowrap
            "
          >
            BALI-BASED<br />VIDEO EDITOR
          </h2>

          <div className="mt-6 lg:mt-auto text-left">
            <p
  className="
    max-w-[698px] text-[#29282D] font-normal leading-[1.55]
    text-[16px] sm:text-[18px] md:text-[clamp(20px,1.2vw,24px)] sm:text-[clamp(24px,1.7vw,32px)]
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
