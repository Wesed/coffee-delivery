import { Minus, Plus } from 'phosphor-react'
import { useState } from 'react'

export function QtdItem() {
  const [qtd, setQtd] = useState(1)

  return (
    <div className="bg-base_button flex space-x-2 items-center rounded-md px-2">
      <button
        onClick={() => {
          qtd > 0 && setQtd(qtd - 1)
        }}
        className="text-purple w-4"
      >
        <Minus size={16} />
      </button>
      <span className="">{qtd}</span>
      <button
        onClick={() => {
          setQtd(qtd + 1)
        }}
        className="text-purple w-4"
      >
        <Plus size={16} />
      </button>
    </div>
  )
}
