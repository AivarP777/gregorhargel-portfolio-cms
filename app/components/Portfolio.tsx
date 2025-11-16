'use client'

export default function PortfolioChecker() {
  // 🎬 Siin muuda oma Vimeo videote lingid
  const vimeo1 = 'https://www.youtube.com/embed/C4xMmETZSPY'
  const vimeo2 = 'https://www.youtube.com/embed/6z4B11dwiOo'
  const vimeo3 = 'https://www.youtube.com/embed/0qV850EHRq8'

  const projects = [
    {
      id: 1,
      videoOnRight: false,
      src: vimeo1,
      label: 'Commercial',
      title: 'Unsplice Kitchen',
      text: 'While I was cutting this, I asked myself, what does cooking represent to me. The brief was to cut a 20 second food commercial, using library assets. I discovered a music track that perfectly matched the tone of the video and shortened it to fit the 20-second format. The result was an engaging edit that earned me the title of Editor of the Month.',
    },
    {
      id: 2,
      videoOnRight: true,
      src: vimeo2,
      label: 'Commercial',
      title: 'SONOS',
      text: 'In the early stages of this edit, I found it challenging to shorten the footage. The goal was to create a 20-second commercial. I experimented with different sound effects and adjusted the pacing by varying clip lengths. The final cut achieved a strong sense of tension and rhythm while staying within the 20-second limit.',
    },
    {
      id: 3,
      videoOnRight: false,
      src: vimeo3,
      label: 'Commercial',
      title: 'British Airways',
      text: 'This edit was about showing why flying can sometimes be the better way to travel. The goal was to deliver a message using only one shot and a title sequence. I found footage that captured the feeling of isolation and frustration, which perfectly set up the story’s punchline.',
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
