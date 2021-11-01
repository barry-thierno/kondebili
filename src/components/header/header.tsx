import * as React from "react"
import { Link } from "gatsby"
import "./header.scss"
import { StaticImage } from "gatsby-plugin-image"

type HeaderProps = {
  siteTitle: string
}

const Header: React.FunctionComponent<HeaderProps> = ({ siteTitle }) => (
  <header>
    <Link className="site-infos" to="/">
      <div>
      <StaticImage alt="logo" loading="eager" src="../../images/kondebili-icon.png" layout="fixed"  placeholder="blurred"   width={40}
      height={40}/>
      </div>
      <h1 className="site-title">{siteTitle}</h1>
    </Link>

    <nav>
      <ul className="menu">
        <li>
          <Link className="menu-item" to="/about">
            Qui sommes nous?
          </Link>
        </li>
        <li>
          <Link className="menu-item" to="/">
            Publications
          </Link>
        </li>
        <li>
          <Link className="menu-item" to="/">
            Tribunes
          </Link>
        </li>
        <li>
          <Link className="menu-item" to="/videos">
            Vidéos
          </Link>
        </li>
      </ul>
    </nav>
  </header>
)

export default Header
