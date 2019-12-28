import * as React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import "./index.scss"
import Seo from "../components/seo"
import { HomeDataNodes } from "../models/home"
import { Separator } from "../components/separator/separator"

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
          {publications.map(
            (
              {
                node: {
                  title,
                  publicationDate,
                  category,
                  image: {
                    fixed: { src },
                  },
                },
              },
              index
            ) => (
              <article
                className={`publication-post ${
                  index === 1 ? "main-article" : ""
                } `}
              >
                <img src={src} alt="article" />
                {/* <Image /> */}
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
              </article>
            )
          )}
        </section>
        <Separator title="Nous en parlons!" />
        <section className="last-meeting">
          {allVideos.map(
            ({
              node: {
                title,
                publishedAt,
                localThumbnail: {
                  childImageSharp: {
                    fixed: { src },
                  },
                },
              },
            }) => (
              <article className="meeting-post">
                <div className="meeting-post-header">
                  <span className="material-icons">video_library</span>
                  <div>Vidéo Youtube</div>
                </div>
                <img src={src} alt="article" />
                <div className="meeting-post-details">
                  <h2>{title}</h2>
                  <div className="meeting-post-infos">
                    <a href="">Voir la Publication</a>
                    <div className="meeting-post-date">
                      <span className="material-icons">access_time</span>
                      <span>{publishedAt}</span>
                    </div>
                  </div>
                </div>
              </article>
            )
          )}
        </section>
        <Separator title="Tribunes récentes" />
        <Separator title="Dernières rencontres" />
      </main>
    </Layout>
  )
}

export default IndexPage
