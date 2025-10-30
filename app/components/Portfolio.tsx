'use client'

export default function PortfolioChecker() {
  const projects = [
    {
      id: 1,
      videoOnRight: false,
      src: '/videos/sample2.mp4',
      poster: '/images/sample2.png',
      text: 'When I began editing the first rough cut, I asked myself — what does cooking represent to me? The answer that came instantly was elegance. That idea shaped the entire mood of the piece and led me to the perfect music choice for this commercial.',
    },
    {
      id: 2,
      videoOnRight: true,
      src: '/videos/sample3.mp4',
      poster: '/images/sample3.jpg',
      text: 'Everyday sounds, cinematic rhythm. A 20-second edit built entirely around pacing, texture, and tension.',
    },
    {
      id: 3,
      videoOnRight: false,
      src: '/videos/sample4.mp4',
      poster: '/images/sample4.png',
      text: 'Project goal was to give a message to the viewer with only one shot followed by a title. Simple and engaging edit.',
    },
  ]

  return (
    <div className="mt-[80px]">
      {projects.map((p) => (
        <div
          key={p.id}
          className="
            grid grid-cols-1 md:grid-cols-2 gap-0
            bg-[#F5F5F1]
          "
        >
          {/* Vasak / Ülemine pool (video) */}
          <div
            className={`
              ${p.videoOnRight ? 'md:order-2' : 'md:order-1'}
            `}
          >
            <div className="relative aspect-video overflow-hidden">
              <video
                className="absolute inset-0 h-full w-full object-cover"
                src={p.src}
                poster={p.poster}
                controls
                playsInline
                preload="metadata"
                controlsList="nodownload noplaybackrate"
              />
            </div>
          </div>

          {/* Parem / Alumine pool (tekst) */}
          <div
            className={`
              flex items-center justify-center px-[24px] sm:px-[48px] md:px-[64px] py-[28px] md:py-[36px]
              ${p.videoOnRight ? 'md:order-1' : 'md:order-2'}
            `}
          >
            <p className="max-w-[700px] text-[#29282D] font-extralight text-[18px] sm:text-[20px] lg:text-[32px] leading-[1.45] text-left">
              {p.text}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}
