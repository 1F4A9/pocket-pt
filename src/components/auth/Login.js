import styled from 'styled-components';
import { useAuth0 } from '@auth0/auth0-react';

const StyledButton = styled.button`
  font-family: 'Catamaran', sans-serif;
  border: 1px solid var(--color-border-primary);
  background: var(--color-bg-tertiary);
  color: var(--color-text-primary);
  outline: none;
  width: 170px;
  padding: 12px;
  border-radius: 4px;
  transition: transform 0.1s linear;

  :active {
    transform: scale(.98);
  }
`;

export default function Login() {
  const { loginWithRedirect } = useAuth0();

  return (
    <StyledButton onClick={() => loginWithRedirect()} >
      Log In
    </StyledButton>
  );
};
