import { Minus, Plus } from 'phosphor-react'
import { useCallback, useEffect, useState } from 'react'

interface QtdItemProps {
  catchValue: (value: number) => void
  qtdProd?: number
}

export function QtdItem({ catchValue, qtdProd = 1 }: QtdItemProps) {
  const [qtd, setQtd] = useState(qtdProd)

  const callWhenChange = useCallback(() => {
    catchValue(qtd)
  }, [qtd, catchValue])

  useEffect(() => {
    callWhenChange()
  }, [qtd])

  return (
    <div className="flex items-center space-x-2 rounded-md bg-base_button px-2">
      <button
        onClick={() => {
          qtd > 1 && setQtd(qtd - 1)
        }}
        className="w-4 text-purple transition hover:text-purple_dark"
      >
        <Minus size={16} />
      </button>
      <span className="text-base_text">{qtd}</span>
      <button
        onClick={() => {
          setQtd(qtd + 1)
        }}
        className="w-4 text-purple transition hover:text-purple_dark"
      >
        <Plus size={16} />
      </button>
    </div>
  )
}
