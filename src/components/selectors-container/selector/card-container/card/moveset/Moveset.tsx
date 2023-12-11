import { useEffect, useState } from 'react'
import { DataInterface } from '../../../../../../types'

export const Moveset = ({ moves }: DataInterface) => {
  const [moveset, setMoveset] = useState()

  useEffect(() => {
    const fetchMoveset = async () => {
      const res = await fetch(moves[0].move.url)
      const move = await res.json()
      console.log(move)
      setMoveset(move.power)
    }
    fetchMoveset()
  }, [])

  return (
    <div className='h-15 justify-between mx-6 capitalize'>
      {(moves[0].move.name)}
    </div>
  )
}