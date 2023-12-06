import '../../assets/fonts/fonts.css'
import styles from './header.module.css'

export default function Header() {
  return (
    <header className={`flex justify-center border border-solid bg-red-600 ${styles.header}`}>
      <h1 className='m-5 text-5xl '>PokéFetch</h1>
    </header>
  )
}