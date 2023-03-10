import {randomUUID} from 'crypto'

/**
 * Generates and returns a random UUID.
 * @returns The random UUID generated.
 */
export const generateRandomUUID = (): string => {
  return randomUUID()
}

export const generateShortId = (): string => {
  let result = ''
  const characters = 'abcdefghijklmnopqrstuvwxyz0123456789'
  const charactersLength = characters.length
  for (let i = 0; i < 7; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength))
  }
  return result
}
