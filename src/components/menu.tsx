import * as React from "react"
import "./menu.scss"

export default function Menu() {
  return (
    <nav>
      <div className="logo">Kondebili</div>
      <ul className="menu">
        <li>
          <a href="#!">Qui sommes nous?</a>
        </li>
        <li>
          <a href="#!">Publications</a>
        </li>
        <li>
          <a href="#!">Evènements</a>
        </li>
      </ul>
    </nav>
  )
}
