import * as React from "react"
import "./footer.scss"
const Footer = () => {
  return (
    <footer>
      © {new Date().getFullYear()}, Built with {`  `}
      <a href="https://www.gatsbyjs.org"> Gatsby </a> by Kondebili team
    </footer>
  )
}

export default Footer
