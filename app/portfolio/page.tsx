import Portfolio from '../components/Portfolio'
import { client } from '../../sanity/lib/client'
import { portfolioProjectsQuery } from '../../sanity/queries'

type Project = {
  _id: string
  label?: string
  title: string
  description?: string
  videoUrl: string
}

export default async function PortfolioPage() {
  const projects: Project[] = await client.fetch(portfolioProjectsQuery)

  return (
    <section
      className="
        relative bg-[#F5F5F1] min-h-screen
        px-[24px] sm:px-[60px] md:px-[100px]
        pt-[40px] sm:pt-[60px] md:pt-[70px]
        pb-[100px] sm:pb-[160px] md:pb-[200px]
      "
    >
      {/* Pealkiri */}
      <h1
        className="
          font-[Archivo] font-extrabold uppercase text-[#29282D]
          text-[48px] sm:text-[90px] md:text-[130px] lg:text-[185px]
          leading-[1.08]
          text-center md:text-left
        "
      >
        PORTFOLIO
      </h1>

      {/* Alamtekst */}
      <p
        className="
          mt-[24px] sm:mt-[32px] md:mt-[40px]
          max-w-[940px]
          font-[Archivo] font-extralight text-[#29282D]
          text-[16px] sm:text-[22px] md:text-[28px] lg:text-[40px]
          leading-[1.4]
          text-center md:text-left
          px-[4px] sm:px-0
        "
      >
        You can trust me to be reliable, meet deadlines, and make working together an enjoyable experience.
      </p>

      {/* Portfoolio plokid Sanityst */}
      <Portfolio projects={projects} />
    </section>
  )
}
