import { Navigate, useParams } from 'react-router-dom'
import { EpisodesTable } from '../../components/EpisodesTable'
import { usePodcast } from '../../hooks/usePodcast'

export const PodcastDetail = () => {
  const { id = '' } = useParams()
  const {
    state: { episodes, podcastInfo },
  } = usePodcast({ id })

  if (!podcastInfo) return <Navigate to="/" />

  return (
    podcastInfo && (
      <div className="md:grid md:grid-cols-3 flex flex-col px-4 md:px-9 gap-28 py-4 ">
        <div className="flex transform transition duration-500 hover:scale-105 flex-col lg:max-w-sm shadow-md gap-4 border-gray-100 border-2 h-fit p-8">
          <img
            className="mx-auto  pb-4"
            height={250}
            width={250}
            src={podcastInfo?.['im:image'][2].label}
          />
          <hr />
          <div>
            <div>
              <b>{podcastInfo?.['im:name'].label}</b>
            </div>
            <em>{'by ' + podcastInfo?.['im:artist'].label}</em>
          </div>
          <hr />
          <div>Description</div>
          <div>{podcastInfo?.summary.label}</div>
        </div>
        <div className="flex flex-col md:col-span-2 gap-8 ">
          <div className="p-2 shadow-md text-xl border-gray-100 border-2 ">
            <b>{`Episodes: ${episodes?.resultCount}`}</b>
          </div>
          <div className="p-2 flex shadow-md border-gray-100 border-2 ">
            {episodes && (
              <EpisodesTable podcast={episodes.results} id={id || ''} />
            )}
          </div>
        </div>
      </div>
    )
  )
}
