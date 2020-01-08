import * as React from "react"
import "./sideHeader.scss"

interface ISideHeaderProps {
  title: string
}

const SideHeader: React.FunctionComponent<ISideHeaderProps> = ({ title }) => {
  return (
    <div className="sidebar-header">
      <div className="sidebar-header-line"></div>
      <h5 className="sidebar-heading">{title}</h5>
      <div className="sidebar-header-line"></div>
    </div>
  )
}

export default SideHeader
