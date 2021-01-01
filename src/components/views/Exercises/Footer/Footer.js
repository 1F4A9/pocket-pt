import styled from 'styled-components';
import { Link, useLocation, useHistory } from 'react-router-dom';

import Nav from '../../../common/Nav';
import { calcExerciseSlideValue } from '../../../../utils/calcExerciseSlideValue';
import { getNavigateBackwardsValue } from '../../../../utils/reactRouterHelpers';

const Container = styled.footer`
  position: fixed;
  bottom: 0;
  height: 70px;
  width: 100%;
  background-color: var(--color-bg-secondary);
  color: var(--color-text-primary);
  font-size: 32px;
  font-family: 'Catamaran', sans-serif;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: var(--color-text-primary);
`;

export default function Footer({ nextSlug, xPos, setXPos, amountOfExercises, isLastExercise, currentExerciseIndex }) {
  const { pathname } = useLocation();
  const history = useHistory();

  const defaultExercisePath = `/${pathname.split('/').slice(1, 3).join('/')}`;

  const nextNavigationValue = calcExerciseSlideValue(xPos, 'next', amountOfExercises);
  const prevNavigationValue = calcExerciseSlideValue(xPos, 'prev', amountOfExercises);

  const goBackwardsFromExerciseValue = getNavigateBackwardsValue(currentExerciseIndex, amountOfExercises);

  return (
    <Container>
      <Nav
        icon={"prev"}
        direction={"prev"}
        cbOnClick={() => { setXPos(prevNavigationValue); history.goBack(); }}
      />
      <StyledLink
        to={{
          pathname: `${defaultExercisePath}/${nextSlug}`,
          state: { goBackwardsFromExerciseValue }
        }}
        replace={isLastExercise ? true : false}
      >
        <Nav
          icon={"next"}
          direction={"next"}
          cbOnClick={() => setXPos(nextNavigationValue)}
        />
      </StyledLink>
    </Container>
  );
};
