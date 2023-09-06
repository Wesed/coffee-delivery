import { MapPin, CurrencyDollar, CreditCard, Bank, Money } from 'phosphor-react'
import { Input } from '../../components/input'
import { Item } from './item'
import { PaymentOption } from './paymentOption'
import uuid from 'react-uuid'
import { useContext, useEffect, useState } from 'react'
import { CoffeeContext } from '../../contexts/CoffeeContext'
import { FormatPrice } from '../../components/useful/formatPrice'

export function Checkout() {
  const { orders } = useContext(CoffeeContext)
  const [totalPurchase, setTotalPurchase] = useState(0)

  useEffect(() => {
    if (orders) {
      const total = orders.map((order) => {
        return order.price * order.qtd
      })

      setTotalPurchase(
        total.reduce((accumulator, currentValue) => accumulator + currentValue),
      )
    }
  }, [orders])

  return (
    <div className="mt-10 grid grid-cols-checkout gap-8 px-40 pr-48">
      {/* left container */}
      <div className="flex flex-col space-y-4">
        <p className="font-serif text-lg text-base_subtitle">
          Complete seu pedido
        </p>
        {/* address container */}
        <div className="rounded-md bg-base_card p-10">
          <div className="flex gap-2">
            <MapPin size={22} className="text-yellow_dark" />
            <div className="flex flex-col">
              <p className="text-base text-base_subtitle">
                Endereço de Entrega
              </p>
              <p className="text-sm text-base_text">
                Informe o endereço onde deseja receber seu pedido
              </p>
            </div>
          </div>
          <form className="mt-8 grid grid-cols-6 gap-x-3 gap-y-4">
            <Input type="text " placeholder="CEP" grid="col-span-2" />
            <Input type="text" placeholder="Rua" grid="col-span-full " />
            <Input type="number" placeholder="Número" grid="col-span-2" />
            <Input
              type="text"
              placeholder="Complemento (opcional)"
              grid="col-span-4"
            />
            <Input type="text" placeholder="Bairro" grid="col-span-2" />
            <Input type="text" placeholder="Cidade" grid="col-span-3" />
            <Input type="text" placeholder="UF" grid="col-span-1" />
          </form>
        </div>
        {/* payment container */}
        <div className="rounded-md bg-base_card p-10">
          <div className="flex gap-2">
            <CurrencyDollar size={22} className="text-purple" />
            <div className="flex flex-col">
              <p className="text-base text-base_subtitle">Pagamento</p>
              <p className="text-sm text-base_text">
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </p>
            </div>
          </div>
          {/* formas de pgto */}
          <div className="mt-8 flex flex-wrap gap-3">
            <PaymentOption
              id={uuid()}
              icon={<CreditCard size={16} className="text-purple" />}
              typePayment="cartão de crédito"
            />

            <PaymentOption
              id={uuid()}
              icon={<Bank size={16} className="text-purple" />}
              typePayment="depósito bancário"
            />

            <PaymentOption
              id={uuid()}
              icon={<Money size={16} className="text-purple" />}
              typePayment="dinheiro"
            />
          </div>
        </div>
      </div>
      {/* right container */}
      <div className="flex flex-col space-y-4">
        <p className="font-serif text-lg text-base_subtitle">
          Cafés selecionado
        </p>
        <div className="flex flex-col gap-6 rounded-coffeeCard bg-base_card p-10">
          {orders.map((order) => (
            <Item
              key={order.id}
              id={order.id}
              image={order.image}
              title={order.title}
              price={order.price}
              qtdProd={order.qtd}
            />
          ))}
          {/* payment container */}
          <div className="flex flex-col gap-3">
            <div className="flex justify-between text-sm text-base_text">
              <span className="">Total de itens</span>
              <span>R$ 19,80</span>
            </div>

            <div className="flex justify-between text-sm text-base_text">
              <span className="">Entrega</span>
              R$ 3,50
            </div>

            <div className="flex justify-between text-xl font-bold text-base_subtitle">
              <span className="">Total</span>
              <span>R$ {FormatPrice(totalPurchase + 3.5)}</span>
            </div>
          </div>

          <button className="rounded-md bg-yellow py-3 align-middle text-sm font-bold uppercase text-white transition hover:bg-yellow_dark">
            confirmar pedido
          </button>
        </div>
      </div>
    </div>
  )
}
