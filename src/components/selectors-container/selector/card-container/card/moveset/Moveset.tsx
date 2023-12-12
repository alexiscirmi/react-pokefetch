import { useEffect, useState } from 'react'
import { DataInterface } from '../../../../../../types'

export const Moveset = ({ moves }: DataInterface) => {
  const [movesetPower, setMovesetPower] = useState([0, 0])
  const [movesetEffect, setMovesetEffect] = useState([null, null])

  useEffect(() => {
    const fetchMoveset = async () => {
      const res1 = await fetch(moves[0].move.url)
      const move1 = await res1.json()
      const power1 = move1.power
      const effect1 = move1.effect_entries[0].effect.replace('$effect_chance', move1.effect_chance)
      const res2 = await fetch(moves[1].move.url)
      const move2 = await res2.json()
      const power2 = move2.power
      const effect2 = move2.effect_entries[0].effect.replace('$effect_chance', move2.effect_chance)
      setMovesetPower([power1, power2])
      setMovesetEffect([effect1, effect2])
    }

    fetchMoveset()
  }, [])

  return (
    <div className='flex flex-col h-15 mx-6 my-3'>
      <div className='flex justify-between'>
        <div className='pb-1 border-b-2 border-black'>
          <h3 className='text-lg capitalize'>{(moves[0].move.name).replace('-', ' ')}</h3>
          <p className='text-xs me-2 text-justify'>{movesetEffect[0]}</p>
        </div>
        <span className='text-2xl'>{movesetPower[0]}</span>
      </div>
      <div className='flex justify-between'>
        <div className='pt-1'>
          <h3 className='text-lg capitalize'>{(moves[1].move.name).replace('-', ' ')}</h3>
          <p className='text-xs me-2 text-justify'>{movesetEffect[1]}</p>
        </div>
        <span className='text-2xl'>
          {movesetPower[1] !== null
            ? movesetPower[1]
            : 0
          }
        </span>
      </div>
    </div>
  )
}