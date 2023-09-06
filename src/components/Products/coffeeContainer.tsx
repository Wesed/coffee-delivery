import expresso from '../../assets/expresso.png'
import americano from '../../assets/americano.png'
import expressoCremoso from '../../assets/expresso-cremoso.png'
import gelado from '../../assets/gelado.png'
import leite from '../../assets/leite.png'
import latte from '../../assets/latte.png'
import capuccino from '../../assets/capuccino.png'
import macchiato from '../../assets/macchiato.png'
import mocaccino from '../../assets/mochaccino.png'
import chocolateQuente from '../../assets/chocolate-quente.png'
import cubano from '../../assets/cubano.png'
import havaiano from '../../assets/havaiano.png'
import arabe from '../../assets/arabe.png'
import irlandes from '../../assets/irlandes.png'
import { CoffeCard } from './coffeCard'
import uuid from 'react-uuid'

export function CoffeeContainer() {
  const coffeeArray = [
    {
      id: uuid(),
      image: expresso,
      title: 'Expresso Tradicional',
      tags: ['Tradicional'],
      subtitle: 'O tradicional café feito com água quente e grãos moídos',
    },
    {
      id: uuid(),
      image: americano,
      title: 'Expresso Americano',
      tags: ['Tradicional'],
      subtitle: 'Expresso diluído, menos intenso que o tradicional',
    },
    {
      id: uuid(),
      image: expressoCremoso,
      title: 'Expresso Cremoso',
      tags: ['Tradicional'],
      subtitle: 'Café expresso tradicional com espuma cremosa',
    },
    {
      id: uuid(),
      image: gelado,
      title: 'Expresso Gelado',
      tags: ['Tradicional', 'Gelado'],
      subtitle: 'Bebida preparada com café expresso e cubos de gelo',
    },
    {
      id: uuid(),
      image: leite,
      title: 'Café com Leite',
      tags: ['Tradicional', 'com leite'],
      subtitle: 'Meio a meio de expresso tradicional com leite vaporizado',
    },
    {
      id: uuid(),
      image: latte,
      title: 'Latte',
      tags: ['Tradicional', 'com leite'],
      subtitle:
        'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    },
    {
      id: uuid(),
      image: capuccino,
      title: 'Capuccino',
      tags: ['Tradicional', 'com leite'],
      subtitle:
        'Bebida com canela feita de doses iguais de café, leite e espuma',
    },
    {
      id: uuid(),
      image: macchiato,
      title: 'Macchiato',
      tags: ['Tradicional', 'com leite'],
      subtitle: 'Café expresso misturado com um pouco de leite quente e espuma',
    },
    {
      id: uuid(),
      image: mocaccino,
      title: 'Mocaccino',
      tags: ['Tradicional', 'com leite'],
      subtitle: 'Café expresso com calda de chocolate, pouco leite e espuma',
    },
    {
      id: uuid(),
      image: chocolateQuente,
      title: 'Chocolate Quente',
      tags: ['Tradicional', 'com leite'],
      subtitle: 'Bebida feita com chocolate dissolvido no leite quente e café',
    },
    {
      id: uuid(),
      image: cubano,
      title: 'Cubano',
      tags: ['Especial', 'Alcoólico', 'Gelado'],
      subtitle:
        'Drink gelado de café expresso com rum, creme de leite e hortelã',
    },
    {
      id: uuid(),
      image: havaiano,
      title: 'Havaiano',
      tags: ['Especial'],
      subtitle: 'Bebida adocicada preparada com café e leite de côco',
    },
    {
      id: uuid(),
      image: arabe,
      title: 'Árabe',
      tags: ['Especial'],
      subtitle: 'Bebida preparada com grãos de café árabe e especiarias',
    },
    {
      id: uuid(),
      image: irlandes,
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
          image={item.image}
          title={item.title}
          tags={item.tags}
          subtitle={item.subtitle}
          price={9.9}
        />
      ))}
    </div>
  )
}
