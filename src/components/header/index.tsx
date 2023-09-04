import { MapPin, ShoppingCart } from 'phosphor-react'
import { Logo } from './logo'

export function Header() {
  return (
    <div className="flex justify-between py-8 bg-background px-40">
      <Logo />
      <nav className="flex gap-3">
        <span className="p-2 gap-1 flex items-center justify-center rounded-md bg-purple_light">
          <MapPin size={22} weight="fill" className="fill-purple" />
          <span className="text-purple_dark text-sm">Porto Alegre, RS</span>
        </span>
        <button className="bg-yellow_light p-2 rounded-md">
          <ShoppingCart size={22} weight="fill" className="fill-yellow_dark" />
        </button>
      </nav>
    </div>
  )
}
