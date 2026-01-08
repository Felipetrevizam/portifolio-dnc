import styled from 'styled-components';

const RegistrationArea = styled.div`
  display: flex;
  min-height: 100vh;
  width: 100%;
`;

const RegistrationImage = styled.div`
  background-image: url('/registrationimage.svg');
  background-size: cover;
  background-position: center;
  height: 100vh;
  width: 50%;
`;

const RegistrationContent = styled.div`
  width: 50%;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Registration = () => {
  return (
    <RegistrationArea>
      <RegistrationImage />
      <RegistrationContent>
        <h1>Cadastro</h1>
        <p>Crie sua conta no DNC Sales Dashboard</p>
      </RegistrationContent>
    </RegistrationArea>
  );
};

export default Registration;
