import { useState } from 'react'
import styles from './Card.module.css'

export const Card = ({ data }: any): React.JSX.Element => {

  const [isSpriteLoaded, setIsSpriteLoaded] = useState(false)

  const handleSpriteLoad = () => {
    setIsSpriteLoaded(true)
  }

  const typeCheck = () => {
    switch (data.types[0].type.name) {
      case 'grass':
        return 'greenyellow'
      case 'fire':
        return 'orangered'
      case 'water':
        return 'skyblue'
      case 'bug':
        return 'greenyellow'
      case 'normal':
        return 'oldlace'
      case 'poison':
        return 'greenyellow'
      case 'electric':
        return 'yellow'
      case 'ground':
        return 'goldenrod'
      case 'fighting':
        return 'goldenrod'
      case 'psychic':
        return 'purple'
      case 'rock':
        return 'goldenrod'
      case 'ice':
        return 'skyblue'
      case 'dragon':
        return 'oldlace'
      default:
        break;
    }
  }

  return (
    <div className={`border-yellow-400 border-solid rounded-3xl my-1 ${styles.card}`}>

      {/* Header */}
      <div className={`flex text-xl justify-between mt-6 mx-6 ${styles.header}`}>
        <span className='capitalize font-bold'>{data.name}</span>
        <span className='text-red-600'>{data.stats[0].base_stat} HP</span>
      </div>

      {/* Sprite */}
      <div className={`border-yellow-500 border-solid border-4 mx-6 h-52 flex justify-center items-center`} style={{ backgroundColor: typeCheck() }}>
        {!isSpriteLoaded && <div className={`animate-pulse ${styles.placeholder}`} />}
        <img
          src={data.sprites.other.dream_world.front_default}
          alt={data.name}
          className='h-full p-2'
          onLoad={handleSpriteLoad}
          style={{ display: isSpriteLoaded ? 'block' : 'none' }}
        />
      </div>

    </div>
  )
}
