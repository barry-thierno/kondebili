import * as React from "react"
import "./youtubeVideoCard.scss"
import { parseHtmlEntities } from "../../utils/htmlUtils"

type YoutubeVideoCardProps = GatsbyTypes.YoutubeVideo

const YoutubeVideoCard: React.FunctionComponent<YoutubeVideoCardProps> = ({
  title,
  publishedAt,
  watchUrl,
  thumbnails: {
    high: { url },
  },
}) => {
  return (
    <article className="meeting-post">
      <div className="meeting-post-header">
        <span className="material-icons">video_library</span>
        <div>Vidéo Youtube</div>
      </div>
      <img src={url} alt="article" />
      <div className="meeting-post-details">
        <h2>{parseHtmlEntities(title)}</h2>
        <div className="meeting-post-infos">
          <a href={watchUrl}>Voir la Publication</a>
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
