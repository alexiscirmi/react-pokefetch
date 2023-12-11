import { useState } from 'react'
import { DataInterface } from '../../../../../../types'
import styles from './Sprite.module.css'

export const Sprite = ({ sprites, name }: DataInterface) => {
  const [isSpriteLoaded, setIsSpriteLoaded] = useState(false)

  const handleSpriteLoad = () => {
    setIsSpriteLoaded(true)
  }

  return (
    <div className='border-yellow-400 border-solid border-4 mx-6 h-52 flex justify-center items-center backdrop-grayscale backdrop-opacity-50'>
      {!isSpriteLoaded && <div className={`animate-pulse ${styles.placeholder}`} />}
      <img
        src={sprites.other.dream_world.front_default}
        alt={name}
        className='h-full p-2'
        onLoad={handleSpriteLoad}
        style={{ display: isSpriteLoaded ? 'block' : 'none' }}
      />
    </div>
  )
}