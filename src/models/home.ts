export enum PublicationType {
  TRIBUNE = "Tribune",
  PUBLICATIION = "Publication",
}
export type PublicationNode = {
  edges: Publication[]
}
export type Publication = {
  node: {
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
}

export type YoutubeVideoNode = {
  edges: [
    {
      node: {
        id: string
        title: string
        description: string
        videoId: string
        publishedAt: string
        privacyStatus: string
        channelTitle: string
        thumbnail: {
          url: string
        }
        localThumbnail: {
          childImageSharp: {
            fixed: {
              src: string
            }
          }
        }
      }
    }
  ]
}

export type HomeDataNodes = {
  allContentfulPublications: PublicationNode
  allYoutubeVideo: YoutubeVideoNode
}
