import { ReactNode } from 'react'

export interface infoProps {
  icon: ReactNode
  text: string
  importantText: string
  color: string
}

export function Info({ icon, text, importantText, color }: infoProps) {
  return (
    <div className="flex max-w-sm items-center gap-3 text-base_text">
      <span className={`rounded-full p-2 bg-${color}`}>{icon}</span>
      <div className="flex flex-col">
        <span className="w-52">{text}</span>
        <span className="gap-1 font-bold capitalize">{importantText}</span>
      </div>
    </div>
  )
}
