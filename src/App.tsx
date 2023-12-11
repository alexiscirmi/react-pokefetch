import {
  createHashRouter,
  RouterProvider
} from 'react-router-dom'
import { Root } from './routes/root'
import { SelectorsContainerRoute } from './routes/selectors-container-route'
import { CardContainerRoute } from './routes/card-container-route'
import './App.css'

export const App = () => {
  const router = createHashRouter([
    {
      path: '/',
      element: <Root />,
      children: [
        {
          path: '/',
          element: <SelectorsContainerRoute />
        },
        {
          path: '/:num',
          element: <CardContainerRoute />
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
