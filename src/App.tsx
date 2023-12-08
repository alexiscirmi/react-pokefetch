import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
import { Root } from './routes/root'
import { CardsContainerRoute } from './routes/cards-container-route'
import { DetailContainerRoute } from './routes/detail-container-route'
import { ErrorPage } from './ErrorPage'
import './App.css'

export const App = (): React.JSX.Element => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: '/react-pokefetch',
          element: <CardsContainerRoute />
        },
        {
          path: '/react-pokefetch/:num',
          element: <DetailContainerRoute />
        }
      ]
    }
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}
