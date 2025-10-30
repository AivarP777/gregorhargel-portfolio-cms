'use client'

export default function Testimonials() {
  return (
    <section className="bg-[#F5F5F1] mx-auto max-w-[1920px] px-[100px] py-[70px]">
      {/* Pealkiri */}
      <h2 className="text-[#29282D] font-extrabold uppercase text-[48px] sm:text-[72px] lg:text-[96px] leading-[1.1] mb-24">
        Testimonial
      </h2>

      {/* Üks tagasiside */}
      <div className="max-w-[1100px]">
        <p className="text-[#29282D] font-extralight text-[24px] lg:text-[32px] leading-[1.4]">
          “His commercial editing is going from strenth to strength. He only has two videos in his portfolio, but each of them of a quality I see from editors with 7 years experience.”
        </p>

        <div className="mt-10">
          <h3 className="text-[#29282D] font-bold text-[20px] lg:text-[24px]">
            — Aivar Ploom
          </h3>
          <p className="text-[#29282D]/70 font-light text-[18px]">
            Creative Director, Horizon Films
          </p>
        </div>
      </div>
    </section>
  )
}
