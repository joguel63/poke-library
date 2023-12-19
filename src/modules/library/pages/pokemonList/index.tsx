import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { getAll } from 'modules/library/services/pokedex'
import { Navbar, SearchInput } from 'modules/library/components'
import { Card } from 'core/components'

import './styles.css'
export const PokemonList: React.FC = () => {
  const { register, watch } = useForm<{ search: string }>()
  const navigate = useNavigate()
  const search = watch('search')
  const pokemonList = React.useMemo(() => {
    if (!search) return getAll()
    return getAll().filter(({ nombre }) =>
      nombre.toLowerCase().includes(search.toLowerCase().trim())
    )
  }, [search])

  const handleGoToPokemon = (id: number) => navigate(`/library/view/${id}`)

  return (
    <div>
      <Navbar className="list_page_navbar">
        <SearchInput placeholder="Buscar pokemon" {...register('search')} autoComplete='off' />
      </Navbar>

      <div className="list_page_info_container">
        {pokemonList.map((pokemon) => (
          <Card
            key={pokemon.id}
            className="list_page_info_card"
            onClick={() => handleGoToPokemon(pokemon.id)}
          >
            <img src={pokemon.url_imagen} alt={pokemon.nombre} />
            <span>{pokemon.nombre}</span>
          </Card>
        ))}
      </div>
    </div>
  )
}
