import { Route, Routes } from 'react-router-dom'
import { PokemonDetail, PokemonList } from 'modules/library/pages'

export const AppRouterProvider = () => {
  return (
    <Routes>
      <Route path="/" element={<PokemonList />} />
      <Route path="/view/:id" element={<PokemonDetail />} />
    </Routes>
  )
}
