import styled from 'styled-components';

const Container = styled.span`
  color: var(--color-text-primary);
`;

export default function Reps({ reps, amrap }) {
  return (
    <Container>
      {amrap ? "AMRAP" : reps}
    </Container>
  );
};
