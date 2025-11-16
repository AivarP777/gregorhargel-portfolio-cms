'use client'

import Link from 'next/link'

export default function Gallery() {
  const vimeoUrl = 'https://fast.wistia.net/embed/iframe/gtw1tkpfpi'

  return (
    <section
      className="
        bg-[#F5F5F1] mx-auto max-w-[1920px]
        px-[20px] sm:px-[60px] md:px-[100px]
        py-[80px] sm:py-[120px] md:py-[200px]
      "
    >
      {/* Pealkiri */}
      <h2
        className="
          mb-15 sm:mb-16 text-[#29282D] font-extrabold uppercase leading-[1.05]
          text-[40px] sm:text-[60px] lg:text-[96px]
          text-center md:text-left
          transform translate-y-[20px] sm:translate-y-0
        "
      >
        Freshly Baked
      </h2>

      <div className="grid grid-cols-12 gap-8 items-start">
        {/* VIDEO vasakul */}
        <div className="col-span-12 lg:col-span-8">
          <div className="relative w-full overflow-hidden aspect-video border border-black">
            <iframe
              src={vimeoUrl}
              className="absolute inset-0 w-full h-full"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              title="Vimeo video player"
            />
          </div>
        </div>

        {/* TEKST paremal / video all telefonis */}
        <div
          className="
            col-span-12 lg:col-span-4
            -mt-3 sm:mt-8 md:mt-0
            px-[4%] sm:px-[8%] md:px-0
          "
        >
          <div className="text-[#29282D]/70 font-light text-[14px] tracking-wide uppercase mb-2 text-left">
            Commercial
          </div>
          <h3
            className="
              text-[#29282D] font-extrabold uppercase leading-[1.1]
              text-[22px] sm:text-[28px] lg:text-[32px]
              text-left
            "
          >
            Unsplice Kitchen
          </h3>
          <p
            className="
              mt-3 sm:mt-4 text-[#29282D] font-extralight
              text-[16px] sm:text-[18px] leading-[1.5]
              text-left
            "
          >
            While I was cutting this, I asked myself, what does cooking represent to me. The brief was to cut a 20 second food commercial, using library assets. I discovered a music track that perfectly matched the tone of the video and shortened it to fit the 20-second format. The result was an engaging edit that earned me the title of Editor of the Month.
          </p>

          <Link
            href="/portfolio"
            className="
              group relative mt-6 sm:mt-8 inline-flex h-[50px] sm:h-[56px]
              items-center justify-center border border-[#29282D]
              bg-[#F5F6F1] px-6 sm:px-8 text-[#29282D]
              font-extralight text-[15px] sm:text-[16px] uppercase
              transition-all duration-300 ease-in-out
              hover:bg-[#29282D] hover:text-[#F5F6F1]
              active:scale-[0.98]
            "
          >
            VIEW PORTFOLIO
          </Link>
        </div>
      </div>
    </section>
  )
}
