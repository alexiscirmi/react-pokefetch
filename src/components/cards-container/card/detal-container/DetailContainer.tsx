import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { type PokemonInt } from '../../../../types'

export const DetailContainer = (): React.JSX.Element => {
  const { num } = useParams()
  const [data, setData] = useState<PokemonInt | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchInfo = async (): Promise<void> => {
      if (Number(num) < 152 && Number(num) > 0) {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${num}`)
        const data = await res.json()
        setData(data)
        setLoading(false)
      } else {
        setLoading(false)
      }
    }
    void fetchInfo()
  }, [])

  return (
    <main className='flex justify-center h-full items-center'>
      {loading
        ? (
           <svg xmlns='http://www.w3.org/2000/svg' width='32' height='32' fill='currentColor' className='bi bi-arrow-clockwise animate-spin' viewBox='0 0 16 16'>
            <path fillRule='evenodd' d='M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2z'/>
            <path d='M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466'/>
          </svg>
          )
        : (
            data !== null
              ? (<div>hello {data.name}</div>)
              : (<div>Please, choose a Pokémon from <Link to={'/'} className='text-red-600'>this list</Link></div>)
          )
        }
    </main>
  )
}
