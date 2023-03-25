import { usePodcasts } from '../../hooks/usePodcasts'
import { PodcastCard } from '../../components/PodcastCard'
import { Podcast } from '../../types'

export const Home = () => {
  const {
    state: { podcasts, loading },
  } = usePodcasts()

  console.log(podcasts)

  return (
    <div className="grid grid-flow-row grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8  gap-y-32">
      {!loading &&
        podcasts?.map((podcast: Podcast) => <PodcastCard podcast={podcast} />)}
    </div>
  )
}
