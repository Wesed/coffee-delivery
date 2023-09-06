import { Minus, Plus } from 'phosphor-react'
import { useState } from 'react'

interface QtdItem {
  qtd: number
  increase: () => void
  decrease: () => void
}

export function QtdItem({ qtd, increase, decrease }: QtdItem) {
  return (
    <div className="flex items-center space-x-2 rounded-md bg-base_button px-2">
      <button
        onClick={decrease}
        className="w-4 text-purple transition hover:text-purple_dark"
      >
        <Minus size={16} />
      </button>
      <span className="text-base_text">{qtd}</span>
      <button
        onClick={increase}
        className="w-4 text-purple transition hover:text-purple_dark"
      >
        <Plus size={16} />
      </button>
    </div>
  )
}
