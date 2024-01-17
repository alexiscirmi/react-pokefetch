import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { type DataInt } from '../../../../types'
import { Card } from './card/Card'

export const CardContainer: React.FC = () => {
  const { num } = useParams()
  const [data, setData] = useState<DataInt | undefined>(undefined)
  const [pokemonType, setPokemonType] = useState<DataInt | undefined>(undefined)
  const [movesetPower, setMovesetPower] = useState<DataInt['movesetPower']>([
    0, 0
  ])
  const [movesetEffect, setMovesetEffect] = useState<DataInt['movesetEffect']>([
    '',
    ''
  ])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (Number(num) < 152 && Number(num) > 0) {
      const fetchInfo = async (): Promise<void> => {
        // Pokémon general data fetch
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${num}`)
        const data: DataInt = await res.json()
        setData(data)

        // Pokémon type fetch
        const res1 = await fetch('types.json')
        const typesData = await res1.json()
        const typesArray = await typesData.types
        const typeCard = data.types[0].type.name
        const typeData: DataInt = await typesArray.find(
          (typeObject: { key: string }) =>
            Object.keys(typeObject)[0] === typeCard
        )
        setPokemonType(typeData)

        // Moveset fetch
        const res2 = await fetch(data.moves[0].move.url)
        const move1 = await res2.json()
        const power1 = await move1.power
        const effect1 = await move1.effect_entries[0].effect.replace(
          '$effect_chance',
          move1.effect_chance
        )
        const res3 = await fetch(data.moves[1].move.url)
        const move2 = await res3.json()
        const power2 = await move2.power
        const effect2 = await move2.effect_entries[0].effect.replace(
          '$effect_chance',
          move2.effect_chance
        )
        setMovesetPower([power1, power2])
        setMovesetEffect([effect1, effect2])
        setLoading(false)
      }

      void fetchInfo()
    } else {
      setLoading(false)
    }
  }, [num])

  return (
    <main className='flex justify-center h-full items-center'>
      {loading ? (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='32'
          height='32'
          fill='currentColor'
          className='bi bi-arrow-clockwise animate-spin'
          viewBox='0 0 16 16'
        >
          <path
            fillRule='evenodd'
            d='M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2z'
          />
          <path d='M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466' />
        </svg>
      ) : data !== undefined && pokemonType !== undefined ? (
        <Card
          types={data.types}
          stats={data.stats}
          name={data.name}
          height={data.height}
          weight={data.weight}
          sprites={data.sprites}
          color={Object.values(pokemonType)[0].color}
          weakness={Object.values(pokemonType)[0].weakness}
          moves={data.moves}
          movesetPower={movesetPower}
          movesetEffect={movesetEffect}
        />
      ) : (
        <div>
          Please, choose a Pokémon from{' '}
          <Link to={'/'} className='text-red-600'>
            this list
          </Link>
        </div>
      )}
    </main>
  )
}
