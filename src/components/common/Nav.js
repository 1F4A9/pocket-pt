import styled from 'styled-components';
import { MdNavigateBefore, MdNavigateNext } from 'react-icons/md';

const Container = styled.nav`
  font-size: 42px;
`;

const StyledButton = styled.button`
  position: relative;
  background: transparent;
  outline: none;
  border: none;
  color: var(--color-text-primary);
  padding: 12px;
  display: flex;
  align-items: center;
  cursor: pointer;
  border-radius: 50%;
  -webkit-tap-highlight-color: transparent;
  transition: background 0.25s ease
              color 0.25s ease;
  
  :active {
    color: var(--color-scale-blue-1);
    background: var(--color-scale-blue-1-opacity);
  }
`;

const StyledHelperText = styled.span`
  position: absolute;
  transform: translate(21px, 47px);
  font-size: 13px;
`;

export default function Nav({ icon, direction, cbOnClick }) {
  return (
    <Container>
      {direction && <StyledHelperText>{direction}</StyledHelperText>}
      <StyledButton onClick={cbOnClick}>
        {icon === "prev" ? <MdNavigateBefore /> : <MdNavigateNext />}
      </StyledButton>
    </Container>
  );
};
