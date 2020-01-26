import * as React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout/layout"
import Seo from "../components/seo/seo"
import { Separator } from "../components/separator/separator"
import "./index.scss"
import YoutubeVideoCard from "../components/youtubeVideoCard/youtubeVideoCard"
import { YoutubeVideoNode } from "../components/youtubeVideoCard/youtubeVideoCard.model"
import { PublicationEdges } from "../components/publicationCard/publicationCard.model"
import PublicationCard from "../components/publicationCard/publicationCard"

export type HomeDataNodes = {
  allContentfulPublications: PublicationEdges
  allYoutubeVideo: YoutubeVideoNode
}

const IndexPage = () => {
  const {
    allContentfulPublications: { edges: publications },
    allYoutubeVideo: { edges: allVideos },
  } = useStaticQuery<HomeDataNodes>(graphql`
    query {
      allContentfulPublications: allContentfulPublications(
        sort: { fields: publicationDate, order: DESC }
      ) {
        edges {
          node {
            id
            title
            category
            publicationType
            publicationDate(formatString: "DD MMMM YYYY", locale: "fr")
            image {
              fixed(width: 800, height: 800) {
                width
                height
                src
              }
            }
          }
        }
      }
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

  return (
    <Layout>
      <Seo title="Home" />
      <main>
        <Separator title="Les dernières publications" />
        <section className="last-publications">
          {publications.map(({ node }, index) => (
            <PublicationCard {...node} isMainPublication={index === 0} />
          ))}
        </section>
        <Separator title="Nous en parlons!" />
        <section className="last-videos">
          {allVideos.slice(0, 4).map(video => (
            <YoutubeVideoCard {...video.node} />
          ))}
        </section>
        {/* <Separator title="Tribunes récentes" />
        <Separator title="Dernières rencontres" /> */}
      </main>
    </Layout>
  )
}

export default IndexPage
