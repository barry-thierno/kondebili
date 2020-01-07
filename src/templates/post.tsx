import * as React from "react"
import Layout from "../components/layout/layout"
import Seo from "../components/seo/seo"
import { graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import "./post.scss"
import { FixedObject, FluidObject } from "gatsby-image"
import Img from "gatsby-image"

export type PostProps = {
  data: {
    contentfulPublications: {
      title: string
      category: string
      publicationType: string
      publicationDate: string
      image: {
        fixed: FixedObject
        fluid: FluidObject
        childImageSharp: { fixed: FixedObject }
      }
      body: {
        json: any
      }
    }
  }
}

export const query = graphql`
  query($id: String!) {
    contentfulPublications(id: { eq: $id }) {
      title
      category
      publicationType
      publicationDate(formatString: "DD MMMM YYYY", locale: "fr")
      image {
        fixed(width: 1024, height: 400) {
          width
          height
          src
          tracedSVG
          base64
          aspectRatio
          srcSet
          srcWebp
        }
        fluid {
          aspectRatio
          src
          srcSet
          sizes
          base64
          tracedSVG
          srcWebp
          srcSetWebp
        }
      }
      body {
        json
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
        image: { fixed, fluid },

        body: { json },
      },
    },
  } = props

  return (
    <Layout>
      <div className="post-container">
        <Img fixed={fixed} loading="eager" />
        <div className="publication-details">
          <div className="category">{`${publicationType.toUpperCase()}/${category.toUpperCase()}`}</div>
          <div className="publication-date">{publicationDate}</div>
        </div>
        <div className="publication-title">
          <div className="underline"></div>
          <h1>{title}</h1>
        </div>

        <div className="publication-body">
          {documentToReactComponents(json)}
        </div>
      </div>
    </Layout>
  )
}
