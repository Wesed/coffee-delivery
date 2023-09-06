export function FormatPrice(price: number) {
  const formatPrice = String(price.toFixed(2)).replace('.', ',').padEnd(4, '0')
  return formatPrice
}
