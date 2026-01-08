import styled from 'styled-components';

const LoginArea = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
`;

const LoginImage = styled.div`
  background-image: url('/loginimage.svg');
  background-size: cover;
  background-position: center;
  height: 100vh;
  width: 50%;
`;

const LoginContent = styled.div`
  width: 50%;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Login = () => {
  return (
    <LoginArea>
      <LoginImage />
      <LoginContent>
        <h1>Login</h1>
        <p>Bem-vindo ao DNC Sales Dashboard</p>
      </LoginContent>
    </LoginArea>
  );
};

export default Login;
