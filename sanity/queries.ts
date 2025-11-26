import { groq } from 'next-sanity'

export const portfolioProjectsQuery = groq`
  *[_type == "portfolioProject"]
  | order(order asc, _createdAt asc) {
    _id,
    label,
    title,
    description,
    videoUrl
  }
`
