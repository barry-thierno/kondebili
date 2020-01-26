import * as React from "react"
import { Link } from "gatsby"
import { Publication, PublicationType } from "./publicationCard.model"
import "./publicationCard.scss"

type PublicationCardProps = Publication & { isMainPublication?: boolean }

const PublicationCard: React.FunctionComponent<PublicationCardProps> = props => {
  const {
    id,
    publicationType,
    publicationDate,
    title,
    category,
    isMainPublication,
    image: {
      fixed: { src },
    },
  } = props
  return (
    <Link
      style={{
        backgroundImage: `url(${src})`,
        backgroundSize: "cover",
      }}
      className={`publication-post ${isMainPublication ? "main-article" : ""} `}
      to={`/post/${id}`}
    >
      <div
        className={`post-type post-type${
          publicationType === PublicationType.TRIBUNE
            ? "--tribune"
            : "--publication"
        }`}
      >
        {publicationType}
      </div>
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
    </Link>
  )
}

export default PublicationCard
