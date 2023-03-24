const BASE_URL = 'https://itunes.apple.com'
export const MAIN_PODCASTS = `${BASE_URL}/us/rss/toppodcasts/limit=100/genre=1310/json`
export const PODCAST_DETAIL = `${BASE_URL}/lookup?id={id}&media=podcast
&entity=podcastEpisode&limit=20`
