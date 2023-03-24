const BASE_URL = 'https://itunes.apple.com'
const MAIN_PODCASTS = `${BASE_URL}/us/rss/toppodcasts/limit=100/genre=1310/json`
const PODCAST_DETAIL = `${BASE_URL}/lookup?id={id}&media=podcast
&entity=podcastEpisode&limit=20`
