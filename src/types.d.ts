export interface ListInterface {
  num: number
  name: string
  url: string
}

export interface DataInt {
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
  color: string
  weakness: string
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
  movesetPower: [number, number]
  movesetEffect: [string, string]
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

export interface MovesInt {
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
  movesetPower: [number, number]
  movesetEffect: [string, string]
}
