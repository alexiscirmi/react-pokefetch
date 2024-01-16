import { useState, useEffect } from 'react'
import { Sprite } from './sprite/Sprite'
import { Moveset } from './moveset/Moveset'
import { type TypeInterface, type DataInterface } from '../../../../../types'
import styles from './Card.module.css'

export const Card: React.FC<DataInterface> = ({
  types,
  stats,
  name,
  height,
  weight,
  sprites,
  moves
}) => {
  const [pokemonType, setPokemonType] = useState<TypeInterface | null>(null)

  useEffect(() => {
    const typeCheck = async (): Promise<void> => {
      try {
        const res = await fetch('types.json')
        const typesData = await res.json()
        const typesArray = await typesData.types
        const typeCard = types[0].type.name
        const typeData: TypeInterface = await typesArray.find(
          (typeObject: { key: string }) =>
            Object.keys(typeObject)[0] === typeCard
        )
        setPokemonType(typeData)
      } catch (error) {
        setPokemonType(null)
      }
    }

    void typeCheck()
  }, [])

  if (pokemonType != null) {
    return (
      <div
        className={`border-yellow-300 border-solid relative rounded-3xl my-1 ${styles.card}`}
        style={{ backgroundColor: Object.values(pokemonType)[0].color }}
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
        <Sprite
          sprites={sprites}
          name={name}
          types={types}
          stats={stats}
          height={height}
          weight={weight}
          moves={moves}
        />

        {/* Description */}
        <div className='bg-yellow-500 h-5 my-1 text-center mx-6 sm:mx-11 rounded capitalize text-xs sm:text-sm'>
          {types[0].type.name} Pokémon / {height * 10}cm. /{' '}
          {(weight / 10).toLocaleString()}kg.
        </div>

        {/* Moveset */}
        <Moveset
          moves={moves}
          types={types}
          stats={stats}
          name={name}
          height={height}
          weight={weight}
          sprites={sprites}
        />

        {/* Weakness */}
        <div className='text-xs mx-6 flex justify-center'>
          <div className='absolute bottom-2'>
            Weakness: {pokemonType?.weakness}
          </div>
        </div>
      </div>
    )
  }
}
