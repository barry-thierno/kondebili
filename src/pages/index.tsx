import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import "./index.scss"
import Seo from "../components/seo"

const getTime = () => {
  const date = new Date()
  const h = date.getHours()
  const m = date.getMinutes()
  const s = date.getSeconds()

  const hh = h < 10 ? "0" + h : h
  const mm = m < 10 ? "0" + m : m
  const ss = s < 10 ? "0" + s : s

  return hh + ":" + mm + ":" + ss + " "
}

const IndexPage = () => {
  const [time, setTime] = React.useState(undefined)

  // Similar to componentDidMount and componentDidUpdate:
  React.useEffect(() => {
    const currentTime = setInterval(() => {
      setTime(getTime())
    }, 1000)

    return () => {
      clearInterval(currentTime)
    }
  }, [])

  return (
    <Layout>
      <Seo title="Home" />
      <article className="container">
        <h1>Contenu à venir</h1>
        <div className="time">{time}</div>
      </article>
      {/* <Image /> */}
    </Layout>
  )
}

export default IndexPage
