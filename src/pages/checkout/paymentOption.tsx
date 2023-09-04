import { ReactNode, useEffect, useState } from 'react'

export interface checkoutProps {
  icon: ReactNode
  typePayment: string
  id: string
}

export function PaymentOption({ icon, typePayment, id }: checkoutProps) {
  return (
    <label>
      <input
        type="radio"
        name="radio-payment"
        id={id}
        className="sr-only peer"
      />
      <div className="w-44 bg-base_button border peer-checked:bg-purple_light peer-checked:border-purple cursor-pointer flex gap-3 items-start rounded-md justify-start pl-4 py-4">
        {icon}
        <span className="uppercase text-base_text text-xs">{typePayment}</span>
      </div>
    </label>
  )
}
