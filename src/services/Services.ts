import { MAIN_PODCASTS, PODCAST_DETAIL } from './endpoints'

export const Services = {
  getMainPodcasts: () => {
    return fetch(MAIN_PODCASTS).then((response) => response.json())
  },
  getPodcastDetail: (id: string) => {
    return fetch(PODCAST_DETAIL.replace('{id}', id)).then((response) =>
      response.json()
    )
  },
}
