export type VideoNode = {
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

export type YoutubeVideoNode = {
  edges: [
    {
      node: VideoNode
    }
  ]
}
