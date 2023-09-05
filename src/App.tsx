import { Header } from './components/header'
import './globals.css'
import { Checkout } from './pages/checkout/index'
import { FinishProcess } from './pages/finishProcess'
import { Home } from './pages/home'
import { Routes, Route, BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/finish" element={<FinishProcess />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
