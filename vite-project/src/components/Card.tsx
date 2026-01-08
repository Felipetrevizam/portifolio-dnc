import styled from 'styled-components'
import { pxToRem } from '../utils'

export const Card = styled.div<{
  variant?: 'default' | 'success' | 'warning' | 'error' | 'info'
}>`
  background-color: ${({ theme }) => theme.cardBackground};
  border-radius: ${pxToRem(12)};
  padding: ${pxToRem(24)};
  box-shadow: ${({ theme }) => theme.shadowMd};
  transition: all 0.3s ease;
  border: 1px solid
    ${({ theme, variant }) => {
      switch (variant) {
        case 'success':
          return theme.success
        case 'warning':
          return theme.warning
        case 'error':
          return theme.error
        case 'info':
          return theme.info
        default:
          return theme.borderColor
      }
    }};

  &:hover {
    box-shadow: ${({ theme }) => theme.shadowLg};
    transform: translateY(-2px);
  }
`

export const CardTitle = styled.h3`
  font-size: ${pxToRem(18)};
  font-weight: 600;
  color: ${({ theme }) => theme.textPrimary};
  margin-bottom: ${pxToRem(8)};
`

export const CardValue = styled.div`
  font-size: ${pxToRem(32)};
  font-weight: 700;
  color: ${({ theme }) => theme.primary};
  margin: ${pxToRem(8)} 0;
`

export const CardLabel = styled.p`
  font-size: ${pxToRem(14)};
  color: ${({ theme }) => theme.textSecondary};
  margin: 0;
`
