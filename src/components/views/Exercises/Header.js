import styled from 'styled-components';

const Container = styled.div`
  color: var(--color-text-primary);
`;

export default function Header({ name }) {
  return (
    <Container>
      <h1>{name}</h1>
    </Container>
  );
};
