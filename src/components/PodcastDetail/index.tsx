import { Link } from 'react-router-dom'
import { Podcast } from '../../types/Podcast'

type PodcastDetailProps = {
  podcastInfo: Podcast
}

export const PodcastDetail = ({ podcastInfo }: PodcastDetailProps) => {
  return (
    <div className="flex flex-col lg:max-w-sm shadow-md gap-4 border-gray-100 border-2 h-fit p-8">
      <Link to={`/podcast/${podcastInfo.id.attributes['im:id']}`}>
        <img
          alt={`${podcastInfo.title.label} image`}
          className="mx-auto  pb-4"
          height={250}
          width={250}
          src={podcastInfo?.['im:image'][2].label}
        />
      </Link>
      <hr />
      <div>
        <Link to={`/podcast/${podcastInfo.id.attributes['im:id']}`}>
          <p className="font-bold ">{podcastInfo?.['im:name'].label}</p>
          <p className="italic">{'by ' + podcastInfo?.['im:artist'].label}</p>
        </Link>
      </div>
      <hr />
      <p>Description</p>
      <p>{podcastInfo?.summary.label}</p>
    </div>
  )
}
