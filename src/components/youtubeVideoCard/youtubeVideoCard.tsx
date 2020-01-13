import * as React from "react"
import "./youtubeVideoCard.scss"
import { VideoNode } from "./youtubeVideoCard.model"

type YoutubeVideoCardProps = VideoNode

const buildYoutubeVideoUrl = (idVideo: string) =>
  `https://www.youtube.com/watch?v=${idVideo}`

const YoutubeVideoCard: React.FunctionComponent<YoutubeVideoCardProps> = ({
  title,
  videoId,
  publishedAt,
  localThumbnail: {
    childImageSharp: {
      fixed: { src },
    },
  },
}) => {
  return (
    <article className="meeting-post">
      <div className="meeting-post-header">
        <span className="material-icons">video_library</span>
        <div>Vidéo Youtube</div>
      </div>
      <img src={src} alt="article" />
      <div className="meeting-post-details">
        <h2>{title}</h2>
        <div className="meeting-post-infos">
          <a href={buildYoutubeVideoUrl(videoId)}>Voir la Publication</a>
          <div className="meeting-post-date">
            <span className="material-icons">access_time</span>
            <span>{publishedAt}</span>
          </div>
        </div>
      </div>
    </article>
  )
}

export default YoutubeVideoCard
