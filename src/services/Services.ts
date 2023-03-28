import { Podcast } from '../types/Podcast'
import { PodcastDetail } from '../types/PodcastDetail'
import { MAIN_PODCASTS, PODCAST_DETAIL } from './endpoints'

export const Services = {
  getMainPodcasts: (): Promise<Podcast[]> =>
    new Promise((resolve, reject) => {
      fetch(MAIN_PODCASTS)
        .then((response) => response.json())
        .then((response) => resolve(response.feed.entry))
        .catch(reject)
    }),
  getPodcastDetail: (id: string): Promise<PodcastDetail> =>
    new Promise((resolve, reject) => {
      fetch(PODCAST_DETAIL.replace('{id}', id))
        .then((response) => resolve(response.json()))
        .catch(reject)
    }),
}
