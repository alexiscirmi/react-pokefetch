import { useEffect, useState } from 'react'
import { Selector } from './selector/Selector'
import { ListInterface } from '../../types'

export const SelectorsContainer = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      const res = await fetch('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=151')
      const data = await res.json()
      const results = await data.results
      setData(results)
    }

    fetchData()
  }, [])

  return (
    <main className='flex flex-wrap capitalize justify-around w-full h-full items-center my-4'>
      {
        data.map((pokemon: ListInterface, index: number) => (
          <Selector key={pokemon.name} name={pokemon.name} url={pokemon.url} num={index + 1} />
        ))
      }
    </main>
  )
}
