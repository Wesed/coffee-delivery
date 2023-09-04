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
        <button className="relative bg-yellow_light p-2 rounded-md">
          <span className="-top-2 -right-2 absolute w-5 h-5 rounded-full bg-yellow_dark text-xs text-white flex items-center justify-center font-bold">
            2
          </span>
          <ShoppingCart size={22} weight="fill" className="fill-yellow_dark" />
        </button>
      </nav>
    </div>
  )
}
