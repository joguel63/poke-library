import { Route, Routes } from 'react-router-dom'
import { AuthModule, LibraryModule } from 'modules'

export const AppRouterProvider = () => {
  return (
    <Routes>
      <Route path="/" element={<AuthModule />} />
      <Route path="/library/*" element={<LibraryModule />} />
    </Routes>
  )
}
