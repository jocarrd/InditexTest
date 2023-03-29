import { useCallback, useEffect, useState } from 'react'
import { revalidate } from '../helpers/utils'
import { Services } from '../services/Services'
import { PodcastDetail } from '../types/PodcastDetail'
import { usePodcasts } from './usePodcasts'

const EXPIRATION_TIME = 24 * 60 * 60 * 1000

type Props = {
  id: string
}

export const usePodcast = ({ id }: Props) => {
  const [loading, setLoading] = useState(false)
  const [episodes, setEpisodes] = useState<PodcastDetail>(
    () => JSON.parse(localStorage.getItem(id) as string)?.episodes
  )
  const {
    state: { podcasts, loading: loadingPodcasts },
  } = usePodcasts()

  useEffect(() => {
    const storedTime = JSON.parse(
      localStorage.getItem(id) as string
    )?.expiration

    if (!episodes || revalidate(EXPIRATION_TIME, storedTime)) {
      setLoading(true)
      Services.getPodcastDetail(id).then((episodes) => {
        setEpisodes(episodes)
        setLoading(false)
        localStorage.setItem(
          id,
          JSON.stringify({
            episodes,
            expiration: Date.now().toString(),
          })
        )
      })
    }
  }, [])

  const podcastInfo = podcasts.find(
    (podcast) => podcast.id.attributes['im:id'] === id
  )

  const findEpisode = useCallback(
    (episodeId: string) => {
      return episodes?.results.find(
        (episode) => episode.episodeGuid === episodeId
      )
    },
    [episodes]
  )

  return {
    state: {
      loading: loading || loadingPodcasts,
      episodes,
      podcastInfo,
    },
    actions: { findEpisode },
  }
}
