import { useParams } from 'react-router-dom'
import { EpisodesTable } from '../../components/EpisodesTable'
import { usePodcast } from '../../hooks/usePodcast'

export const PodcastDetail = () => {
  const { id } = useParams()

  const {
    state: { podcast },
  } = usePodcast({ id })

  const episodes = podcast?.results.slice()
  episodes?.shift()

  return (
    <div className="md:grid md:grid-cols-3 flex flex-col px-9 gap-28">
      <div className="flex flex-col shadow-md  "></div>
      <div className="flex flex-col md:col-span-2 gap-8 ">
        <div className="p-2 shadow-md ">
          Episodes:
          {podcast?.resultCount}
        </div>
        <div className="p-2 flex shadow-md ">
          {episodes && <EpisodesTable podcast={episodes} id={id || ''} />}
        </div>
      </div>
    </div>
  )
}
