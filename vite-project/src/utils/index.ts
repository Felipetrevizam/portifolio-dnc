/**
 * Converte um valor em pixels para REM
 */
export const pxToRem = (pixels: number): string => {
  return `${pixels / 16}rem`
}

/**
 * Converte um valor numérico para o formato de moeda brasileira (BRL)
 */
export const currencyConverter = (value: number): string => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value)
}
