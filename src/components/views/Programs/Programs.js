import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Loading from '../../common/Loader';
import Header from './Header';

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
`;

const StyledSubtitle = styled.h5`
  font-size: 1.25em;
  font-weight: 500;
  margin-top: 0;
`;

export default function Programs({ useQuery, nextEndpoint }) {
  const { data, loading } = useQuery();

  if (loading) return <Loading count={4} itemName="programs" />;

  return (
    <Container>
      <Header />
      {data.map(({ name, subtitle, id }) => (
        <StyledLink
          to={`${nextEndpoint}/${id}`}
          key={id}
        >
          <StyledTitle>{name}</StyledTitle>
          <StyledSubtitle>{subtitle}</StyledSubtitle>
        </StyledLink>
      ))}
    </Container>
  );
};
