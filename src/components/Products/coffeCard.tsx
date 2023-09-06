import { ShoppingCartSimple } from 'phosphor-react'
import uuid from 'react-uuid'
import { QtdItem } from './qtdItem'
import { useContext, useState } from 'react'
import { CoffeeContext } from '../../contexts/CoffeeContext'
import { FormatPrice } from '../useful/formatPrice'

export interface coffeeCardProps {
  id: string
  image: string
  title: string
  subtitle: string
  tags: string[]
  price: number
}

export function CoffeCard({
  id,
  image,
  title,
  subtitle,
  tags,
  price,
}: coffeeCardProps) {
  const { newOrder } = useContext(CoffeeContext)
  const [qtd, setQtd] = useState(1)

  const increaseProd = () => {
    setQtd((state) => state + 1)
  }

  const decreaseProd = () => {
    qtd > 1 && setQtd((state) => state - 1)
  }

  const handleNewOrder = () => {
    const order = { id, image, title, price, qtd }
    newOrder(order)
    setQtd(1)
  }

  return (
    <div className="flex h-80 w-64 flex-col items-center justify-center rounded-coffeeCard bg-base_card p-5">
      <img src={image} alt="ilustração do cafe" className="-mt-16" />
      <div className="flex space-x-1">
        {tags.map((item) => (
          <span
            key={uuid()}
            className="mt-3 rounded-full bg-yellow_light px-2 py-1 text-xxs font-bold uppercase text-yellow_dark"
          >
            {item}
          </span>
        ))}
      </div>
      <p className="mt-4 font-serif text-xl text-base_title">{title}</p>
      <span className="mt-2 w-52 text-center text-sm text-base_label">
        {subtitle}
      </span>
      {/* footer */}
      <div className="mt-8 flex items-center gap-6">
        <span className="">
          R${' '}
          <span className="font-serif text-2xl text-base_text">
            {FormatPrice(price)}
          </span>
        </span>
        {/* price */}
        <div className="flex flex-1 gap-2">
          {/* qtd */}
          <QtdItem qtd={qtd} increase={increaseProd} decrease={decreaseProd} />
          <button
            onClick={handleNewOrder}
            className="rounded-md bg-purple p-2 transition hover:bg-purple_dark"
          >
            <ShoppingCartSimple
              weight="fill"
              size={22}
              className="fill-base_card"
            />
          </button>
        </div>
      </div>
    </div>
  )
}
