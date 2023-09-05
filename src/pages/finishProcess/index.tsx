import { MapPin, Timer, CurrencyDollar } from 'phosphor-react'
import { Info } from './info'
import illustration from '../../assets/Illustration.png'

export function FinishProcess() {
  return (
    <div className="grid grid-cols-2 items-end gap-24 px-40 py-20 ">
      {/* left container */}
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-1">
          <p className="font-serif text-finishTitle font-bold text-yellow_dark">
            Uhul! Pedido confirmado
          </p>
          <p className="text-xl text-base_subtitle">
            Agora é só aguardar que logo o café chegará até você
          </p>
        </div>
        {/* detail block */}
        <div className="flex flex-col gap-8 overflow-hidden rounded-coffeeCard bg-gradient-to-r from-yellow to-purple p-xxs text-base_text">
          <div className="flex h-full w-full flex-col gap-8 rounded-coffeeCard bg-background p-10">
            <div className="flex max-w-sm items-center gap-3">
              <span className="rounded-full bg-purple p-2">
                <MapPin size={16} weight="fill" className="fill-white" />
              </span>
              <span className="">
                Entrega em{' '}
                <span className="font-bold">
                  Rua João Daniel Martinelli, 102
                </span>{' '}
                Farrapos - Porto Alegre, RS
              </span>
            </div>

            <Info
              icon={<Timer size={16} weight="fill" className="fill-white" />}
              text="Previsão de entrega"
              importantText="20 min - 30 min"
              color="yellow"
            />
            <Info
              icon={
                <CurrencyDollar
                  size={16}
                  weight="fill"
                  className="fill-white"
                />
              }
              text="Pagamento na entrega"
              importantText="Cartão de Crédito"
              color="yellow_dark"
            />
          </div>
        </div>
      </div>
      {/* right container */}
      <div className="">
        <img src={illustration} alt="ilustração de um entregador" />
      </div>
    </div>
  )
}
