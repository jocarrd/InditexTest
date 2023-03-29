import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { mockEpisodes } from '../../mocks'
import { EpisodesTable } from '.'
import { convertTime, formatDate } from '../../helpers/utils'

describe('EpisodesTable component', () => {
  it('should render a table with episodes data', () => {
    render(
      <BrowserRouter>
        <EpisodesTable episodes={mockEpisodes} id="123" />
      </BrowserRouter>
    )

    mockEpisodes.forEach((episode) => {
      const episodeTitle = screen.getByRole('link', { name: episode.trackName })
      const episodeDate = screen.getByText(
        formatDate(episode.releaseDate.toString())
      )
      const episodeDuration = screen.getByText(
        convertTime(episode.trackTimeMillis)
      )

      expect(episodeTitle).toBeInTheDocument()
      expect(episodeDate).toBeInTheDocument()
      expect(episodeDuration).toBeInTheDocument()
    })
  })
})
