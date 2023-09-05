import { MapPin, ShoppingCart } from 'phosphor-react'
import { Logo } from './logo'

export function Header() {
  return (
    <div className="flex justify-between bg- px-40 py-8">
      <Logo />
      <nav className="flex gap-3">
        <span className="flex items-center justify-center gap-1 rounded-md bg-purple_light p-2">
          <MapPin size={22} weight="fill" className="fill-purple" />
          <span className="text-sm text-purple_dark">Porto Alegre, RS</span>
        </span>
        <button className="relative rounded-md bg-yellow_light p-2">
          <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-yellow_dark text-xs font-bold text-white">
            2
          </span>
          <ShoppingCart size={22} weight="fill" className="fill-yellow_dark" />
        </button>
      </nav>
    </div>
  )
}
