import React, { useEffect, useState } from 'react'
import { Card } from './card/Card'
import { type PokemonInt } from '../../types'

export const CardsContainer = (): React.JSX.Element => {
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      const res = await fetch('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=151')
      const data = await res.json()
      setData(data.results)
    }

    void fetchData()
  }, [])

  return (
    <main className='flex flex-wrap capitalize justify-around w-full h-full items-center my-4'>
      {
        data.map((pokemon: PokemonInt, index: number) => (
          <Card key={pokemon.name} name={pokemon.name} url={pokemon.url} num={index + 1} />
        ))
      }
    </main>
  )
}
