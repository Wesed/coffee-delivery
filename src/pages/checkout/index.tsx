import { MapPin, CurrencyDollar, CreditCard, Bank, Money } from 'phosphor-react'
import { Input } from '../../components/input'
import { Item } from './item'
import { PaymentOption } from './paymentOption'
import uuid from 'react-uuid'
import { useContext, useEffect, useState } from 'react'
import { CoffeeContext } from '../../contexts/CoffeeContext'
import { FormatPrice } from '../../components/useful/formatPrice'
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { useNavigate } from 'react-router-dom'

const checkoutFormValidationSchema = zod.object({
  zipCode: zod
    .string()
    .min(8, 'CEP inválido. Ex: 00000-000')
    .regex(/^[0-9]{5}-[0-9]{3}$/, 'CEP inválido. Ex: 00000-000'),
  addressLine1: zod.string().min(10, 'Ops, o endereço não parece correto.'),
  house: zod
    .number({ invalid_type_error: 'Somente números são aceitos' })
    .min(1, 'Ops, confira o número.'),
  // como nao e obrigatorio, nao tem validacao
  addressLine2: zod.string(),
  neighborhood: zod.string().min(5, 'Verifique o bairro.'),
  city: zod.string().min(8, 'Por favor, não abrevie o nome. Ex: São Paulo'),
  state: zod.string().max(2, 'Informe somente a sigla do estado. Ex: SP'),
  paymentOption: zod.string({
    invalid_type_error: 'Escolha a forma de pagamento.',
  }),
})

// o zod gera uma 'interface' baseado no schema do formulario
type CheckoutFormData = zod.infer<typeof checkoutFormValidationSchema>

export function Checkout() {
  const newCheckoutForm = useForm<CheckoutFormData>({
    resolver: zodResolver(checkoutFormValidationSchema),
  })
  const { orders, dataToCheckout } = useContext(CoffeeContext)
  const [totalPurchase, setTotalPurchase] = useState(0)
  const navigate = useNavigate()

  useEffect(() => {
    if (orders.length > 0) {
      const total = orders.map((order) => {
        return order.price * order.qtd
      })

      setTotalPurchase(
        total.reduce((accumulator, currentValue) => accumulator + currentValue),
      )
    } else {
      setTotalPurchase(0)
    }
  }, [orders])

  const handleGetCheckout = (data: CheckoutFormData) => {
    const checkoutInfo = {
      zipCode: data.zipCode,
      addressLine1: data.addressLine1,
      house: data.house,
      addressLine2: data.addressLine2,
      neighborhood: data.neighborhood,
      city: data.city,
      state: data.state,
      paymentOption: data.paymentOption,
    }

    dataToCheckout(checkoutInfo)
    navigate('/finish')
  }

  const { handleSubmit, formState } = newCheckoutForm

  let methodPaymentMsgError = ''

  if (
    formState.errors.paymentOption &&
    formState.errors.paymentOption.message !== undefined
  ) {
    methodPaymentMsgError = formState.errors.paymentOption.message.toString()
  }

  return (
    <div className="mt-10 grid grid-cols-checkout gap-8 px-40 pr-48">
      {/* left container */}
      <div className="space-y-4">
        <p className="font-serif text-lg text-base_subtitle">
          Complete seu pedido
        </p>
        <FormProvider {...newCheckoutForm}>
          <form
            id="addressForm"
            onSubmit={handleSubmit(handleGetCheckout)}
            className="flex flex-col gap-3"
          >
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

              <div className="mt-8 grid grid-cols-6 gap-x-3 gap-y-4">
                <Input
                  name="zipCode"
                  type="text"
                  placeholder="CEP"
                  grid="col-span-2"
                  errors={formState.errors.zipCode}
                />
                <Input
                  type="text"
                  name="addressLine1"
                  placeholder="Rua"
                  grid="col-span-full"
                  errors={formState.errors.addressLine1}
                />
                <Input
                  type="number"
                  name="house"
                  placeholder="Número"
                  grid="col-span-2"
                  errors={formState.errors.house}
                  isNumber={true}
                />
                <Input
                  type="text"
                  name="addressLine2"
                  placeholder="Complemento (opcional)"
                  grid="col-span-4"
                  errors={formState.errors.addressLine2}
                />
                <Input
                  type="text"
                  name="neighborhood"
                  placeholder="Bairro"
                  grid="col-span-2"
                  errors={formState.errors.neighborhood}
                />
                <Input
                  type="text"
                  name="city"
                  placeholder="Cidade"
                  grid="col-span-3"
                  errors={formState.errors.city}
                />
                <Input
                  type="text"
                  name="state"
                  placeholder="UF"
                  grid="col-span-1"
                  errors={formState.errors.state}
                />
              </div>
            </div>
            {/* formas de pgto */}
            <div className="rounded-md bg-base_card p-10">
              <div className="flex gap-2">
                <CurrencyDollar size={22} className="text-purple" />
                <div className="flex flex-col">
                  <p className="text-base text-base_subtitle">Pagamento</p>
                  <p className="text-sm text-base_text">
                    O pagamento é feito na entrega. Escolha a forma que deseja
                    pagar
                  </p>
                </div>
              </div>
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
                <span className="text-xs  text-red-700">
                  {methodPaymentMsgError}
                </span>
              </div>
            </div>
          </form>
        </FormProvider>
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
          {orders.length > 0 ? (
            <div className="flex flex-col gap-3">
              <div className="flex justify-between text-sm text-base_text">
                <span className="">Total de itens</span>
                <span>R$ {FormatPrice(totalPurchase)}</span>
              </div>

              <div className="flex justify-between text-sm text-base_text">
                <span className="">Entrega</span>
                R$ 3,50
              </div>

              <div className="flex justify-between text-xl font-bold text-base_subtitle">
                <span className="">Total</span>
                <span>R$ {FormatPrice(totalPurchase + 3.5)}</span>
              </div>

              <input
                type="submit"
                form="addressForm"
                value="confirmar pedido"
                className="cursor-pointer rounded-md bg-yellow py-3 align-middle text-sm font-bold uppercase text-white transition hover:bg-yellow_dark"
              />
            </div>
          ) : (
            <div className="flex flex-col items-center gap-3 text-base_text ">
              <span className="">Ops, você ainda não tem pedidos!</span>
              <a
                href="/"
                className="text-sm font-bold uppercase text-yellow transition hover:text-yellow_dark"
              >
                Ver cafés
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
