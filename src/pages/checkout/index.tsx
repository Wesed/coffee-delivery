import { MapPin, CurrencyDollar, CreditCard, Bank, Money } from 'phosphor-react'
import { Input } from '../../components/input'
import image from '../../assets/americano.png'
import image2 from '../../assets/capuccino.png'
import { Item } from './item'
import { PaymentOption } from './paymentOption'
import uuid from 'react-uuid'

export function Checkout() {
  return (
    <div className="mt-10 grid grid-cols-checkout px-40 pr-48 gap-8">
      {/* left container */}
      <div className="flex flex-col space-y-4">
        <p className="text-base_subtitle text-lg font-serif">
          Complete seu pedido
        </p>
        {/* address container */}
        <div className="p-10 bg-base_card rounded-md">
          <div className="flex gap-2">
            <MapPin size={22} className="text-yellow_dark" />
            <div className="flex flex-col">
              <p className="text-base_subtitle text-base">
                Endereço de Entrega
              </p>
              <p className="text-sm text-base_text">
                Informe o endereço onde deseja receber seu pedido
              </p>
            </div>
          </div>
          <form className="mt-8 grid grid-cols-6 gap-y-4 gap-x-3">
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
        <div className="bg-base_card rounded-md p-10">
          <div className="flex gap-2">
            <CurrencyDollar size={22} className="text-purple" />
            <div className="flex flex-col">
              <p className="text-base_subtitle text-base">Pagamento</p>
              <p className="text-sm text-base_text">
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </p>
            </div>
          </div>
          <div className="mt-8 flex gap-3">
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
        <p className="text-base_subtitle text-lg font-serif">
          Cafés selecionado
        </p>
        <div className="flex flex-col p-10 gap-6 bg-base_card rounded-coffeeCard">
          <Item image={image} title="Expresso Tradicional" price={9.9} />
          <Item image={image2} title="Capuccino" price={9.9} />
          {/* payment container */}
          <div className="flex flex-col gap-3">
            <div className="flex justify-between text-base_text text-sm">
              <span className="">Total de itens</span>
              R$ 19,80
            </div>

            <div className="flex justify-between text-base_text text-sm">
              <span className="">Entrega</span>
              R$ 3,50
            </div>

            <div className="flex justify-between text-base_subtitle text-xl font-bold">
              <span className="">Total</span>
              R$ 23,30
            </div>
          </div>

          <button className="hover:bg-yellow_dark transition py-3 font-bold uppercase rounded-md bg-yellow text-white text-sm align-middle">
            confirmar pedido
          </button>
        </div>
      </div>
    </div>
  )
}
