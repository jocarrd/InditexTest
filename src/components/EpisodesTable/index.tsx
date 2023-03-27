import { Link } from 'react-router-dom'
import { convertTime, formatDate } from '../../helpers/utils'
import { PodcastDetail } from '../../types/PodcastDetail'

type EpisodeTableProps = {
  podcast: PodcastDetail['results']
  id: string
}

export const EpisodesTable = ({ podcast, id }: EpisodeTableProps) => {
  return (
    <table className="border-collapse w-full ">
      <thead>
        <tr>
          <th className="border">Title</th>
          <th className="border">Date</th>
          <th className="border">Duration</th>
        </tr>
      </thead>
      <tbody>
        {podcast.map((podcast) => (
          <tr
            className="odd:bg-white even:bg-gray-100 h-12"
            key={podcast.trackId}
          >
            <td className="border text-blue-700">
              <Link to={`/podcast/${id}/episode/${podcast.episodeGuid}`}>
                {podcast.trackName}
              </Link>
            </td>
            <td className="border">
              {formatDate(podcast.releaseDate.toString())}
            </td>
            <td className="border">{convertTime(podcast.trackTimeMillis)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
