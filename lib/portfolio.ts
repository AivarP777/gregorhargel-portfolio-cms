// lib/portfolio.ts
import { client } from './sanity'

export type Project = {
  _id: string
  label?: string
  title: string
  description?: string
  videoUrl: string
}

const portfolioQuery = `
  *[_type == "portfolioItem"] | order(order asc) {
    _id,
    label,
    title,
    description,
    videoUrl
  }
`

export async function getPortfolioProjects(): Promise<Project[]> {
  return client.fetch(portfolioQuery)
}
