import styled from 'styled-components';
import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri';

import { WINDOW_INNERWIDTH_IN_PERCENTAGE } from '../../../../constants';

const Container = styled.div`
  position: relative;
`;

const StyledName = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, 70%);
  font-size: 13px;
`;

const StyledButton = styled.button`
  position: relative;
  background: transparent;
  outline: none;
  border: none;
  color: var(--color-text-primary);
  font-size: 32px;
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

export default function NavButton({ name, xPos, setXPos, maxLength }) {
  function handleTranslateX() {
    const MAX_VALUE = -maxLength * WINDOW_INNERWIDTH_IN_PERCENTAGE;
    const MIN_VALUE = WINDOW_INNERWIDTH_IN_PERCENTAGE;

    let nextValue = xPos - WINDOW_INNERWIDTH_IN_PERCENTAGE;
    let prevValue = xPos + WINDOW_INNERWIDTH_IN_PERCENTAGE;

    if (name === 'prev' && prevValue !== MIN_VALUE) setXPos(prevValue);
    if (name === 'next' && nextValue !== MAX_VALUE) setXPos(nextValue);
  };

  return (
    <Container>
      <StyledName>
        {name}
      </StyledName>
      <StyledButton onClick={handleTranslateX}>
        {name === 'prev' ? <RiArrowLeftSLine /> : <RiArrowRightSLine />}
      </StyledButton>
    </Container>
  );
};
