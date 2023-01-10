const garbageQuery = (slug) => `
  query Garbage {
    garbage(slug: "${slug}") {
      id
      name
      imageUrl
      slug
      averageScore
      reviews {
        id
        title
        description
        score
      }
    }
  }
`

export default garbageQuery
