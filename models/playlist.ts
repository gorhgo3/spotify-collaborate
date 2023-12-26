export type Playlist = {
  collaborative: boolean
  description: string
  externalUrls: ExternalUrls
  followers: Followers
  href: string
  id: string
  images: Image[]
  name: string
  owner: Owner
  public: boolean
  snapshotID: string
  tracks: Tracks
  type: string
  uri: string
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

export type Owner = {
  externalUrls: ExternalUrls
  followers?: Followers
  href: string
  id: string
  type: string
  uri: string
  displayName?: string
  name?: string
}

export type Tracks = {
  href: string
  limit: number
  next: string
  offset: number
  previous: string
  total: number
  items: Item[]
}

export type Item = {
  addedAt: string
  addedBy: Owner
  isLocal: boolean
  track: Track
}

export type Track = {
  album: Album
  artists: Artist[]
  availableMarkets: string[]
  discNumber: number
  durationMS: number
  explicit: boolean
  externalIDS: ExternalIDS
  externalUrls: ExternalUrls
  href: string
  id: string
  isPlayable: boolean
  linkedFrom: LinkedFrom
  restrictions: Restrictions
  name: string
  popularity: number
  previewURL: string
  trackNumber: number
  type: string
  uri: string
  isLocal: boolean
}

export type Album = {
  albumType: string
  totalTracks: number
  availableMarkets: string[]
  externalUrls: ExternalUrls
  href: string
  id: string
  images: Image[]
  name: string
  releaseDate: string
  releaseDatePrecision: string
  restrictions: Restrictions
  type: string
  uri: string
  artists: Owner[]
}

export type Restrictions = {
  reason: string
}

export type Artist = {
  externalUrls: ExternalUrls
  followers: Followers
  genres: string[]
  href: string
  id: string
  images: Image[]
  name: string
  popularity: number
  type: string
  uri: string
}

export type ExternalIDS = {
  isrc: string
  ean: string
  upc: string
}

export type LinkedFrom = {}
