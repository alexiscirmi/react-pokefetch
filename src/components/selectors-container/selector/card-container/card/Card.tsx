import { Sprite } from './sprite/Sprite'
import { Moveset } from './moveset/Moveset'
import { type DataInt } from '../../../../../types'
import styles from './Card.module.css'

export const Card: React.FC<DataInt> = ({
  types,
  stats,
  name,
  height,
  weight,
  sprites,
  color,
  weakness,
  moves,
  movesetPower,
  movesetEffect
}) => {
  if (color !== undefined && weakness !== undefined) {
    return (
      <div
        className={`border-yellow-300 border-solid relative rounded-3xl my-1 ${styles.card}`}
        style={{
          backgroundColor: color
        }}
      >
        {/* Header */}
        <div
          className={`flex text-xl justify-between mt-6 mx-6 ${styles.header}`}
        >
          <h2 className='capitalize font-semibold'>{name}</h2>
          <span className='text-red-600 font-medium'>
            {stats[0].base_stat * 3} HP
          </span>
        </div>

        {/* Sprite */}
        <Sprite sprites={sprites} name={name} />

        {/* Description */}
        <div className='bg-yellow-500 h-5 my-1 text-center mx-6 sm:mx-11 rounded capitalize text-xs sm:text-sm'>
          {types[0].type.name} Pokémon / {height * 10}cm. /{' '}
          {(weight / 10).toLocaleString()}kg.
        </div>

        {/* Moveset */}
        <Moveset
          moves={moves}
          movesetPower={movesetPower}
          movesetEffect={movesetEffect}
        />

        {/* Weakness */}
        <div className='text-xs mx-6 flex justify-center'>
          <div className='absolute bottom-2'>Weakness: {weakness}</div>
        </div>
      </div>
    )
  }
}
