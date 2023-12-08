import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { type PokemonInt } from '../../../../types'

export const DetailContainer = (): React.JSX.Element => {
  const { num } = useParams()
  const [data, setData] = useState<PokemonInt | null>(null)

  useEffect(() => {
    const fetchInfo = async (): Promise<void> => {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${num}`)
      const data = await res.json()
      setData(data)
    }

    void fetchInfo()
  }, [])

  return (
    <>
      {(data !== null) && <div>hello {data.name}</div>}
    </>
  )
}
