import styled from 'styled-components';

import Login from '../auth/Login';

const Container = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  button {
    margin-bottom: 80px;
  }
`;

export default function Home() {
  return (
    <Container>
      <Login />
    </Container>
  );
};
