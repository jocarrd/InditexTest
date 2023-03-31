const CORS = 'https://api.allorigins.win/get?url='

const BASE_URL = 'https://itunes.apple.com'

export const MAIN_PODCASTS = `${CORS}${encodeURIComponent(
  `${BASE_URL}/us/rss/toppodcasts/limit=100/genre=1310/json`
)}`
export const PODCAST_DETAIL = `${CORS}${encodeURIComponent(
  `${BASE_URL}/lookup?id=idnum&media=podcast
    &entity=podcastEpisode&limit=20`
)}`
