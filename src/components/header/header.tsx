import * as React from "react"
import { Link } from "gatsby"
import Image from "../image"
import "./header.scss"

type HeaderProps = {
  siteTitle: string
}

const Header: React.FunctionComponent<HeaderProps> = ({ siteTitle }) => (
  <header>
    <Link className="site-infos" to="/">
      <div>
        <Image />
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
          <Link className="menu-item" to="/tribunes">
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
