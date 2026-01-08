import { useGet } from './useAxios'

// Interfaces para tipagem
export interface SalesHighlight {
  title: string
  value: string | number
  subtitle: string
  alert?: boolean
}

export interface ChartData {
  labels: string[]
  data: number[]
  type: 'line' | 'bar'
}

export interface TopSeller {
  name: string
  value: number
  avatar?: string
}

export interface Lead {
  id: number
  name: string
  email: string
  phone: string
  company?: string
  status: 'Novo' | 'Contato' | 'Negociação' | 'Convertido' | 'Perdido'
}

export interface NewsItem {
  id: number
  title: string
  content: string
}

// Hook para Highlights de Vendas
export const useSalesHighlights = () => {
  return useGet<SalesHighlight[]>('/sales/highlights')
}

// Hook para Vendas Mensais
export const useMonthlySales = () => {
  return useGet<ChartData>('/sales/month')
}

// Hook para Vendas Anuais
export const useYearlySales = () => {
  return useGet<ChartData>('/sales/year')
}

// Hook para Top Vendedores
export const useTopSellers = () => {
  return useGet<TopSeller[]>('/sales/stars')
}

// Hook para Listar Leads
export const useLeads = () => {
  return useGet<Lead[]>('/leads')
}

// Hook para Notícias
export const useNews = () => {
  return useGet<NewsItem[]>('/news')
}
