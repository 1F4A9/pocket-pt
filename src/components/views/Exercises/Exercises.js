import { useState } from 'react';
import styled from 'styled-components';

import { useGetExercises } from '../../../hooks/exercises/useGetExercises';
import Header from './Header';
import Footer from './Footer/Footer';
import Sets from './Sets/Sets';

const Container = styled.div`
  flex-grow: 1;
  margin-bottom: 70px;
`;

const StyledMask = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  overflow-x: hidden;
`;

const StyledContent = styled.div`
  flex: 0 0 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  transform: translateX(${props => props.xPos}%);

  transition: transform 0.3s ease;
`;

export default function Exercises() {
  const [xPos, setXPos] = useState(0);
  const { data, loading } = useGetExercises();

  if (loading) return <p>loading...</p>

  return (
    <Container>
      <StyledMask>
        {data.map(({ name, sets, id }) => (
          <StyledContent key={id} xPos={xPos}>
            <Header name={name} />
            <Sets sets={sets} />
          </StyledContent>
        ))}
        <Footer xPos={xPos} setXPos={setXPos} maxLength={data.length} />
      </StyledMask>
    </Container>
  );
};
