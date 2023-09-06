import { useContext } from 'react'
import { CoffeCard } from './coffeCard'
import uuid from 'react-uuid'
import { CoffeeContext } from '../../contexts/CoffeeContext'

export function CoffeeContainer() {
  const { url } = useContext(CoffeeContext)

  const coffeeArray = [
    {
      id: uuid(),
      slug: 'expresso',
      title: 'Expresso Tradicional',
      tags: ['Tradicional'],
      subtitle: 'O tradicional café feito com água quente e grãos moídos',
    },
    {
      id: uuid(),
      slug: 'americano',
      title: 'Expresso Americano',
      tags: ['Tradicional'],
      subtitle: 'Expresso diluído, menos intenso que o tradicional',
    },
    {
      id: uuid(),
      slug: 'expressoCremoso',
      title: 'Expresso Cremoso',
      tags: ['Tradicional'],
      subtitle: 'Café expresso tradicional com espuma cremosa',
    },
    {
      id: uuid(),
      slug: 'gelado',
      title: 'Expresso Gelado',
      tags: ['Tradicional', 'Gelado'],
      subtitle: 'Bebida preparada com café expresso e cubos de gelo',
    },
    {
      id: uuid(),
      slug: 'leite',
      title: 'Café com Leite',
      tags: ['Tradicional', 'com leite'],
      subtitle: 'Meio a meio de expresso tradicional com leite vaporizado',
    },
    {
      id: uuid(),
      slug: 'latte',
      title: 'Latte',
      tags: ['Tradicional', 'com leite'],
      subtitle:
        'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    },
    {
      id: uuid(),
      slug: 'capuccino',
      title: 'Capuccino',
      tags: ['Tradicional', 'com leite'],
      subtitle:
        'Bebida com canela feita de doses iguais de café, leite e espuma',
    },
    {
      id: uuid(),
      slug: 'macchiato',
      title: 'Macchiato',
      tags: ['Tradicional', 'com leite'],
      subtitle: 'Café expresso misturado com um pouco de leite quente e espuma',
    },
    {
      id: uuid(),
      slug: 'mocaccino',
      title: 'Mocaccino',
      tags: ['Tradicional', 'com leite'],
      subtitle: 'Café expresso com calda de chocolate, pouco leite e espuma',
    },
    {
      id: uuid(),
      slug: 'chocolateQuente',
      title: 'Chocolate Quente',
      tags: ['Tradicional', 'com leite'],
      subtitle: 'Bebida feita com chocolate dissolvido no leite quente e café',
    },
    {
      id: uuid(),
      slug: 'cubano',
      title: 'Cubano',
      tags: ['Especial', 'Alcoólico', 'Gelado'],
      subtitle:
        'Drink gelado de café expresso com rum, creme de leite e hortelã',
    },
    {
      id: uuid(),
      slug: 'havaiano',
      title: 'Havaiano',
      tags: ['Especial'],
      subtitle: 'Bebida adocicada preparada com café e leite de côco',
    },
    {
      id: uuid(),
      slug: 'arabe',
      title: 'Árabe',
      tags: ['Especial'],
      subtitle: 'Bebida preparada com grãos de café árabe e especiarias',
    },
    {
      id: uuid(),
      slug: 'irlandes',
      title: 'Irlandês',
      tags: ['Especial', 'Alcoólico'],
      subtitle: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    },
  ]

  return (
    <div className="flex flex-wrap gap-x-8 gap-y-10 py-14">
      {coffeeArray.map((item) => (
        <CoffeCard
          key={item.id}
          id={item.id}
          image={`${url}${item.slug}.png`}
          title={item.title}
          tags={item.tags}
          subtitle={item.subtitle}
          price={9.9}
        />
      ))}
    </div>
  )
}
