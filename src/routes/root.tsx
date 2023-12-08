import { Outlet } from 'react-router-dom'
import { Header } from '../components/header/Header'

export const Root = (): React.JSX.Element => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}
