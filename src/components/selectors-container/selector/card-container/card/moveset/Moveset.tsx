import { useEffect, useState } from 'react'
import { DataInterface } from '../../../../../../types'

export const Moveset = ({ moves }: DataInterface) => {
  const [moveset, setMoveset] = useState(['null', 'null'])

  useEffect(() => {
    const fetchMoveset = async () => {
      const res1 = await fetch(moves[0].move.url)
      const move1 = await res1.json()
      const res2 = await fetch(moves[1].move.url)
      const move2 = await res2.json()
      setMoveset([move1.power, move2.power])
    }

    fetchMoveset()
  }, [])

  return (
    <div className='flex flex-col h-15 mx-6 capitalize'>
      <div className='flex justify-between'>
        <span className='text-lg'>{(moves[0].move.name).replace('-', ' ')}</span>
        <span className='text-2xl'>{moveset[0]}</span>
      </div>
      <div className='flex justify-between'>
        <span className='text-lg'>{(moves[1].move.name).replace('-', ' ')}</span>
        <span className='text-2xl'>{moveset[1]}</span>
      </div>
    </div>
  )
}