import { usePodcasts } from '../../hooks/usePodcasts'
import { PodcastCard } from '../../components/PodcastCard'
import { Podcast } from '../../types'
import { Searcher } from '../../components/Searcher'

export const Home = () => {
  const {
    state: { podcasts, loading },
    actions: { filterPodcasts },
  } = usePodcasts()

  console.log(podcasts)

  return (
    <div className="flex flex-col p-4 gap-36 ">
      <div className="flex gap-4 justify-end items-center">
        {podcasts?.length}
        <Searcher podcasts={podcasts} filterPodcasts={filterPodcasts} />
      </div>
      <div className="grid grid-flow-row grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8  gap-y-32">
        {!loading &&
          podcasts?.map((podcast: Podcast) => (
            <PodcastCard
              key={podcast.id.attributes['im:id']}
              podcast={podcast}
            />
          ))}
      </div>
    </div>
  )
}
