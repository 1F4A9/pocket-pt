import styled from 'styled-components';
import { useLocation } from 'react-router-dom';

import { getHeaderTitleFromURL, capitalizeFirstLetter } from '../../../utils/stringManipulation';

const StyledHeader = styled.header`
  text-align: center;
  color: var(--color-text-primary);
  text-transform: uppercase;
  text-decoration: underline;
`;

export default function Header() {
  const { pathname } = useLocation();

  return (
    <StyledHeader>
      <h1>{capitalizeFirstLetter(getHeaderTitleFromURL(pathname))}</h1>
    </StyledHeader>
  );
};
