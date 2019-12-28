import * as React from "react"
import "./separator.scss"
export interface ISeparatorProps {
  title: string
}

export function Separator({ title }: ISeparatorProps) {
  return (
    <div className="separator">
      <h1>{title}</h1>
      <div className="underline"></div>
    </div>
  )
}
