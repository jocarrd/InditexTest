import { Link } from 'react-router-dom'
import { Podcast } from '../../types/Podcast'

type PodcastCardProps = {
  podcast: Podcast
}

export const PodcastCard = ({ podcast }: PodcastCardProps) => {
  return (
    <Link to={`/podcast/${podcast.id.attributes['im:id']}`}>
      <div className="flex flex-col h-60 justify-center p-2 md:max-w-xl place-items-center shadow-md border-gray-300 duration-300 hover:-translate-y-1">
        <img
          className="rounded-full -translate-y-12"
          src={podcast['im:image'][2].label}
        />
        <div> {podcast.title.label}</div>
        <div>Author: {podcast['im:artist'].label}</div>
      </div>
    </Link>
  )
}
