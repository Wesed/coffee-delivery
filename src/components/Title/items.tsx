import { ReactNode } from 'react'

export interface ItemsProps {
  icon: ReactNode
  text: string
  color: string
}

export function Items({ icon, text, color }: ItemsProps) {
  return (
    <div className="flex gap-3 text-base items-center text-base_text min-w-[230px]">
      <span className={`rounded-full p-2 ${color}`}>{icon}</span>
      {text}
    </div>
  )
}
