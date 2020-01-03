import * as React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout/layout"
import Seo from "../components/seo/seo"
import { MarkdownData, AboutNode } from "../models/about"
import { Separator } from "../components/separator/separator"
import "./about.scss"

const About = () => {
  const {
    markdownRemark: { html },
    allContentfulMembers: { edges: members },
  } = useStaticQuery<AboutNode>(graphql`
    query {
      markdownRemark: markdownRemark(
        frontmatter: { title: { eq: "Presentation" } }
      ) {
        html
      }
      allContentfulMembers: allContentfulMembers {
        edges {
          node {
            id
            photo {
              fixed(width: 500, height: 500) {
                src
              }

              title
            }
            name
            role
            presentation
          }
        }
      }
    }
  `)
  const src = "https://fakeimg.pl/250x250"
  return (
    <Layout>
      <Seo title="Qui sommes nous" />
      <Separator title="Qui sommes nous?" />
      <div
        className="presentation"
        dangerouslySetInnerHTML={{ __html: html }}
      ></div>
      <Separator title="Notre équipe" />
      <div className="members">
        {members.map(
          ({
            node: {
              id,
              name,
              photo: {
                fixed: { src },
              },
              role,
              presentation,
            },
          }) => (
            <div className="member-card">
              <img src={src} alt="photo membre" />
              <div className="member-info">
                <div className="member-name">{name}</div>
                <div className="member-role">{role.toUpperCase()}</div>
                <div className="member-presentation">{presentation}</div>
                <div className="member-contact">
                  <span className="material-icons">access_time</span>
                  <span className="material-icons">access_time</span>
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </Layout>
  )
}

export default About
