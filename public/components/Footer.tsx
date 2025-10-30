'use client'

export default function Footer() {
  return (
    <footer className="relative w-full bg-[#1C1B20] text-[#F5F6F1]">
      <div
        className="relative mx-auto max-w-[1920px] 
        h-auto md:h-[530px]
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
          mb-[50px] md:mb-0"
        >
          <p className="text-[#F5F6F1]/85 font-extralight text-[15px] sm:text-[18px] md:text-[24px] leading-[1.4] mb-4">
            “His commercial editing is going from strength to strength. He only has two videos
            in his portfolio, but each of them are of a quality I see from editors with 7 years experience.”
          </p>
          <div>
            <h3 className="text-[#F5F6F1] font-semibold text-[15px] sm:text-[17px] md:text-[22px]">
              — Emmy
            </h3>
            <p className="text-[#F5F6F1]/60 font-light text-[13px] sm:text-[15px]">
              Nominated Editor, Director
            </p>
          </div>
        </div>

        {/* Gregori nimi */}
        <h2
          className="font-extrabold uppercase tracking-[-0.01em] leading-[1.1]
          text-[44px] sm:text-[60px] md:text-[120px] lg:text-[160px] xl:text-[185px]
          text-left mb-[20px] md:mb-[45px]
          whitespace-nowrap"
        >
          GREGOR HARGEL
        </h2>
      </div>
    </footer>
  )
}
