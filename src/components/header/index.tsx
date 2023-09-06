import { MapPin, ShoppingCart } from 'phosphor-react'
import { Logo } from './logo'
import { useContext, useEffect, useState } from 'react'
import { CoffeeContext } from '../../contexts/CoffeeContext'

export function Header() {
  const [cartQtd, setCartQtd] = useState(0)
  useEffect(() => {
    const ifStorageExists = localStorage.getItem('order')
    if (ifStorageExists) {
      setCartQtd(JSON.parse(ifStorageExists).length)
    }
  }, [])
  return (
    <div className="flex justify-between px-40 py-8">
      <Logo />
      <nav className="flex gap-3">
        <span className="flex items-center justify-center gap-1 rounded-md bg-purple_light p-2">
          <MapPin size={22} weight="fill" className="fill-purple" />
          <span className="text-sm text-purple_dark">Porto Alegre, RS</span>
        </span>
        <button className="relative rounded-md bg-yellow_light p-2">
          <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-yellow_dark text-xs font-bold text-white">
            {cartQtd}
          </span>
          <a href="/checkout">
            <ShoppingCart
              size={22}
              weight="fill"
              className="fill-yellow_dark"
            />
          </a>
        </button>
      </nav>
    </div>
  )
}
