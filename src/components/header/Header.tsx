import { Link } from 'react-router-dom'
import '../../assets/fonts/fonts.css'
import styles from './Header.module.css'

export const Header = (): React.JSX.Element => {
  return (
    <>
      <header className={`flex justify-center border border-solid bg-red-600 ${styles.header}`}>
        <Link to={'/'}>
          <h1 className='m-5 text-5xl'>PokéFetch</h1>
        </Link>
      </header>
    </>
  )
}
