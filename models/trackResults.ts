export type TracksResults = {
  tracks: Tracks
}

export type Tracks = {
  href: string
  items: Item[]
  limit: number
  next: string
  offset: number
  previous: null
  total: number
}

export type Item = {
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
  isLocal: boolean
  name: string
  popularity: number
  previewURL: null | string
  trackNumber: number
  type: ItemType
  uri: string
}

export type Album = {
  albumType: AlbumTypeEnum
  artists: Artist[]
  availableMarkets: string[]
  externalUrls: ExternalUrls
  href: string
  id: string
  images: Image[]
  name: string
  releaseDate: string
  releaseDatePrecision: ReleaseDatePrecision
  totalTracks: number
  type: AlbumTypeEnum
  uri: string
}

export enum AlbumTypeEnum {
  Album = 'album',
  Compilation = 'compilation',
  Single = 'single',
}

export type Artist = {
  externalUrls: ExternalUrls
  href: string
  id: string
  name: string
  type: ArtistType
  uri: string
}

export type ExternalUrls = {
  spotify: string
}

export enum ArtistType {
  Artist = 'artist',
}

export type Image = {
  height: number
  url: string
  width: number
}

export enum ReleaseDatePrecision {
  Day = 'day',
  Year = 'year',
}

export type ExternalIDS = {
  isrc: string
}

export enum ItemType {
  Track = 'track',
}
