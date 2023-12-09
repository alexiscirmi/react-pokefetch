import styles from './Card.module.css'

export const Card = ({ data }: any): React.JSX.Element => {
  return (
    <div className={`border-yellow-400 border-solid rounded-3xl ${styles.card}`}>

      {/* Header */}
      <div className={`flex text-xl justify-between mt-6 mx-6 ${styles.header}`}>
        <span className='capitalize font-bold'>{data.name}</span>
        <span className='text-red-600'>{data.stats[0].base_stat} HP</span>
      </div>

      {/* Image */}
      <div className='border-yellow-500 border-solid border-4 mx-6 h-52 flex justify-center'>
        <img src={data.sprites.other.dream_world.front_default} alt={data.name} className='h-full'/>
      </div>
    </div>
  )
}
