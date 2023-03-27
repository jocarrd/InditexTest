import { createBrowserRouter } from 'react-router-dom'
import { Layout } from '../components/Layout'
import { Home } from '../pages/Home'
import { PodcastDetail } from '../pages/PodcastDetail'

const routes = [
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/podcast/:id',
        element: <PodcastDetail />,
      },
    ],
  },
]

export const router = createBrowserRouter(routes)
