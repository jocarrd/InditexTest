import { useEffect, useState } from 'react'
import { revalidate } from '../helpers/utils'
import { Services } from '../services/Services'
import { Podcast } from '../types/Podcast'

const EXPIRATION_TIME = 24 * 60 * 60 * 1000

export const usePodcasts = () => {
  const [loading, setLoading] = useState(false)
  const [podcasts, setPodcasts] = useState<Podcast[]>(
    () => JSON.parse(localStorage.getItem('podcasts') as string)?.podcasts
  )

  useEffect(() => {
    const storedTime = JSON.parse(
      localStorage.getItem('podcasts') as string
    )?.expiration

    if (!podcasts || revalidate(EXPIRATION_TIME, storedTime)) {
      console.log('Entra')
      setLoading(true)
      Services.getMainPodcasts().then((podcasts) => {
        setPodcasts(podcasts)
        setLoading(false)
        localStorage.setItem(
          'podcasts',
          JSON.stringify({ podcasts, expiration: Date.now().toString() })
        )
      })
    }
  }, [])

  const filterPodcasts = (podcasts: Podcast[]) => {
    setPodcasts(podcasts)
  }
  return { state: { loading, podcasts }, actions: { filterPodcasts } }
}
