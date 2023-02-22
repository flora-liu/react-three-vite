import { StrictMode } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Root from '~/pages/root'
import About from '~/pages/about'
import Error from '~/pages/error'
import Examples from '~/pages/examples'
import Example from '~/pages/example'
import Index from '~/pages/index'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        index: true,
        element: <Index />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/examples',
        element: <Examples />,
        children: [
          {
            path: '/examples/:id',
            element: <Example />,
          },
        ],
      },
    ],
  },
])

function App() {
  return (
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  )
}

export default App
