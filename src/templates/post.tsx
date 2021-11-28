import * as React from "react"
import Layout from "../components/layout/layout"
import { graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import "./post.scss"
import { GatsbyImage, IGatsbyImageData, getImage } from "gatsby-plugin-image"
import SideHeader from "../components/sideHeader/sideHeader"

export type PostProps = {
  data: {
    contentfulPublications: {
      title: string
      category: string
      publicationType: string
      publicationDate: string
      author: {
        name: string
        photo: {
          fixed: GatsbyTypes.ContentfulFixed
        }
        description: string
      }
      image: IGatsbyImageData
      body: GatsbyTypes.ContentfulPublicationsBody
    }
  }
}

export const query = graphql`
  query ($id: String!) {
    contentfulPublications(id: { eq: $id }) {
      title
      category
      publicationType
      publicationDate(formatString: "DD MMMM YYYY", locale: "fr")
      author {
        name
        photo {
          fixed(width: 500, height: 500) {
            width
            height
            src
          }
        }
        description
      }
      image {
        gatsbyImageData(width: 1200, placeholder: TRACED_SVG)
      }
      body {
        raw
      }
    }
  }
`
export default function Post(props: PostProps) {
  const {
    data: {
      contentfulPublications: {
        title,
        category,
        publicationType,
        publicationDate,
        author: {
          name,
          photo: { fixed: authorPhoto },
          description,
        },
        image,
        body,
      },
    },
  } = props
  const imageData = getImage(image)
  return (
    <Layout>
      <div className="post-wrapper">
        <div className="post-container">
          <div className="post-body">
            <GatsbyImage alt="post-image" image={imageData} />
            <div className="publication-details">
              <div>
                <div className="category">{`${publicationType.toUpperCase()} / ${category.toUpperCase()}`}</div>
                <div className="underline"></div>
              </div>
              <div className="publication-date">{publicationDate}</div>
            </div>
            <div className="publication-title">
              <div className="vertical-line"></div>
              <h1>{title}</h1>
            </div>

            <div className="publication-body">
              {documentToReactComponents(JSON.parse(body.raw))}
            </div>
          </div>
          <div className="suggestions">
            <SideHeader title="Auteur" />
            <div className="author">
              <div className="photo">
                {/* <Img fixed={authorPhoto} /> */}
                <img src={authorPhoto.src} alt="post-author" />
              </div>
              <div className="author-info">
                <div className="name">{name}</div>
                <div className="description">{description}</div>
              </div>
            </div>
            <SideHeader title="Dans la même catégorie" />
            {/* <SideHeader title="Pour le même auteur" /> */}
          </div>
        </div>
      </div>
    </Layout>
  )
}
