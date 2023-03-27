export interface PodcastDetail {
  resultCount: number
  results: Result[]
}

interface Result {
  wrapperType: WrapperType
  kind: Kind
  artistId?: number
  collectionId: number
  trackId: number
  artistName?: string
  collectionName: Name
  trackName: string
  collectionCensoredName?: Name
  trackCensoredName?: Name
  artistViewUrl: string
  collectionViewUrl: string
  feedUrl: string
  trackViewUrl: string
  artworkUrl30?: string
  artworkUrl60: string
  artworkUrl100?: string
  collectionPrice?: number
  trackPrice?: number
  collectionHdPrice?: number
  releaseDate: Date
  collectionExplicitness?: string
  trackExplicitness?: string
  trackCount?: number
  trackTimeMillis: number
  country: Country
  currency?: string
  primaryGenreName?: PrimaryGenreNameEnum
  contentAdvisoryRating: ContentAdvisoryRating
  artworkUrl600: string
  genreIds?: string[]
  genres: Array<GenreClass | string>
  artworkUrl160?: string
  episodeFileExtension?: EpisodeFileExtension
  episodeContentType?: EpisodeContentType
  episodeUrl?: string
  closedCaptioning?: ClosedCaptioning
  episodeGuid?: string
  description?: string
  shortDescription?: string
  artistIds?: number[]
  previewUrl?: string
}

enum ClosedCaptioning {
  None = 'none',
}

enum Name {
  DrinkChamps = 'Drink Champs',
}

enum ContentAdvisoryRating {
  Explicit = 'Explicit',
}

enum Country {
  Usa = 'USA',
}

enum EpisodeContentType {
  Audio = 'audio',
}

enum EpisodeFileExtension {
  Mp3 = 'mp3',
}

interface GenreClass {
  name: PrimaryGenreNameEnum
  id: string
}

enum PrimaryGenreNameEnum {
  Music = 'Music',
}

enum Kind {
  Podcast = 'podcast',
  PodcastEpisode = 'podcast-episode',
}

enum WrapperType {
  PodcastEpisode = 'podcastEpisode',
  Track = 'track',
}
