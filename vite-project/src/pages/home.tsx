import styled from 'styled-components'
import { Container, Box } from '@mui/material'
import { useEffect } from 'react'
import {
  Header,
  Card,
  CardTitle,
  CardValue,
  CardLabel,
  CustomChart,
  AvatarsList,
  CustomTable,
} from '../components'
import { pxToRem, currencyConverter } from '../utils'
import {
  useSalesHighlights,
  useMonthlySales,
  useYearlySales,
  useTopSellers,
  useLeads,
} from '../hooks/useApi'

const HomeContainer = styled.div`
  min-height: 100vh;
  background-color: ${({ theme }) => theme.background};
`

const HeroSection = styled.section`
  padding: ${pxToRem(48)} 0;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.primary} 0%,
    ${({ theme }) => theme.primaryHover} 100%
  );
  color: white;
  text-align: center;
  margin-bottom: ${pxToRem(40)};
`

const HeroTitle = styled.h1`
  font-size: ${pxToRem(48)};
  font-weight: 700;
  margin: 0 0 ${pxToRem(16)} 0;
  letter-spacing: -1px;
`

const HeroSubtitle = styled.p`
  font-size: ${pxToRem(18)};
  opacity: 0.95;
  margin: 0;
  font-weight: 400;
`

const Section = styled.section`
  margin-bottom: ${pxToRem(48)};
`

const StatusBadge = styled.span<{ status: string }>`
  padding: ${pxToRem(4)} ${pxToRem(12)};
  border-radius: ${pxToRem(12)};
  font-size: ${pxToRem(12)};
  font-weight: 600;
  background-color: ${({ status, theme }) => {
    switch (status) {
      case 'Novo':
        return theme.info + '20'
      case 'Contato':
        return theme.warning + '20'
      case 'Negociação':
        return theme.primary + '20'
      case 'Convertido':
        return theme.success + '20'
      default:
        return theme.borderColor
    }
  }};
  color: ${({ status, theme }) => {
    switch (status) {
      case 'Novo':
        return theme.info
      case 'Contato':
        return theme.warning
      case 'Negociação':
        return theme.primary
      case 'Convertido':
        return theme.success
      default:
        return theme.textSecondary
    }
  }};
`

const ActionButton = styled.button`
  background-color: ${({ theme }) => theme.primary};
  color: white;
  border: none;
  padding: ${pxToRem(8)} ${pxToRem(16)};
  border-radius: ${pxToRem(6)};
  font-size: ${pxToRem(14)};
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: ${({ theme }) => theme.primaryHover};
    transform: translateY(-1px);
  }
`

const Home = () => {
  // API hooks
  const { data: highlights, loading: highlightsLoading, getData: getHighlights } = useSalesHighlights()
  const { data: monthlySalesData, loading: monthlySalesLoading, getData: getMonthlySales } = useMonthlySales()
  const { data: yearlySalesData, loading: yearlySalesLoading, getData: getYearlySales } = useYearlySales()
  const { data: topSellersData, loading: topSellersLoading, getData: getTopSellers } = useTopSellers()
  const { data: leadsData, loading: leadsLoading, getData: getLeads } = useLeads()

  // Load data on component mount
  useEffect(() => {
    getHighlights()
    getMonthlySales()
    getYearlySales()
    getTopSellers()
    getLeads()
  }, [])

  // Prepare chart data
  const salesChartData = monthlySalesData || {
    labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
    data: [45000, 52000, 48000, 61000, 58000, 70000],
    type: 'line' as const,
  }

  const leadsChartData = yearlySalesData || {
    labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
    data: [32, 45, 38, 52, 48, 65],
    type: 'bar' as const,
  }

  // Prepare top sellers list
  const topSellersList = topSellersData
    ? topSellersData.map((seller) => ({
        avatar: seller.avatar || '/dncavatar.svg',
        name: seller.name,
        subtitle: currencyConverter(Number(seller.value)),
      }))
    : [
        {
          avatar: '/dncavatar.svg',
          name: 'Maria Silva',
          subtitle: currencyConverter(125000),
        },
        {
          avatar: '/dncavatar.svg',
          name: 'João Santos',
          subtitle: currencyConverter(98000),
        },
        {
          avatar: '/dncavatar.svg',
          name: 'Ana Costa',
          subtitle: currencyConverter(87000),
        },
        {
          avatar: '/dncavatar.svg',
          name: 'Carlos Oliveira',
          subtitle: currencyConverter(76000),
        },
      ]

  // Prepare recent leads table
  const recentLeadsTable = {
    headers: ['Nome', 'Email', 'Telefone', 'Status', 'Ações'],
    rows: leadsData
      ? leadsData.slice(0, 5).map((lead) => [
          lead.name,
          lead.email,
          lead.phone,
          <StatusBadge key={`badge-${lead.id}`} status={lead.status}>
            {lead.status}
          </StatusBadge>,
          <ActionButton key={`button-${lead.id}`}>Ver detalhes</ActionButton>,
        ])
      : [
          [
            'Pedro Alves',
            'pedro@email.com',
            '(11) 99999-1111',
            <StatusBadge key="badge-1" status="Novo">
              Novo
            </StatusBadge>,
            <ActionButton key="btn-1">Ver detalhes</ActionButton>,
          ],
          [
            'Juliana Mendes',
            'juliana@email.com',
            '(11) 99999-2222',
            <StatusBadge key="badge-2" status="Contato">
              Contato
            </StatusBadge>,
            <ActionButton key="btn-2">Ver detalhes</ActionButton>,
          ],
          [
            'Ricardo Souza',
            'ricardo@email.com',
            '(11) 99999-3333',
            <StatusBadge key="badge-3" status="Negociação">
              Negociação
            </StatusBadge>,
            <ActionButton key="btn-3">Ver detalhes</ActionButton>,
          ],
          [
            'Fernanda Lima',
            'fernanda@email.com',
            '(11) 99999-4444',
            <StatusBadge key="badge-4" status="Convertido">
              Convertido
            </StatusBadge>,
            <ActionButton key="btn-4">Ver detalhes</ActionButton>,
          ],
          [
            'Paulo Ferreira',
            'paulo@email.com',
            '(11) 99999-5555',
            <StatusBadge key="badge-5" status="Novo">
              Novo
            </StatusBadge>,
            <ActionButton key="btn-5">Ver detalhes</ActionButton>,
          ],
        ],
  }

  return (
    <HomeContainer>
      <Header />

      <HeroSection>
        <Container maxWidth="xl">
          <HeroTitle>DNC Sales Dashboard</HeroTitle>
          <HeroSubtitle>
            Gerencie suas vendas de forma inteligente e eficiente
          </HeroSubtitle>
        </Container>
      </HeroSection>

      <Container maxWidth="xl">
        <Section>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: {
                xs: '1fr',
                sm: '1fr 1fr',
                md: '1fr 1fr 1fr 1fr',
              },
              gap: 3,
            }}
          >
            {highlightsLoading ? (
              <Card variant="info">
                <CardLabel>Carregando...</CardLabel>
              </Card>
            ) : highlights && highlights.length > 0 ? (
              highlights.map((highlight) => (
                <Card key={highlight.title} variant={highlight.alert ? 'error' : 'info'}>
                  <CardLabel>{highlight.title}</CardLabel>
                  <CardValue>{currencyConverter(Number(highlight.value))}</CardValue>
                  <CardLabel>{highlight.subtitle}</CardLabel>
                </Card>
              ))
            ) : (
              <Card variant="info">
                <CardLabel>Total de Vendas</CardLabel>
                <CardValue>{currencyConverter(334000)}</CardValue>
                <CardLabel>+15% este mês</CardLabel>
              </Card>
            )}
          </Box>
        </Section>

        <Section>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: '2fr 1fr' },
              gap: 3,
            }}
          >
            <Card>
              <CardTitle>Vendas nos últimos 6 meses</CardTitle>
              <Box sx={{ mt: 2 }}>
                {monthlySalesLoading ? (
                  <div style={{ textAlign: 'center', padding: '40px 0' }}>Carregando gráfico...</div>
                ) : (
                  <CustomChart
                    labels={salesChartData.labels}
                    data={salesChartData.data}
                    type={salesChartData.type || 'line'}
                    label="Vendas"
                  />
                )}
              </Box>
            </Card>
            <Card>
              <CardTitle>Top Vendedores</CardTitle>
              <Box sx={{ mt: 2 }}>
                {topSellersLoading ? (
                  <div style={{ textAlign: 'center', padding: '40px 0' }}>Carregando vendedores...</div>
                ) : (
                  <AvatarsList listData={topSellersList} />
                )}
              </Box>
            </Card>
          </Box>
        </Section>

        <Section>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: '1fr 2fr' },
              gap: 3,
            }}
          >
            <Card>
              <CardTitle>Novos Leads</CardTitle>
              <Box sx={{ mt: 2 }}>
                {yearlySalesLoading ? (
                  <div style={{ textAlign: 'center', padding: '40px 0' }}>Carregando gráfico...</div>
                ) : (
                  <CustomChart
                    labels={leadsChartData.labels}
                    data={leadsChartData.data}
                    type={leadsChartData.type || 'bar'}
                    label="Leads"
                  />
                )}
              </Box>
            </Card>
            <Card>
              <CardTitle>Leads Recentes</CardTitle>
              <Box sx={{ mt: 2 }}>
                {leadsLoading ? (
                  <div style={{ textAlign: 'center', padding: '40px 0' }}>Carregando leads...</div>
                ) : (
                  <CustomTable
                    headers={recentLeadsTable.headers}
                    rows={recentLeadsTable.rows}
                  />
                )}
              </Box>
            </Card>
          </Box>
        </Section>
      </Container>
    </HomeContainer>
  )
}

export default Home
