import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { type PokemonInt } from '../../../types'

export const Card = ({ name, url, num }: PokemonInt): React.JSX.Element => {
  const [sprite, setSprite] = useState<string | null>(null)

  useEffect(() => {
    const fetchSprite = async (): Promise<void> => {
      const res = await fetch(url)
      const data = await res.json()
      const sprite = data.sprites.front_default
      setSprite(sprite)
    }

    void fetchSprite()
  })

  return (
    <Link to={`${num}`}>
      <div className={'text-center border rounded-xl m-4 cursor-pointer transition-all duration-200 hover:scale-125'}>
        {(sprite !== null) && <img src={sprite} alt={name} />}
        <p className='text-sm'>#{num}</p>
        <h2 className='text-sm'>{name}</h2>
      </div >
    </Link>
  )
}
