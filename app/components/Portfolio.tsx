'use client'

export default function PortfolioChecker() {
  // 🎬 Siin muuda oma Vimeo videote lingid
  const vimeo1 = 'https://player.vimeo.com/video/1130428641'
  const vimeo2 = 'https://player.vimeo.com/video/1132399736'
  const vimeo3 = 'https://player.vimeo.com/video/1130428621'

  const projects = [
    {
      id: 1,
      videoOnRight: false,
      src: vimeo1,
      label: 'Commercial',
      title: 'Unsplice Kitchen',
      text: 'When I began editing the first rough cut, I asked myself — what does cooking represent to me? The answer that came instantly was elegance. That idea shaped the entire mood of the piece and led me to the perfect music choice for this commercial.',
    },
    {
      id: 2,
      videoOnRight: true,
      src: vimeo2,
      label: 'Cinematic Short',
      title: 'Everyday Rhythm',
      text: 'Everyday sounds, cinematic rhythm. A 20-second edit built entirely around pacing, texture, and tension.',
    },
    {
      id: 3,
      videoOnRight: false,
      src: vimeo3,
      label: 'Concept Piece',
      title: 'One-Shot Message',
      text: 'Project goal was to give a message to the viewer with only one shot followed by a title. Simple and engaging edit.',
    },
  ]

  return (
    <div className="mt-[80px]">
      {projects.map((p) => (
        <div
          key={p.id}
          className="
            grid grid-cols-1 md:grid-cols-2 gap-0 bg-[#F5F5F1]
            pb-[24px] sm:pb-[32px] md:pb-0
            mb-[48px] sm:mb-[64px] md:mb-0
            last:mb-0 md:last:mb-0
          "
        >
          {/* VIDEO */}
          <div className={`${p.videoOnRight ? 'md:order-2' : 'md:order-1'}`}>
            <div className="relative aspect-video overflow-hidden">
              <iframe
                src={p.src}
                className="absolute inset-0 w-full h-full"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                title={`Vimeo video ${p.title}`}
              />
            </div>
          </div>

          {/* TEKST */}
          <div
            className={`
              flex flex-col justify-center
              px-[24px] sm:px-[48px] md:px-[64px]
              py-[28px] md:py-[36px]
              ${p.videoOnRight ? 'md:order-1' : 'md:order-2'}
            `}
          >
            <div className="text-[#29282D]/70 font-light text-[14px] tracking-wide uppercase mb-2 text-left">
              {p.label}
            </div>
            <h3 className="text-[#29282D] font-extrabold uppercase leading-[1.1] text-[22px] sm:text-[28px] lg:text-[32px] text-left">
              {p.title}
            </h3>
            <p className="mt-3 sm:mt-4 text-[#29282D] font-extralight text-[16px] sm:text-[18px] leading-[1.5] text-left max-w-[700px]">
              {p.text}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}
