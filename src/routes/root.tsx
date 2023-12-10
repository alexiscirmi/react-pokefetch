import { Header } from '../components/header/Header'
import { Outlet } from 'react-router-dom'

export const Root = (): React.JSX.Element => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}
