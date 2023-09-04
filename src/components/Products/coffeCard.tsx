import { ShoppingCartSimple, Plus, Minus } from 'phosphor-react'
import uuid from 'react-uuid'
import { QtdItem } from './qtdItem'

export interface coffeeCardProps {
  image: string
  title: string
  subtitle: string
  tags: string[]
}

export function CoffeCard({ image, title, subtitle, tags }: coffeeCardProps) {
  return (
    <div className="w-64 h-80 bg-base_card flex flex-col items-center justify-center rounded-coffeeCard p-5">
      <img src={image} alt="ilustração do cafe" className="-mt-16" />
      <div className="flex space-x-1">
        {tags.map((item) => (
          <span
            key={uuid()}
            className="bg-yellow_light text-yellow_dark text-xxs uppercase py-1 px-2 rounded-full font-bold mt-3"
          >
            {item}
          </span>
        ))}
      </div>
      <p className="font-serif text-base_title text-xl mt-4">{title}</p>
      <span className="text-base_label text-sm mt-2 w-52 text-center">
        {subtitle}
      </span>
      {/* footer */}
      <div className="flex items-center mt-8 gap-6">
        <span className="">
          R$ <span className="font-serif text-2xl text-base_text">9,90</span>
        </span>
        {/* price */}
        <div className="flex flex-1 gap-2">
          {/* qtd */}
          <QtdItem />
          <button className="bg-purple_dark p-2 rounded-md">
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
