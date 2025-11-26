// lib/queries.ts
export const portfolioProjectsQuery = `
  *[_type == "portfolioItem"] | order(order asc) {
    _id,
    label,
    title,
    description,
    videoUrl
  }
`
