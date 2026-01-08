import styled from 'styled-components';

const LeadsContainer = styled.div`
  min-height: 100vh;
  width: 100%;
  padding: 2rem;
  display: flex;
  flex-direction: column;
`;

const LeadsTitle = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 2rem;
`;

const LeadsTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 2rem;

  th, td {
    padding: 1rem;
    text-align: left;
    border-bottom: 1px solid #ddd;
  }

  th {
    background-color: #f5f5f5;
    font-weight: bold;
  }
`;

const Leads = () => {
  return (
    <LeadsContainer>
      <LeadsTitle>Gerenciamento de Leads</LeadsTitle>
      <LeadsTable>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Email</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>João Silva</td>
            <td>joao@example.com</td>
            <td>Ativo</td>
          </tr>
        </tbody>
      </LeadsTable>
    </LeadsContainer>
  );
};

export default Leads;
