import { MAIN_PODCASTS } from './endpoints'

export const Services = {
  getMainPodcasts: () => {
    return fetch(MAIN_PODCASTS).then((response) => response.json())
  },
}
