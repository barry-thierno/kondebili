import * as React from "react"
import Layout from "../components/layout/layout"
import Seo from "../components/seo/seo"
import { useStaticQuery, graphql } from "gatsby"
import YoutubeVideoCard from "../components/youtubeVideoCard/youtubeVideoCard"

import "./videos.scss"

type AllYoutubeVideo = {
  allYoutubeVideo: GatsbyTypes.YoutubeVideoConnection
}
const Videos = () => {
  const {
    allYoutubeVideo: { nodes: allVideos },
  } = useStaticQuery<AllYoutubeVideo>(graphql`
    query {
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
  const tags = [
    "+ Récentes",
    "Politique",
    "Science",
    "Economie",
    "Société",
    "Education",
    "Santé",
    "Numérique",
  ]
  const [selectedTags, setSelectedTags] = React.useState<string[]>([])

  const handleTagsFilter = (tag: string) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags((prevSelectedTags) =>
        prevSelectedTags.filter((s) => s !== tag)
      )
    } else {
      setSelectedTags((prevSelectedTags) => [...prevSelectedTags, tag])
    }
  }

  const filteredVidoes = selectedTags.length
    ? allVideos.filter((v) => v.tags.some((t) => selectedTags.includes(t)))
    : allVideos

  const isSelectedTag = (tag: string) => selectedTags.includes(tag)
  return (
    <Layout>
      <Seo title="Vidéos" />
      <div className="filter-container">
        <div className="filter-input">
          <h1>Rechercher une vidéo</h1>
          <div className="search-input">
            <input
              placeholder="rechercher une vidéo"
              aria-label="rechercher une vidoé"
              type="text"
            />
            <button className="search-btn">Rechercher</button>
          </div>
        </div>
        <section className="filters">
          {tags.map((tag) => (
            <button
              onClick={() => handleTagsFilter(tag)}
              className={`filter-category ${
                isSelectedTag(tag) ? "filter-category--selected" : ""
              }`}
            >
              <div className="name">{tag}</div>
            </button>
          ))}
        </section>
      </div>
      <div className="video-container">
        <section className="videos">
          {filteredVidoes.map((video) => (
            <YoutubeVideoCard {...video} />
          ))}
        </section>
      </div>
    </Layout>
  )
}
export default Videos
