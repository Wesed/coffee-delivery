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

export function CoffeeContainer() {
  const coffeeArray = [
    {
      image: expresso,
      title: 'Expresso Tradicional',
      tags: ['Tradicional'],
      subtitle: 'O tradicional café feito com água quente e grãos moídos',
    },
    {
      image: americano,
      title: 'Expresso Americano',
      tags: ['Tradicional'],
      subtitle: 'Expresso diluído, menos intenso que o tradicional',
    },
    {
      image: expressoCremoso,
      title: 'Expresso Cremoso',
      tags: ['Tradicional'],
      subtitle: 'Café expresso tradicional com espuma cremosa',
    },
    {
      image: gelado,
      title: 'Expresso Gelado',
      tags: ['Tradicional', 'Gelado'],
      subtitle: 'Bebida preparada com café expresso e cubos de gelo',
    },
    {
      image: leite,
      title: 'Café com Leite',
      tags: ['Tradicional', 'com leite'],
      subtitle: 'Meio a meio de expresso tradicional com leite vaporizado',
    },
    {
      image: latte,
      title: 'Latte',
      tags: ['Tradicional', 'com leite'],
      subtitle:
        'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    },
    {
      image: capuccino,
      title: 'Capuccino',
      tags: ['Tradicional', 'com leite'],
      subtitle:
        'Bebida com canela feita de doses iguais de café, leite e espuma',
    },
    {
      image: macchiato,
      title: 'Macchiato',
      tags: ['Tradicional', 'com leite'],
      subtitle: 'Café expresso misturado com um pouco de leite quente e espuma',
    },
    {
      image: mocaccino,
      title: 'Mocaccino',
      tags: ['Tradicional', 'com leite'],
      subtitle: 'Café expresso com calda de chocolate, pouco leite e espuma',
    },
    {
      image: chocolateQuente,
      title: 'Chocolate Quente',
      tags: ['Tradicional', 'com leite'],
      subtitle: 'Bebida feita com chocolate dissolvido no leite quente e café',
    },
    {
      image: cubano,
      title: 'Cubano',
      tags: ['Especial', 'Alcoólico', 'Gelado'],
      subtitle:
        'Drink gelado de café expresso com rum, creme de leite e hortelã',
    },
    {
      image: havaiano,
      title: 'Havaiano',
      tags: ['Especial'],
      subtitle: 'Bebida adocicada preparada com café e leite de côco',
    },
    {
      image: arabe,
      title: 'Árabe',
      tags: ['Especial'],
      subtitle: 'Bebida preparada com grãos de café árabe e especiarias',
    },
    {
      image: irlandes,
      title: 'Irlandês',
      tags: ['Especial', 'Alcoólico'],
      subtitle: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    },
  ]

  return (
    <div className="flex py-14 flex-wrap gap-y-10 gap-x-8">
      {coffeeArray.map((item) => (
        <CoffeCard
          key={item.title}
          image={item.image}
          title={item.title}
          tags={item.tags}
          subtitle={item.subtitle}
        />
      ))}
    </div>
  )
}
