import { Link } from 'react-router-dom'
import { convertTime, formatDate } from '../../helpers/utils'
import { PodcastDetail } from '../../types/PodcastDetail'

type EpisodeTableProps = {
  episodes: PodcastDetail['results']
  id: string
}

export const EpisodesTable = ({ episodes, id }: EpisodeTableProps) => {
  return (
    <table className="border-separate w-full ">
      <thead>
        <tr>
          <th className="border-b-2 text-left">Title</th>
          <th className="border-b-2 text-left">Date</th>
          <th className="border-b-2 text-left">Duration</th>
        </tr>
      </thead>
      <tbody>
        {episodes.map((episode) => (
          <tr
            className="odd:bg-white even:bg-gray-100 h-12 duration-300 hover:-translate-y-1"
            key={episode.trackId}
          >
            <td className="border-b-2 text-blue-700">
              <Link to={`/podcast/${id}/episode/${episode.episodeGuid}`}>
                {episode.trackName}
              </Link>
            </td>
            <td className="border-b-2">
              {formatDate(episode.releaseDate.toString())}
            </td>
            <td className="border-b-2">
              {convertTime(episode.trackTimeMillis)}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
