import { MapPin, ShoppingCart } from 'phosphor-react'
import { Logo } from './components/header/logo'
import './globals.css'
import image from './assets/Imagem.png'
import { Items } from './components/Title/items'
import { CoffeeContainer } from './components/Products/coffeeContainer'

function App() {
  return (
    <div className="bg-background min-h-screen">
      {/* header */}
      <div className="flex justify-around p-8">
        <Logo />
        <nav className="flex gap-3">
          <span className="p-2 gap-1 flex items-center justify-center border rounded-md bg-purple_light">
            <MapPin size={22} weight="fill" className="fill-purple" />
            <span className="text-purple_dark text-sm">Porto Alegre, RS</span>
          </span>
          <button className="bg-yellow_light p-2 rounded-md">
            <ShoppingCart
              size={22}
              weight="fill"
              className="fill-yellow_dark"
            />
          </button>
        </nav>
      </div>
      <main>
        {/* title */}
        <div className="flex w-full py-24 gap-14 justify-center bg-cover bg-backgroundContainer">
          <div className="w-[600px]">
            <div className="flex flex-col gap-4">
              <h1 className="font-serif font-extrabold text-5xl text-base_title">
                Encontre o café perfeito para qualquer hora do dia
              </h1>
              <span className="text-xl text-base_subtitle">
                Com o Coffee Delivery você recebe seu café onde estiver, a
                qualquer hora
              </span>
            </div>
            <div className="py-16 flex flex-wrap gap-y-5 gap-x-10">
              <Items
                icon={
                  <ShoppingCart weight="fill" className="fill-background" />
                }
                text="Compra simples e segura"
                color="bg-yellow_dark"
              />
              <Items
                icon={
                  <ShoppingCart weight="fill" className="fill-background" />
                }
                text="Embalagem que mantém o café intacto"
                color="bg-base_text"
              />
              <Items
                icon={
                  <ShoppingCart weight="fill" className="fill-background" />
                }
                text="Entrega rápida e rastreada"
                color="bg-yellow"
              />
              <Items
                icon={
                  <ShoppingCart weight="fill" className="fill-background" />
                }
                text="O café chega fresquinho até você"
                color="bg-purple"
              />
            </div>
          </div>
          <img src={image} alt="foto de um café" />
        </div>
        {/* produtos */}
        <div className="px-36 pb-40">
          <h2 className="font-serif font-extrabold text-5xl text-base_title">
            Nossos cafés
          </h2>
          <CoffeeContainer />
        </div>
      </main>
    </div>
  )
}

export default App
