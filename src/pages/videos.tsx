import * as React from "react"
import Layout from "../components/layout/layout"
import Seo from "../components/seo/seo"
import { YoutubeVideoNode } from "../components/youtubeVideoCard/youtubeVideoCard.model"
import { useStaticQuery, graphql } from "gatsby"
import YoutubeVideoCard from "../components/youtubeVideoCard/youtubeVideoCard"
import "./videos.scss"

type AllYoutubeVideo = {
  allYoutubeVideo: YoutubeVideoNode
}
const Videos = () => {
  const {
    allYoutubeVideo: { edges: allVideos },
  } = useStaticQuery<AllYoutubeVideo>(graphql`
    query {
      allYoutubeVideo: allYoutubeVideo(
        sort: { fields: publishedAt, order: DESC }
      ) {
        edges {
          node {
            id
            title
            description
            videoId
            publishedAt(fromNow: true, locale: "fr")
            privacyStatus
            channelTitle
            thumbnail {
              url
            }
            localThumbnail {
              childImageSharp {
                fixed(width: 300, height: 200) {
                  src
                }
              }
            }
          }
        }
      }
    }
  `)
  const tags = [
    "+ Récentes",
    "Politique",
    "Science",
    "Economie",
    "Société",
    "Education",
  ]
  return (
    <Layout>
      <Seo title="Vidéos" />
      <section className="filters">
        {tags.map(tag => (
          <button className="filter-category">
            <div className="name">{tag}</div>
          </button>
        ))}
      </section>
      <section className="videos">
        {allVideos.map(video => (
          <YoutubeVideoCard {...video.node} />
        ))}
      </section>
    </Layout>
  )
}
export default Videos
