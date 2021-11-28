import * as React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout/layout"
import Seo from "../components/seo/seo"
import { PublicationType, PublicationNode } from "../models/home"
import { Separator } from "../components/separator/separator"
import "./index.scss"
import YoutubeVideoCard from "../components/youtubeVideoCard/youtubeVideoCard"

export type HomeDataNodes = {
  allContentfulPublications: PublicationNode
  allYoutubeVideo: GatsbyTypes.YoutubeVideoConnection
}

const IndexPage = () => {
  const {
    allContentfulPublications: { edges: publications },
    allYoutubeVideo: { nodes: allVideos },
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
        nodes {
          id
          publishedAt(fromNow: true, locale: "fr")
          channelId
          title
          description
          channelTitle
          liveBroadcastContent
          publishTime
          videoId
          watchUrl
          tags
          thumbnails {
            default {
              height
              url
              width
            }
            high {
              height
              url
              width
            }
            medium {
              height
              width
              url
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
          {publications.map(
            (
              {
                node: {
                  id,
                  title,
                  publicationDate,
                  publicationType,
                  category,
                  image: {
                    fixed: { src },
                  },
                },
              },
              index
            ) => (
              <Link
                style={{
                  backgroundImage: `url(${src})`,
                  backgroundSize: "cover",
                }}
                className={`publication-post ${
                  index === 0 ? "main-article" : ""
                } `}
                to={`/post/${id}`}
              >
                {/* <article> */}
                <div
                  className={`post-type post-type${
                    publicationType === PublicationType.TRIBUNE
                      ? "--tribune"
                      : "--publication"
                  }`}
                >
                  {publicationType}
                </div>
                {/* <img src={src} alt="article" /> */}
                <div className="publication-details">
                  <h2>{title}</h2>
                  <div className="publication-infos">
                    <div className="publication-category">{category}</div>
                    <div className="publication-date">
                      <span className="material-icons">access_time</span>
                      <span>{publicationDate}</span>
                    </div>
                  </div>
                </div>
                {/* </article> */}
              </Link>
            )
          )}
        </section>
        <Separator title="Nous en parlons!" />
        <section className="last-videos">
          {allVideos.slice(0, 4).map((video) => (
            <YoutubeVideoCard {...video} />
          ))}
        </section>
        {/* <Separator title="Tribunes récentes" />
        <Separator title="Dernières rencontres" /> */}
      </main>
    </Layout>
  )
}

export default IndexPage
