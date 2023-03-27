import { Link } from 'react-router-dom'
import { convertTime, formatDate } from '../../helpers/utils'
import { PodcastDetail } from '../../types/PodcastDetail'

type EpisodeTableProps = {
  podcast: PodcastDetail['results']
  id: string
}

export const EpisodesTable = ({ podcast, id }: EpisodeTableProps) => {
  return (
    <table className="border-separate w-full ">
      <thead>
        <tr>
          <th className="border-b-2">Title</th>
          <th className="border-b-2">Date</th>
          <th className="border-b-2">Duration</th>
        </tr>
      </thead>
      <tbody>
        {podcast.map((podcast) => (
          <tr
            className="odd:bg-white even:bg-gray-100 h-12 duration-300 hover:-translate-y-1"
            key={podcast.trackId}
          >
            <td className="border-b-2 text-blue-700">
              <Link to={`/podcast/${id}/episode/${podcast.episodeGuid}`}>
                {podcast.trackName}
              </Link>
            </td>
            <td className="border-b-2">
              {formatDate(podcast.releaseDate.toString())}
            </td>
            <td className="border-b-2">
              {convertTime(podcast.trackTimeMillis)}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
