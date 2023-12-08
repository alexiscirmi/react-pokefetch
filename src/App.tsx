import {
  createHashRouter,
  RouterProvider
} from 'react-router-dom'
import { Root } from './routes/root'
import { CardsContainerRoute } from './routes/cards-container-route'
import { DetailContainerRoute } from './routes/detail-container-route'
import './App.css'

export const App = (): React.JSX.Element => {
  const router = createHashRouter([
    {
      path: '/',
      element: <Root />,
      children: [
        {
          path: '/',
          element: <CardsContainerRoute />
        },
        {
          path: '/:num',
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
