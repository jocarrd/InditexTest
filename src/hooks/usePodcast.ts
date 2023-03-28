import { useCallback, useEffect, useState } from 'react'
import { Services } from '../services/Services'
import { PodcastDetail } from '../types/PodcastDetail'
import { usePodcasts } from './usePodcasts'

type Props = {
  id: string
}

export const usePodcast = ({ id }: Props) => {
  const [loading, setLoading] = useState(false)
  const [episodes, setEpisodes] = useState<PodcastDetail>()
  const {
    state: { podcasts },
  } = usePodcasts()
  const podcastInfo = podcasts.find(
    (podcast) => podcast.id.attributes['im:id'] === id
  )

  useEffect(() => {
    Services.getPodcastDetail(id).then((episodes) => {
      setEpisodes(episodes)
      setLoading(false)
    })
  }, [])

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
      loading,
      episodes,
      podcastInfo,
    },
    actions: { findEpisode },
  }
}
