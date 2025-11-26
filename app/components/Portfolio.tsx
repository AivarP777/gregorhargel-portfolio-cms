'use client'

import type { Project } from '../../lib/portfolio'

type Props = {
  projects: Project[]
}

export default function Portfolio({ projects }: Props) {
  return (
    <div className="mt-[80px]">
      {projects.map((p, index) => {
        const videoOnRight = index % 2 === 1

        return (
          <div
            key={p._id}
            className="
              grid grid-cols-1 md:grid-cols-2 gap-0 bg-[#F5F5F1]
              pb-[24px] sm:pb-[32px] md:pb-0
              mb-[48px] sm:mb-[64px] md:mb-0
              last:mb-0 md:last:mb-0
            "
          >
            {/* VIDEO */}
            <div className={videoOnRight ? 'md:order-2' : 'md:order-1'}>
              <div className="relative aspect-video overflow-hidden">
                <iframe
                  src={p.videoUrl}
                  className="absolute inset-0 w-full h-full"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  title={p.title}
                  loading="lazy"
                />
              </div>
            </div>

            {/* TEKST */}
            <div
              className={`
                flex flex-col justify-center
                px-[24px] sm:px-[48px] md:px-[64px]
                py-[28px] md:py-[36px]
                ${videoOnRight ? 'md:order-1' : 'md:order-2'}
              `}
            >
              {p.label && (
                <div className="text-[#29282D]/70 font-light text-[14px] tracking-wide uppercase mb-2 text-left">
                  {p.label}
                </div>
              )}
              <h3 className="text-[#29282D] font-extrabold uppercase leading-[1.1] text-[22px] sm:text-[28px] lg:text-[32px] text-left">
                {p.title}
              </h3>
              {p.description && (
                <p className="mt-3 sm:mt-4 text-[#29282D] font-extralight text-[16px] sm:text-[18px] leading-[1.5] text-left max-w-[700px]">
                  {p.description}
                </p>
              )}
            </div>
          </div>
        )
      })}
    </div>
  )
}
