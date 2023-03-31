import { ChangeEvent, useEffect, useRef, useState } from 'react'
import { Podcast } from '../../types/Podcast'

type SearcherProps = {
  podcasts: Podcast[]
  filterPodcasts: (podcasts: Podcast[]) => void
}

export const Searcher = ({ podcasts, filterPodcasts }: SearcherProps) => {
  const [initialValue, setInitialValue] = useState<Podcast[]>()
  const ref = useRef<HTMLInputElement>(null)

  useEffect(() => {
    setInitialValue(podcasts)
    ref.current && ref.current.focus()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const search = e.target.value

    if (!search) {
      initialValue && filterPodcasts(initialValue)
      return
    }

    const filteredPodcasts = initialValue?.filter(
      ({ title, 'im:artist': artist }) => {
        const titleMatch = title.label
          .toString()
          .toUpperCase()
          .includes(search?.toUpperCase())

        const artistMatch = artist.label
          .toString()
          .toUpperCase()
          .includes(search?.toUpperCase())

        return titleMatch || artistMatch
      }
    )

    filteredPodcasts && filterPodcasts(filteredPodcasts)
  }

  return (
    <form id="searcherForm">
      <input
        ref={ref}
        onChange={handleChange}
        className="border-gray-300 border-2 p-2 "
        placeholder="Filter podcasts ..."
        type="search"
      />
    </form>
  )
}
