import { Line, Bar } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js'
import { useTheme } from 'styled-components'

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
)

interface CustomChartProps {
  labels: string[]
  data: number[]
  type: 'line' | 'bar'
  label?: string
}

const CustomChart: React.FC<CustomChartProps> = ({
  labels,
  data,
  type,
  label = 'Valor',
}) => {
  const theme = useTheme()

  const options = {
    responsive: true,
    maintainAspectRatio: true,
    aspectRatio: 2.5,
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: theme.textSecondary,
          font: {
            size: 12,
            weight: 500,
          },
        },
        border: {
          display: false,
        },
      },
      y: {
        grid: {
          color: theme.chartGrid,
          drawBorder: false,
        },
        ticks: {
          color: theme.textSecondary,
          font: {
            size: 12,
            weight: 500,
          },
          callback: function (value: string | number) {
            return typeof value === 'number' && value >= 1000
              ? `${(value / 1000).toFixed(0)}k`
              : value
          },
        },
        border: {
          display: false,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: theme.cardBackground,
        titleColor: theme.textPrimary,
        bodyColor: theme.textSecondary,
        borderColor: theme.borderColor,
        borderWidth: 1,
        padding: 12,
        boxPadding: 6,
        usePointStyle: true,
        callbacks: {
          label: function (context: { dataset: { label?: string }; parsed: { y: number | null } }) {
            let label = context.dataset.label || ''
            if (label) {
              label += ': '
            }
            if (context.parsed.y !== null) {
              label += new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              }).format(context.parsed.y)
            }
            return label
          },
        },
      },
    },
  } as const

  const chartData = {
    labels,
    datasets: [
      {
        label,
        data,
        borderColor: theme.chartPrimary,
        backgroundColor:
          type === 'line' ? theme.chartBackground : theme.chartPrimary,
        borderWidth: 3,
        tension: 0.4,
        pointRadius: type === 'line' ? 5 : 0,
        pointHoverRadius: type === 'line' ? 7 : 0,
        pointBackgroundColor: theme.chartPrimary,
        pointBorderColor: theme.cardBackground,
        pointBorderWidth: 2,
        fill: type === 'line',
        borderRadius: type === 'bar' ? 8 : 0,
      },
    ],
  }

  return type === 'bar' ? (
    <Bar options={options} data={chartData} />
  ) : (
    <Line options={options} data={chartData} />
  )
}

export default CustomChart
