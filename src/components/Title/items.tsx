import { ReactNode } from 'react'

export interface ItemsProps {
  icon: ReactNode
  text: string
  color: string
}

export function Items({ icon, text, color }: ItemsProps) {
  return (
    <div className="flex min-w-[230px] items-center gap-3 text-base text-base_text">
      <span className={`rounded-full p-2 ${color}`}>{icon}</span>
      {text}
    </div>
  )
}
