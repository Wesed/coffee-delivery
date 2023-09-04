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
        className="text-purple w-4 hover:text-purple_dark transition"
      >
        <Minus size={16} />
      </button>
      <span className="text-base_text">{qtd}</span>
      <button
        onClick={() => {
          setQtd(qtd + 1)
        }}
        className="text-purple w-4 hover:text-purple_dark transition"
      >
        <Plus size={16} />
      </button>
    </div>
  )
}
