import { Header } from '../components/header/Header'
import { Outlet } from 'react-router-dom'

export const Root: React.FC = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}
