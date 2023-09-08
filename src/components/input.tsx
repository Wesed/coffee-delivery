import { UseFormRegister, FieldValues } from 'react-hook-form'

export interface inputProps {
  name: string
  type: string
  placeholder: string
  grid: string
  errors: any | undefined
  register: UseFormRegister<FieldValues>
}

export function Input({
  grid,
  name,
  placeholder,
  errors,
  register,
}: inputProps) {
  return (
    <div className={`flex flex-col gap-1  ${grid}`}>
      <input
        placeholder={placeholder}
        {...register(`${name}`)}
        className={`w-full rounded-md border border-base_button p-3 text-sm text-base_text placeholder-base_label transition  ${
          errors
            ? 'bg-red-500/10 hover:border-red-500 focus:border-red-500 '
            : 'bg-base_input hover:border-yellow_dark focus:border-yellow_dark '
        } `}
      />

      {errors && (
        <span className=" text-xs  text-red-700">{errors.message}</span>
      )}
    </div>
  )
}
