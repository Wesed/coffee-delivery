import { Trash } from 'phosphor-react'
import { QtdItem } from '../../components/Products/qtdItem'
import { FormatPrice } from '../../components/useful/formatPrice'
import { useContext } from 'react'
import { CoffeeContext } from '../../contexts/CoffeeContext'

export interface itemProps {
  id: string
  image: string
  title: string
  price: number
  qtdProd: number
}

export function Item({ id, image, title, price, qtdProd = 1 }: itemProps) {
  const { updatedQtdOrder, removeOrder } = useContext(CoffeeContext)

  const catchValue = (qtd: number) => {
    updatedQtdOrder(id, qtd)
  }

  return (
    <div className="flex justify-between border-b pb-6">
      <div className="flex items-center gap-5">
        <img src={image} alt="café escolhido" className="h-16 w-16" />
        <div className="flex flex-col gap-2">
          <span className="text-base text-base_subtitle">{title}</span>
          <div className="flex gap-2">
            <QtdItem catchValue={catchValue} qtdProd={qtdProd} />
            <button
              onClick={() => {
                removeOrder(id)
              }}
              className="flex items-center gap-1 rounded-md bg-base_button p-2 text-xs uppercase text-base_text transition hover:bg-base_hover"
            >
              <Trash size={22} className="text-purple" />
              remover
            </button>
          </div>
        </div>
      </div>
      <span className="text-base font-bold text-base_text">
        R$ {FormatPrice(price * qtdProd)}
      </span>
    </div>
  )
}
