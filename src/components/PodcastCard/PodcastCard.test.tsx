import { render, screen } from '@testing-library/react'
import { PodcastCard } from '.'
import { mockPodcast } from '../../mocks'
import { BrowserRouter } from 'react-router-dom'

describe('PodcastCard', async () => {
  it('renders the podcast card', () => {
    render(
      <BrowserRouter>
        <PodcastCard podcast={mockPodcast} />
      </BrowserRouter>
    )

    const podcastTitle = screen.getByText(mockPodcast.title.label)
    expect(podcastTitle)

    const podcastAuthor = screen.getByText(
      `Author: ${mockPodcast['im:artist'].label}`
    )
    expect(podcastAuthor)

    const podcastImage = screen.getByAltText(`${mockPodcast.title.label} image`)
    expect(podcastImage)
  })
})
