import { useState, useEffect } from 'react'

interface Pokemon {
  name: string
}

const FetchContainer: React.FC = () => {

  const [data, setData] = useState<Pokemon[]>([])

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=151')
      const data = await res.json()
      setData(data.results)
    }
    fetchData()
  }, [])


  return (
    <main className='flex flex-wrap capitalize flex-col justify-center w-full h-full items-center'>
      {
        data.map((pokemon: Pokemon) => (
          <h2 key={pokemon.name}>{pokemon.name}</h2>
        ))
      }
    </main>
  )
}

export default FetchContainer