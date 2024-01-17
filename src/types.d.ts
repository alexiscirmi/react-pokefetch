export interface ListInterface {
  num: number
  name: string
  url: string
}

export interface DataInterface {
  types: [
    {
      type: {
        name: string
      }
    }
  ]
  stats: [
    {
      base_stat: number
    }
  ]
  name: string
  height: number
  weight: number
  sprites: {
    other: {
      dream_world: {
        front_default: string
      }
    }
  }
  moves: [
    {
      move: {
        name: string
        url: string
      }
    },
    {
      move: {
        name: string
        url: string
      }
    }
  ]
  color: string
  weakness: string
}

export interface SpriteInt {
  sprites: {
    other: {
      dream_world: {
        front_default: string
      }
    }
  }
  name: string
}

export interface MoveInt {
  moves: [
    {
      move: {
        name: string
        url: string
      }
    },
    {
      move: {
        name: string
        url: string
      }
    }
  ]
}
