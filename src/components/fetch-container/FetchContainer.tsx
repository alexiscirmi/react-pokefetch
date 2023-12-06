import { useState, useEffect } from 'react'

interface Pokemon {
  name: string
  url: string
  sprite: Blob
}

const FetchContainer: React.FC = () => {

  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=151')
      const data = await res.json()
      setData(data.results)
    }
    fetchData()
  }, [])

  const fetchSprite = async (pokemon: Pokemon) => {
    const res = await fetch(pokemon.url)
    const data = await res.json()
    const resSprite = await fetch(data.sprites.front_default)
    const sprite = resSprite.blob
    return sprite
  }

  return (
    <main className='flex flex-wrap capitalize flex-col justify-center w-full h-full items-center'>
      {
        data.map((pokemon: Pokemon) => (
          <div key={pokemon.name} className='text-center'>
            {fetchSprite(pokemon)}
            <h2 >{pokemon.name}</h2>
          </div>
        ))
      }
    </main>
  )
}

export default FetchContainer