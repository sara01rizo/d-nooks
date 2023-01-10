const garbagesQuery = `
  query Garbages {
    garbages {
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

export default garbagesQuery
