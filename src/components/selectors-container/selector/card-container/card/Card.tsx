import { useState, useEffect } from 'react'
import { Sprite } from './sprite/Sprite'
import { Moveset } from './moveset/Moveset'
import { TypesInterface } from '../../../../../types'
import { DataInterface } from '../../../../../types'
import styles from './Card.module.css'

export const Card = ({ types, stats, name, height, weight, sprites, moves }: DataInterface) => {

  const [pokemonType, setPokemonType] = useState<TypesInterface>()

  useEffect(() => {
    const typeCheck = async (): Promise<void> => {
      const res = await fetch('types.json')
      const typesData = await res.json()
      const type = typesData.types.find((type: any) => type.type === types[0].type.name)
      setPokemonType(type)
    }

    typeCheck()
  }, [])

  return (
    <div className={`border-yellow-300 border-solid rounded-3xl my-1 ${styles.card}`} style={pokemonType && { backgroundColor: pokemonType.color }}>

      {/* Header */}
      <div className={`flex text-xl justify-between mt-6 mx-6 ${styles.header}`}>
        <span className='capitalize font-semibold'>{name}</span>
        <span className='text-red-600 font-medium'>{stats[0].base_stat} HP</span>
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
      <div className='bg-yellow-500 h-5 my-1 text-center mx-11 rounded capitalize text-sm'>
        {(types[0].type.name)} Pokémon / {height * 10}cm. / {(weight / 10).toLocaleString()}kg.
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
      <div className='text-xs'>
        Weakness: {pokemonType && pokemonType.weakness}
      </div>

    </div>
  )
}
