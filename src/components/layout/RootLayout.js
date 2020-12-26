import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export default function RootLayout({ children }) {
  return (
    <Container>
      {children}
    </Container>
  );
};
