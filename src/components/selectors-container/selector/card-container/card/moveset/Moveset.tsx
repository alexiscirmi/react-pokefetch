import { type MovesInt } from '../../../../../../types'

export const Moveset: React.FC<MovesInt> = ({
  moves,
  movesetPower,
  movesetEffect
}) => {
  return (
    <div className='flex flex-col h-15 mx-6 my-3'>
      <div className='flex justify-between pb-1 border-b-2 border-black'>
        <div>
          <h3 className='text-lg capitalize'>
            {moves[0].move.name.replace('-', ' ')}
          </h3>
          {movesetEffect[0].length + movesetEffect[1].length > 180 ? (
            movesetEffect[0].length > 250 ? (
              <p
                className='me-1 sm:me-2 text-justify'
                style={{ fontSize: '10px' }}
              >
                {movesetEffect[0].slice(0, 250) + '...'}
              </p>
            ) : (
              <p
                className='me-1 sm:me-2 text-justify'
                style={{ fontSize: '10px' }}
              >
                {movesetEffect[0]}
              </p>
            )
          ) : (
            <p className='text-xs me-2 text-justify'>{movesetEffect[0]}</p>
          )}
          {/* <p className='text-xs me-2 text-justify'>
            {movesetEffect[0].length > 120
              ? movesetEffect[0].slice(0, 120) + '...'
              : movesetEffect[0]
            }
          </p> */}
        </div>
        <span className='text-2xl'>{movesetPower[0] ?? 0}</span>
      </div>
      <div className='flex justify-between pt-1'>
        <div>
          <h3 className='text-lg capitalize'>
            {moves[1].move.name.replace('-', ' ')}
          </h3>
          {movesetEffect[0].length + movesetEffect[1].length > 180 ? (
            movesetEffect[1].length > 300 ? (
              <p
                className='me-1 sm:me-2 text-justify'
                style={{ fontSize: '10px' }}
              >
                {movesetEffect[1].slice(0, 300) + '...'}
              </p>
            ) : (
              <p
                className='me-1 sm:me-2 text-justify'
                style={{ fontSize: '10px' }}
              >
                {movesetEffect[1]}
              </p>
            )
          ) : (
            <p className='text-xs me-2 text-justify'>{movesetEffect[1]}</p>
          )}
        </div>
        <span className='text-2xl'>{movesetPower[1] ?? 0}</span>
      </div>
    </div>
  )
}
