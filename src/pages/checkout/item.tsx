import { Trash } from 'phosphor-react'
import { QtdItem } from '../../components/Products/qtdItem'
import { FormatPrice } from '../../components/useful/formatPrice'

export interface itemProps {
  image: string
  title: string
  price: number
}

export function Item({ image, title, price }: itemProps) {
  return (
    <div className="flex justify-between border-b pb-6">
      <div className="flex gap-5 items-center">
        <img src={image} alt="café escolhido" className="w-16 h-16" />
        <div className="flex flex-col gap-2">
          <span className="text-base_subtitle text-base">{title}</span>
          <div className="flex gap-2">
            <QtdItem />
            <button className="hover:bg-base_hover transition flex items-center gap-1 uppercase text-xs bg-base_button rounded-md p-2 text-base_text">
              <Trash size={22} className="text-purple" />
              remover
            </button>
          </div>
        </div>
      </div>
      <span className="font-bold text-base text-base_text">
        R$ {FormatPrice(price)}
      </span>
    </div>
  )
}
