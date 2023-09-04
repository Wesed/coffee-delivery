export function FormatPrice(price: number) {
  const formatPrice = String(price).replace('.', ',').padEnd(4, '0')
  return formatPrice
}
