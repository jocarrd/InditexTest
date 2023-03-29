import { useParams } from 'react-router-dom'
import { PodcastDetail } from '../../components/PodcastDetail'
import { usePodcast } from '../../hooks/usePodcast'

export const Episode = () => {
  const { episodeid = '', podcastid } = useParams()
  const {
    state: { podcastInfo },
    actions: { findEpisode },
  } = usePodcast({ id: podcastid || '' })

  const episode = findEpisode(episodeid)
  return (
    <div className="lg:grid lg:grid-cols-3 px-4 flex flex-col py-4 md:px-9">
      {podcastInfo && <PodcastDetail podcastInfo={podcastInfo} />}
      {episode && (
        <div className="flex  flex-col md:col-span-2 gap-8 shadow-md border-gray-100 border-2 p-8 h-fit ">
          <h2 className="font-bold text-2xl">{episode?.trackName}</h2>
          <p className="italic">{episode?.description}</p>
          <hr />
          <audio controls className="w-full">
            <source src={episode?.previewUrl} type="audio/mpeg" />
          </audio>
        </div>
      )}
    </div>
  )
}
