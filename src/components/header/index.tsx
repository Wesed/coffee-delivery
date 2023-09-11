import { MapPin, ShoppingCart } from 'phosphor-react'
import { Logo } from './logo'
import { useContext } from 'react'
import { CoffeeContext } from '../../contexts/CoffeeContext'

export function Header() {
  const { orders, checkoutData } = useContext(CoffeeContext)
  const { city, state } = checkoutData
  const cartQtd = orders.length

  return (
    <div className="flex justify-between px-40 py-8">
      <Logo />
      <nav className="flex gap-3">
        {checkoutData && (
          <span className="flex items-center justify-center gap-1 rounded-md bg-purple_light p-2">
            <MapPin size={22} weight="fill" className="fill-purple" />
            <span className="text-sm capitalize text-purple_dark">
              {city}, {state}
            </span>
          </span>
        )}
        <a href="/checkout" className="relative rounded-md bg-yellow_light p-2">
          <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-yellow_dark text-xs font-bold text-white">
            {cartQtd}
          </span>
          <span>
            <ShoppingCart
              size={22}
              weight="fill"
              className="fill-yellow_dark"
            />
          </span>
        </a>
      </nav>
    </div>
  )
}
