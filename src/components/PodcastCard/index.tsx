import { Link } from 'react-router-dom'
import { Podcast } from '../../types/Podcast'

type PodcastCardProps = {
  podcast: Podcast
}

export const PodcastCard = ({ podcast }: PodcastCardProps) => {
  return (
    <Link to={`/podcast/${podcast.id.attributes['im:id']}`}>
      <div className="flex flex-col h-64 justify-center p-2 md:max-w-xl place-items-center shadow-md border-gray-300 duration-300 hover:-translate-y-1">
        <img
          alt={`${podcast.title.label} image`}
          className="rounded-full -translate-y-12"
          src={podcast['im:image'][2].label}
        />
        <p className="font-semibold "> {podcast['im:name'].label}</p>
        <p className="font-light">Author: {podcast['im:artist'].label}</p>
      </div>
    </Link>
  )
}
