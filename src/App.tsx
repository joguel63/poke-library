import { AppRouterProvider } from 'core/routes'
import { BrowserRouter } from 'react-router-dom'
import 'core/styles/global.css'

function App() {
  return (
    <BrowserRouter basename="/">
      <AppRouterProvider />
    </BrowserRouter>
  )
}

export default App
