import { BrowserRouter } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import Routes from './Routes'

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </CartProvider>
  )
}

export default App