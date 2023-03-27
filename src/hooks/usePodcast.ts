import { useEffect, useState } from 'react'
import { Services } from '../services/Services'
import { PodcastDetail } from '../types/PodcastDetail'

type Props = {
  id: string
}

export const usePodcast = ({ id }: Props) => {
  const [loading, setLoading] = useState(false)
  const [podcast, setPodcast] = useState<PodcastDetail>()

  useEffect(() => {
    setLoading(true)
    Services.getPodcastDetail(id).then((podcasts) => {
      setPodcast(podcasts)
      setLoading(false)
    })
  }, [])

  return { state: { loading, podcast }, actions: {} }
}
