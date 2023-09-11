import { ReactNode } from 'react'
import { useFormContext } from 'react-hook-form'

export interface checkoutProps {
  icon: ReactNode
  typePayment: string
  id: string
  // register: UseFormRegister<FieldValues>
  // register: any
}

export function PaymentOption({
  icon,
  typePayment,
  id, // register,
}: checkoutProps) {
  const { register } = useFormContext()

  return (
    <label>
      <input
        type="radio"
        id={id}
        value={typePayment}
        className="peer sr-only"
        {...register('paymentOption')}
      />
      <div className="flex w-44 cursor-pointer items-start justify-start gap-3 rounded-md border bg-base_button py-4 pl-4 transition hover:bg-base_hover peer-checked:border-purple peer-checked:bg-purple_light">
        {icon}
        <span className="text-xs uppercase text-base_text">{typePayment}</span>
      </div>
    </label>
  )
}
