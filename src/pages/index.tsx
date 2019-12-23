import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import "./index.scss"
import Seo from "../components/seo"

const IndexPage = () => {
  const articles = [1, 2, 3]
  return (
    <Layout>
      <Seo title="Home" />
      <section className="container">
        <h1>Dernières publications</h1>
        <div className="separator"></div>
        <div className="portefolio-container">
          <section className="last-post-container">
            <article className="recent-article main-post">
              <img src="https://fakeimg.pl/500x500" />
            </article>

            {/* <section className="recent-article-container"> */}
            {articles.map(a => (
              <article className="recent-article">
                <img src="https://fakeimg.pl/200x200" />
              </article>
            ))}
            {/* </section> */}
          </section>
        </div>

        <h1>Nos Recentes rencontres</h1>
        <div className="separator"></div>
        <div className="portefolio-container">
          <section className="recent-meeting-container">
            {articles.map(a => (
              <article className="recent-meeting">
                <img src="https://fakeimg.pl/250x250" />
              </article>
            ))}
          </section>
        </div>
      </section>
      {/* <Image /> */}
    </Layout>
  )
}

export default IndexPage
