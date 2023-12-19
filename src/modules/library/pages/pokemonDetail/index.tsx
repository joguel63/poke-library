import { Navbar } from 'modules/library/components'
import { useParams } from 'react-router-dom'

import { getById } from 'modules/library/services/pokedex'
import { Card } from 'core/components'

import './styles.css'

export const PokemonDetail: React.FC = () => {
  const { id } = useParams()

  const pokemon = getById(Number(id))

  console.log(pokemon)

  if (!pokemon) return <></>

  return (
    <div>
      <Navbar />

      <Card className="detail_page_info_card">
        <img src={pokemon.url_imagen} alt={pokemon.nombre} />
        <span>{pokemon.nombre}</span>

        <div className="detail_page_info_card_types">
          {pokemon.tipos.map((type) => (
            <span key={type}>{type}</span>
          ))}
        </div>

        <div className="detail_page_info_card_description">
          <span>{pokemon.descripcion}</span>
        </div>
      </Card>
    </div>
  )
}
