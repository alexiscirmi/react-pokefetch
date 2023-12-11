import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ListInterface } from '../../../types'
import styles from './Selector.module.css'

export const Selector = ({ name, url, num }: ListInterface) => {
  const [sprite, setSprite] = useState()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchSprite = async (): Promise<void> => {
      const res = await fetch(url)
      const data = await res.json()
      const sprite = data.sprites.front_default
      setSprite(sprite)
      setLoading(false)
    }

    fetchSprite()
  })

  return (
    <Link to={`${num}`}>
      <div className={'text-center border rounded-xl m-4 cursor-pointer transition-all duration-200 hover:scale-125'}>
        <div className={styles.imageContainer}>
          {
            loading
              ? <div className={`animate-pulse ${styles.placeholder}`} />
              : (sprite !== null) && <img src={sprite} alt={name} />
          }
        </div>
        <p className='text-sm'>#{num}</p>
        <h2 className='text-sm'>{name}</h2>
      </div>
    </Link>
  )
}
