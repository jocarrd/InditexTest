import { useEffect, useState } from 'react'
import { Services } from '../services/Services'

export const usePodcasts = () => {
  const [loading, setLoading] = useState(false)
  const [podcasts, setPodcasts] = useState(
    JSON.parse(localStorage.getItem('podcasts'))
  )

  useEffect(() => {
    if (!podcasts) {
      setLoading(true)
      Services.getMainPodcasts().then((podcasts) => {
        setPodcasts(podcasts)
        setLoading(false)
        localStorage.setItem('podcasts', JSON.stringify(podcasts.feed.entry))
      })
    }
  }, [])
  return { state: { loading, podcasts }, actions: {} }
}
