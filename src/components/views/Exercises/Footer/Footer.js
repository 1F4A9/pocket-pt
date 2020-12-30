import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';

import Nav from '../../../common/Nav';
import { calcExerciseSlideValue } from '../../../../utils/calcExerciseSlideValue';

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
`;

export default function Footer({ slug, xPos, setXPos, amountOfExercises }) {
  const { pathname } = useLocation();

  const defaultExercisePath = `/${pathname.split('/').slice(1, 3).join('/')}`;

  const nextNavigationValue = calcExerciseSlideValue(xPos, 'next', amountOfExercises);
  const prevNavigationValue = calcExerciseSlideValue(xPos, 'prev', amountOfExercises);

  const navs = [
    { icon: "prev", direction: "prev", navigationValue: prevNavigationValue },
    { icon: "next", direction: "next", navigationValue: nextNavigationValue },
  ];

  return (
    <Container>
      {navs.map(({ icon, direction, navigationValue }) => (
        <StyledLink to={`${defaultExercisePath}/${slug}`} key={direction} >
          <Nav icon={icon} direction={direction} cbOnClick={() => setXPos(navigationValue)} />
        </StyledLink>
      ))}
    </Container>
  );
};
