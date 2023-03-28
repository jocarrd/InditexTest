import { Podcast } from '../../types/Podcast'

type PodcastDetailProps = {
  podcastInfo: Podcast
}

export const PodcastDetail = ({ podcastInfo }: PodcastDetailProps) => {
  return (
    <div className="flex flex-col lg:max-w-sm shadow-md gap-4 border-gray-100 border-2 h-fit p-8">
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
  )
}
