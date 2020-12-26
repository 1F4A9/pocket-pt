import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function Home() {
  return (
    <Container>
      <Link to="programs">
        Program Screen
      </Link>
    </Container>
  );
};
