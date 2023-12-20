export type UserDetails = {
  country: string
  displayName: string
  email: string
  explicitContent: ExplicitContent
  externalUrls: ExternalUrls
  followers: Followers
  href: string
  id: string
  images: Image[]
  product: string
  type: string
  uri: string
}

export type ExplicitContent = {
  filterEnabled: boolean
  filterLocked: boolean
}

export type ExternalUrls = {
  spotify: string
}

export type Followers = {
  href: string
  total: number
}

export type Image = {
  url: string
  height: number
  width: number
}
