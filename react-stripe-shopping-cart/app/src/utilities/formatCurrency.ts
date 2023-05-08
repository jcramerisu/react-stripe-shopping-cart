// A utility to format the currency in US dollars for all the prices listed throughout the web app.

// Code is based off of the following reference:
// Web Dev Simplified - How To Create An Advanced Shopping Cart With React and TypeScript || https://youtu.be/lATafp15HWA

const CURRENCY_FORMATTER = new Intl.NumberFormat(undefined, {
  currency: "USD", style: "currency"})

export function formatCurrency(number: number) {
  return CURRENCY_FORMATTER.format(number)
}