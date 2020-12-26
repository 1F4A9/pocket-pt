import styled from 'styled-components';

import NavIcon from './NavIcon';

const StyledFooter = styled.footer`
  position: fixed;
  bottom: 0;
  height: 70px;
  width: calc(100% - 12px);
  padding: 0 6px;
  background-color: var(--color-bg-secondary);
  color: var(--color-text-primary);
  font-size: 32px;
  font-family: 'Catamaran', sans-serif;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default function Footer({ xPos, setXPos, maxLength }) {
  return (
    <StyledFooter>
      <NavIcon name="prev" xPos={xPos} setXPos={setXPos} maxLength={maxLength} />
      <NavIcon name="next" xPos={xPos} setXPos={setXPos} maxLength={maxLength} />
    </StyledFooter>
  );
};
