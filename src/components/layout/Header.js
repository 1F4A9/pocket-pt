import styled from 'styled-components';
import { useLocation, useHistory } from 'react-router-dom';

import { capitalizeFirstLetter } from './../../utils/stringManipulation';
import Nav from '../common/Nav';

const Container = styled.header`
  background-color: var(--color-bg-secondary);
  position: relative;
  text-align: center;
  color: var(--color-text-primary);
  text-decoration: underline;
  border-bottom: 1px solid var(--color-border-primary);
  margin-bottom: 16px;

  nav {
    position: absolute;
    top: 50%;
    left: 0;
    transform: translate(0%, -50%);
  }
`;

export default function Header() {
  const { pathname } = useLocation();
  const history = useHistory();

  // Home view
  let title = 'PocketPT';

  // Exercise view (sets the current exercise as title)
  let currentExerciseName = pathname.split('/')[3];
  if (currentExerciseName) title = currentExerciseName;

  // Program, Workout & Session views
  let currentPage = pathname.split('/')[1];
  if (!currentExerciseName && currentPage) title = currentPage;

  title = capitalizeFirstLetter(title);

  const goBackwardsFromExerciseValue = history.location.state.goBackwardsFromExerciseValue;

  return (
    <Container>
      <Nav
        icon="prev"
        cbOnClick={currentExerciseName ? () => history.go(goBackwardsFromExerciseValue) : () => history.goBack()} />
      <h1>{title}</h1>
    </Container>
  );
};
