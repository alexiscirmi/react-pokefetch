import { useState } from 'react'
import styles from './Card.module.css'

export const Card = ({ data }: any) => {

  const [isSpriteLoaded, setIsSpriteLoaded] = useState(false)

  const handleSpriteLoad = () => {
    setIsSpriteLoaded(true)
  }

  const typeCheck = () => {
    switch (data.types[0].type.name) {
      case 'grass':
        return '#58D68D'
      case 'poison':
        return '#58D68D'
      case 'bug':
        return '#58D68D'
      case 'fire':
        return '#EC7063'
      case 'water':
        return '#85C1E9'
      case 'ice':
        return '#85C1E9'
      case 'normal':
        return '#EAEDED'
      case 'dragon':
        return '#EAEDED'
      case 'electric':
        return '#F9E79F'
      case 'ground':
        return '#DC7633'
      case 'rock':
        return '#DC7633'
      case 'fighting':
        return '#DC7633'
      case 'psychic':
        return '#A569BD'
      case 'ghost':
        return '#A569BD'
      default:
        break;
    }
  }

  return (
    <div className={`border-yellow-300 border-solid rounded-3xl my-1 ${styles.card}`} style={{ backgroundColor: typeCheck() }}>

      {/* Header */}
      <div className={`flex text-xl justify-between mt-6 mx-6 ${styles.header}`}>
        <span className='capitalize font-semibold'>{data.name}</span>
        <span className='text-red-600 font-medium'>{data.stats[0].base_stat} HP</span>
      </div>

      {/* Sprite */}
      <div className='border-yellow-400 border-solid border-4 mx-6 h-52 flex justify-center items-center backdrop-grayscale backdrop-opacity-50'>
        {!isSpriteLoaded && <div className={`animate-pulse ${styles.placeholder}`} />}
        <img
          src={data.sprites.other.dream_world.front_default}
          alt={data.name}
          className='h-full p-2'
          onLoad={handleSpriteLoad}
          style={{ display: isSpriteLoaded ? 'block' : 'none' }}
        />
      </div>

      {/* Description */}
      <div className='bg-yellow-500 h-5 my-1 text-center mx-11 rounded capitalize text-sm'>
        {(data.types[0].type.name)} Pokémon / {data.height * 10}cm. / {(data.weight / 10).toLocaleString()}kg.
      </div>

    </div>
  )
}
