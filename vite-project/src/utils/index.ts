/**
 * Converte um valor em pixels para REM
 */
export const pxToRem = (pixels: number): string => {
  return `${pixels / 16}rem`
}
