const createReviewQuery = (attributes) => `
  mutation {
    createReview(
      title: "${attributes.title}",
      description: "${attributes.description}",
      score: ${attributes.score},
      garbageId: ${attributes.garbageId}
    ) {
      title
      description
      score
      garbageId
    }
  }
`

export default createReviewQuery
