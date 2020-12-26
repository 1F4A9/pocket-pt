import styled from 'styled-components';

const Container = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: var(--color-text-primary);
`;

// TODO: replace <p> with skeleton screen image.

export default function Loading({ count, itemName }) {
  return (
    <Container>
      {Array.from({ length: count }, (_, i) => (
        <p key={i}>Loading {itemName}...</p>
      ))}
    </Container>
  );
};
