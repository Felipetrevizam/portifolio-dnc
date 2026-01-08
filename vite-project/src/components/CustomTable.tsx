import styled from 'styled-components'
import { pxToRem } from '../utils'

const TableWrapper = styled.div`
  width: 100%;
  overflow-x: auto;
  border-radius: ${pxToRem(8)};
  border: 1px solid ${({ theme }) => theme.borderColor};
`

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  thead {
    background-color: ${({ theme }) => theme.primaryLight};
  }

  th {
    padding: ${pxToRem(16)};
    text-align: left;
    font-size: ${pxToRem(14)};
    font-weight: 600;
    color: ${({ theme }) => theme.primary};
    border-bottom: 2px solid ${({ theme }) => theme.borderColor};
  }

  td {
    padding: ${pxToRem(16)};
    font-size: ${pxToRem(14)};
    color: ${({ theme }) => theme.textPrimary};
    border-bottom: 1px solid ${({ theme }) => theme.borderLight};
  }

  tbody tr {
    transition: background-color 0.2s ease;

    &:hover {
      background-color: ${({ theme }) => theme.primaryLight};
    }

    &:last-child td {
      border-bottom: none;
    }
  }
`

interface CustomTableProps {
  headers: string[]
  rows: React.ReactNode[][]
}

const CustomTable: React.FC<CustomTableProps> = ({ headers, rows }) => {
  return (
    <TableWrapper>
      <Table>
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th key={index}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <td key={cellIndex}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </Table>
    </TableWrapper>
  )
}

export default CustomTable
