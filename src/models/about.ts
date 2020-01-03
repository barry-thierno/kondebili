export type MarkdownData = {
  html: string
}

export type Member = {
  node: {
    id: string
    title: string
    name: string
    role: string
    presentation: string
    photo: {
      fixed: {
        src: string
      }
    }
  }
}

export type MemberNode = {
  edges: Member[]
}

export type AboutNode = {
  markdownRemark: MarkdownData
  allContentfulMembers: MemberNode
}
