import { createBrowserRouter } from 'react-router-dom'
import { Episode } from '../pages/Episode'
import { Home } from '../pages/Home'
import { Podcast } from '../pages/Podcast'

const routes = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/podcast/:id',
    element: <Podcast />,
  },
  {
    path: '/podcast/:podcastid/episode/:episodeid',
    element: <Episode />,
  },
]

export const router = createBrowserRouter(routes)
