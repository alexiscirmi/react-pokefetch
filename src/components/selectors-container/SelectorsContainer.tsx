import { useEffect, useState } from 'react'
import { Selector } from './selector/Selector'
import { type ListInterface } from '../../types'

export const SelectorsContainer = () => {
  const [data, setData] = useState<ListInterface[]>([])

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=151'
      )
      const data = await res.json()
      const results: ListInterface[] = await data.results
      setData(results)
    }

    void fetchData()
  }, [])

  return (
    <main className='flex flex-wrap capitalize justify-around w-full h-full items-center my-4'>
      {data.map((pokemon: ListInterface, index: number) => (
        <Selector
          key={pokemon.name}
          name={pokemon.name}
          url={pokemon.url}
          num={index + 1}
        />
      ))}
    </main>
  )
}
