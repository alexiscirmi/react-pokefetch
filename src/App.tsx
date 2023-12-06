import { Header } from './components/header/Header'
import { PokemonsContainer } from './components/pokemons-container/PokemonsContainer'
import './App.css'

export const App = (): React.JSX.Element => {
  return (
    <>
      <Header />
      <PokemonsContainer />
    </>
  )
}
