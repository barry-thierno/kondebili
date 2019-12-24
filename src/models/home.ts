export type PublicationNode = {
  allContentfulPublications: {
    edges: Publication[]
  }
}
export type Publication = {
  node: {
    id: string
    title: string
    category: string
    publicationDate: string
    image: {
      file: {
        url: string
      }
    }
  }
}
