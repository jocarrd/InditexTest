import React from 'react'

export const PodcastCard = ({ podcast }) => {
  return (
    <div className="flex flex-col md:max-w-lg place-items-center shadow-md border-gray-300 duration-300 hover:-translate-y-1">
      <img
        className="rounded-full -translate-y-12"
        src={podcast['im:image'][2].label}
      />
      <div> {podcast.title.label}</div>
      <div>Author: {podcast['im:artist'].label}</div>
    </div>
  )
}
