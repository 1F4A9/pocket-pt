import styled from 'styled-components';

import Reps from './Reps';
import Weight from './Weight';
import Checkbox from './Checkbox';

const Container = styled.div`
  background-color: var(--color-bg-tertiary);
  color: var(--color-text-primary);
  border: 1px solid var(--color-border-primary);
  border-radius: 6px;
  flex-basis: 150px;
  align-self: stretch;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  padding: 0 18px;
  font-family: 'Kameron', serif;
`;

const StyledContent = styled.div`
  flex: 0 1 50%;
  display: flex;
  justify-content: space-between;
  font-size: 2rem;
`;

export default function Sets({ sets, unit }) {
  return (
    <>
      {sets.map(({ reps, weight, bodyweight, amrap, completed, id }) => (
        <Container key={id}>
          <StyledContent>
            <Reps reps={reps} amrap={amrap} />
            <span>x</span>
            <Weight weight={weight} bodyweight={bodyweight} unit={unit} />
          </StyledContent>
          <Checkbox completed={completed} id={id} />
        </Container>
      ))}
    </>
  );
};
