import { ChangeEvent, useEffect, useRef, useState } from 'react'
import { Podcast } from '../../types'

type SearcherProps = {
  podcasts: Podcast[]
  filterPodcasts: (podcasts: Podcast[]) => void
}

export const Searcher = ({ podcasts, filterPodcasts }: SearcherProps) => {
  const [search, setSearch] = useState<string>('')
  const [initialValue, setInitialValue] = useState<Podcast[]>()
  const ref = useRef<HTMLInputElement>(null)

  useEffect(() => {
    setInitialValue(podcasts)
    ref.current && ref.current.focus()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (!search) {
      initialValue && filterPodcasts(initialValue)
      return
    }
    const filteredPodcasts = podcasts.filter(
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
    filterPodcasts(filteredPodcasts)
  }

  return (
    <form onSubmit={handleSubmit} id="searcherForm">
      <input
        ref={ref}
        value={search}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setSearch(e.target.value)
        }
        className="border-gray-300 border-2 p-2 "
        placeholder="Filter podcasts ..."
        type="search"
      />
    </form>
  )
}
