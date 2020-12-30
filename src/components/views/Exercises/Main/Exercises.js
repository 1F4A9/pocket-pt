import { useState } from 'react';
import { useLocation, Redirect } from 'react-router-dom';
import styled from 'styled-components';

import { useGetExercises } from '../../../../hooks/exercises/useGetExercises';
import Footer from '../Footer/Footer';
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

  transition: transform 0.5s cubic-bezier(.25,.1,.25,1);
`;

export default function Exercises() {
  const [xPos, setXPos] = useState(0); // used as props in styles above (state = 100, 200, 300, ...)
  const { data, loading } = useGetExercises();
  const { pathname } = useLocation();

  if (loading) return <p>loading...</p>

  const currentExerciseIndex = Math.abs(xPos / 100);
  const currentExercise = pathname.split('/')[3];

  return (
    <Container>
      {!currentExercise ? <Redirect to={`${pathname}/${data[0].slug}`} /> : null}
      <StyledMask>
        {data.map(({ sets, id }) => (
          <StyledContent key={id} xPos={xPos}>
            <Sets sets={sets} />
          </StyledContent>
        ))}
        <Footer slug={data[currentExerciseIndex].slug} xPos={xPos} setXPos={setXPos} amountOfExercises={data.length} />
      </StyledMask>
    </Container>
  );
};
