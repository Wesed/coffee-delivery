import { Header } from './components/header'
import { CoffeeContextProvider } from './contexts/CoffeeContext'
import './globals.css'
import { Checkout } from './pages/checkout/index'
import { FinishProcess } from './pages/finishProcess'
import { Home } from './pages/home'
import { Routes, Route, BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <CoffeeContextProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/finish" element={<FinishProcess />} />
        </Routes>
      </CoffeeContextProvider>
    </BrowserRouter>
  )
}

export default App
