import { useEffect, useState } from 'react'
import { Services } from '../services/Services'
import { Podcast } from '../types'

export const usePodcasts = () => {
  const [loading, setLoading] = useState(false)
  const [podcasts, setPodcasts] = useState<Podcast[]>(() =>
    JSON.parse(localStorage.getItem('podcasts') as string)
  )

  useEffect(() => {
    const expirationTime = 24 * 60 * 60 * 1000
    const storedTime = localStorage.getItem('storedTime')
    const revalidate =
      storedTime && Date.now() - parseInt(storedTime, 10) > expirationTime

    if (!podcasts || revalidate) {
      setLoading(true)
      Services.getMainPodcasts().then((podcasts) => {
        setPodcasts(podcasts.feed.entry)
        setLoading(false)
        localStorage.setItem('podcasts', JSON.stringify(podcasts.feed.entry))
        localStorage.setItem('date', Date.now().toString())
      })
    }
  }, [])

  const filterPodcasts = (podcasts: Podcast[]) => {
    setPodcasts(podcasts)
  }
  return { state: { loading, podcasts }, actions: { filterPodcasts } }
}
