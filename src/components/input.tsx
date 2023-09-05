export interface inputProps {
  type: string
  placeholder: string
  grid: string
}

export function Input({ type, grid, ...props }: inputProps) {
  return (
    <input
      type={type}
      {...props}
      className={`rounded-md border border-base_button bg-base_input p-3 text-sm text-base_text placeholder-base_label transition hover:border-yellow_dark focus:border-yellow_dark ${grid}`}
    />
  )
}
