export enum PublicationType {
  TRIBUNE = "Tribune",
  PUBLICATIION = "Publication",
}
export type PublicationEdges = {
  edges: PublicationNode[]
}
export type PublicationNode = {
  node: Publication
}

export type Publication = {
  id: string
  title: string
  category: string
  publicationType: PublicationType
  publicationDate: string
  image: {
    fixed: {
      src: string
    }
  }
}
