import { ReactNode, createContext, useState } from 'react'

interface Order {
  id: string
  title: string
  qtd: number
  price: number
}

interface CoffeeContextProps {
  cartQtd: number
  newOrder: (order: Order) => void
  orders: Order[]
}

export const CoffeeContext = createContext({} as CoffeeContextProps)

interface CoffeeContextProviderProps {
  children: ReactNode
}

export function CoffeeContextProvider({
  children,
}: CoffeeContextProviderProps) {
  const [cartQtd, setCarQtd] = useState(0)
  const [orders, setOrders] = useState<Order[]>([])

  console.log(orders)

  const newOrder = (newOrder: Order) => {
    // console.log(order)
    setOrders((state) => [...state, newOrder])
    setCarQtd((state) => state + 1)
  }

  return (
    <CoffeeContext.Provider value={{ cartQtd, newOrder, orders }}>
      {children}
    </CoffeeContext.Provider>
  )
}
