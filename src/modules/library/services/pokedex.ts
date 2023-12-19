import pokedex from 'core/jsons/pokedex.json'
import { Pokemon } from '../types'

export const getAll = () => {
  return pokedex
}

export const getById = (id: number) => {
  return pokedex.find((pokemon: Pokemon) => pokemon.id === id)
}
