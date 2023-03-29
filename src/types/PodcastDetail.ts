export interface PodcastDetail {
  resultCount: number
  results: Result[]
}

export interface Result {
  country: string
  collectionViewUrl: string
  trackTimeMillis: number
  feedUrl: string
  closedCaptioning: string
  collectionId: number
  collectionName: string
  artworkUrl60: string
  artistViewUrl: string
  contentAdvisoryRating: string
  trackViewUrl: string
  episodeUrl: string
  trackId: number
  trackName: string
  description: string
  episodeFileExtension: string
  previewUrl: string
  artistIds: number[]
  releaseDate: string
  shortDescription: string
  episodeContentType: string
  artworkUrl600: string
  kind: string
  wrapperType: string
  artworkUrl160: string
  episodeGuid: string
  genres: Genre[]
}

export interface Genre {
  name: string
  id: string
}
