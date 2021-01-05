import styled from 'styled-components';
import { Link, Redirect } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

import Loading from '../common/Loader';

const Container = styled.main`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledLink = styled(Link)`
  background-color: var(--color-bg-tertiary);
  color: var(--color-text-primary);
  text-decoration: none;
  border: 1px solid var(--color-border-primary);
  border-radius: 6px;
  flex-basis: 150px;
  align-self: stretch;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 16px;
  font-family: 'Catamaran', sans-serif;
`;

const StyledTitle = styled.h2`
  font-size: 2em;
  font-weight: 600;
  color: var(--color-text-primary);
`;

const StyledSubtitle = styled.h5`
  font-size: 1.25em;
  font-weight: 500;
  margin-top: 0;
`;

export default function Programs({ useQuery, nextEndpoint }) {
  const { data, loading } = useQuery();
  const { isAuthenticated, isLoading } = useAuth0();

  if (loading || isLoading) return <Loading count={4} itemName="programs" />;

  const INITIAL_GO_BACKWARDS_VALUE = -1;

  return (
    <Container>
      {!isAuthenticated && <Redirect to="/" />}
      {!data.length && <StyledTitle>No Programs Available</StyledTitle>}
      {data.map(({ name, subtitle, id, exercises }) => (
        <StyledLink
          to={{
            pathname: `${nextEndpoint}/${id}${exercises ? '/' + exercises[0].slug : ''}`,
            state: { goBackwardsFromExerciseValue: INITIAL_GO_BACKWARDS_VALUE }
          }}
          key={id}
        >
          <StyledTitle>{name}</StyledTitle>
          <StyledSubtitle>{subtitle}</StyledSubtitle>
        </StyledLink>
      ))}
    </Container>
  );
};
