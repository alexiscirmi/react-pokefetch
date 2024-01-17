import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { type DataInterface } from '../../../../types'
import { Card } from './card/Card'

export const CardContainer: React.FC = () => {
  const { num } = useParams()
  const [data, setData] = useState<DataInterface | undefined>(undefined)
  const [pokemonType, setPokemonType] = useState<DataInterface | undefined>(
    undefined
  )
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (Number(num) < 152 && Number(num) > 0) {
      const fetchInfo = async (): Promise<void> => {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${num}`)
        const data: DataInterface = await res.json()
        setData(data)
        const res1 = await fetch('types.json')
        const typesData = await res1.json()
        const typesArray = await typesData.types
        const typeCard = data.types[0].type.name
        const typeData: DataInterface = await typesArray.find(
          (typeObject: { key: string }) =>
            Object.keys(typeObject)[0] === typeCard
        )
        setPokemonType(typeData)
        setLoading(false)
      }

      void fetchInfo()
    } else {
      setData(undefined)
      setPokemonType(undefined)
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
          moves={data.moves}
          color={Object.values(pokemonType)[0].color}
          weakness={Object.values(pokemonType)[0].weakness}
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
