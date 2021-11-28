export const parseHtmlEntities = (str: string) =>
  str.replace(/&#(\d+);/g, (_, dec) => String.fromCharCode(dec))
