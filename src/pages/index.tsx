import * as React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import "./index.scss"
import Seo from "../components/seo"
import { PublicationNode } from "./Home.model"

const IndexPage = () => {
  const data = useStaticQuery<PublicationNode>(graphql`
    query {
      allContentfulPublications(
        sort: { fields: publicationDate, order: DESC }
      ) {
        edges {
          node {
            id
            title
            category
            publicationDate(formatString: "DD MMMM YYYY")
          }
        }
      }
    }
  `)
  const {
    allContentfulPublications: { edges: publications },
  } = data
  return (
    <Layout>
      <Seo title="Home" />
      <main>
        <h1>Les dernières publications</h1>
        <section className="last-publications">
          {publications.map(
            ({ node: { title, publicationDate, category } }, index) => (
              <article
                className={`publication-post ${
                  index === 1 ? "main-article" : ""
                } `}
              >
                <img src="https://fakeimg.pl/400x400" alt="article" />
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

          {/* <article className="publication-post">
            <img src="https://fakeimg.pl/400x400" alt="article" />
          </article>
          <article className="publication-post">
            <img src="https://fakeimg.pl/400x400" alt="article" />
          </article>
          <article className="publication-post">
            <img src="https://fakeimg.pl/400x400" alt="article" />
          </article>
          <article className="publication-post">
            <img src="https://fakeimg.pl/400x400" alt="article" />
          </article> */}
        </section>
        <h1>Nos récentes rencontres</h1>
        <section className="last-meeting">
          <article className="meeting-post">
            <img src="https://fakeimg.pl/300x300" alt="article" />
          </article>
          <article className="meeting-post">
            <img src="https://fakeimg.pl/300x300" alt="article" />
          </article>
          <article className="meeting-post">
            <img src="https://fakeimg.pl/300x300" alt="article" />
          </article>
          <article className="meeting-post">
            <img src="https://fakeimg.pl/300x300" alt="article" />
          </article>
        </section>
      </main>
      {/* <Image /> */}
    </Layout>
  )
}

export default IndexPage
