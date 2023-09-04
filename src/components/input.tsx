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
      className={`focus:border-yellow_dark hover:border-yellow_dark transition rounded-md bg-base_input text-base_text placeholder-base_label text-sm p-3 border border-base_button ${grid}`}
    />
  )
}
