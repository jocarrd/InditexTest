import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import { Layout } from '../components/Layout'
import { Home } from '../pages/Home'

const routes = [
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
    ],
  },
]

export const router = createBrowserRouter(routes)
