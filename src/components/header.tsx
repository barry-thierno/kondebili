import * as React from "react"
import { Link } from "gatsby"
import "./header.scss"

type HeaderProps = {
  siteTitle: string
}

const Header: React.FunctionComponent<HeaderProps> = ({ siteTitle }) => (
  <header>
    <h1>
      <Link className="site-title" to="/">
        {siteTitle}
      </Link>
    </h1>

    <nav>
      <ul className="menu">
        <li>
          <Link className="menu-item" to="/">
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
          <Link className="menu-item" to="/">
            Vidéos
          </Link>
        </li>
      </ul>
    </nav>
  </header>
)

export default Header
