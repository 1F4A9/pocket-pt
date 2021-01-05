import styled from 'styled-components';
import { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

import Footer from '../Footer/Footer';
import Sets from './Sets/Sets';
import { useGetExercises } from '../../../../hooks/useGetExercises';
import { getNextSlug } from '../../../../utils/reactRouterHelpers';

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
  const { isAuthenticated, isLoading } = useAuth0();

  if (loading || isLoading) return <p>loading...</p>

  const currentExerciseIndex = Math.abs(xPos / 100);
  const isLastExercise = data.length - 1 === currentExerciseIndex;
  const amountOfExercises = data.length;

  const nextSlug = getNextSlug(data, currentExerciseIndex, amountOfExercises);

  return (
    <Container>
      {!isAuthenticated && <Redirect to="/" />}
      <StyledMask>
        {data.map(({ sets, unit, id }) => (
          <StyledContent key={id} xPos={xPos}>
            <Sets sets={sets} unit={unit} />
          </StyledContent>
        ))}
        <Footer
          nextSlug={nextSlug}
          xPos={xPos}
          setXPos={setXPos}
          amountOfExercises={amountOfExercises}
          isLastExercise={isLastExercise}
          currentExerciseIndex={currentExerciseIndex}
        />
      </StyledMask>
    </Container>
  );
};
