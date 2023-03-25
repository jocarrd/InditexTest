import { useEffect, useState } from 'react'
import { Services } from '../services/Services'
import { Podcast } from '../types'

export const usePodcasts = () => {
  const [loading, setLoading] = useState(false)
  const [podcasts, setPodcasts] = useState<Podcast[]>(() =>
    JSON.parse(localStorage.getItem('podcasts') as string)
  )

  useEffect(() => {
    if (!podcasts) {
      setLoading(true)
      Services.getMainPodcasts().then((podcasts) => {
        setPodcasts(podcasts.feed.entry)
        setLoading(false)
        localStorage.setItem('podcasts', JSON.stringify(podcasts.feed.entry))
      })
    }
  }, [])
  return { state: { loading, podcasts }, actions: {} }
}
