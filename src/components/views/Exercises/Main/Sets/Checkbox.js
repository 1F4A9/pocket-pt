import styled from 'styled-components';

const StyledInput = styled.input`
  justify-self: flex-end;
`;

export default function Checkbox({ completed }) {
  return (
    <StyledInput type="checkbox" checked={completed} />
  );
};
