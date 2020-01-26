import * as React from "react"
import Layout from "../components/layout/layout"
import Seo from "../components/seo/seo"
import { useStaticQuery, graphql } from "gatsby"

import "./tribunes.scss"
import { PublicationEdges } from "../components/publicationCard/publicationCard.model"
import PublicationCard from "../components/publicationCard/publicationCard"

type AllYoutubeVideo = {
  allContentfulPublications: PublicationEdges
}
const Tribunes = () => {
  const {
    allContentfulPublications: { edges: allPublications },
  } = useStaticQuery<AllYoutubeVideo>(graphql`
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
      <div className="filter-container">
        <div className="filter-input">
          <h1>Rechercher une publication</h1>
        </div>
        <section className="filters">
          {tags.map(tag => (
            <button className="filter-category">
              <div className="name">{tag}</div>
            </button>
          ))}
        </section>
      </div>
      <div className="tribunes-container">
        <section className="tribunes">
          {allPublications.map(({ node }) => (
            <PublicationCard {...node} />
          ))}
        </section>
      </div>
    </Layout>
  )
}
export default Tribunes
