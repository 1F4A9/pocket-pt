import { useState } from 'react';
import styled from 'styled-components';

import { useUpdateCompletedSet } from '../../../../../hooks/useUpdateCompletedSet';

const StyledInput = styled.input`
  justify-self: flex-end;
`;

export default function Checkbox({ completed, id }) {
  const [isCompleted, setIsCompleted] = useState(completed);
  const updateCompletedSet = useUpdateCompletedSet();

  function handleOnChange() {
    setIsCompleted(!isCompleted);

    updateCompletedSet({ variables: { where: { id }, data: { completed: !isCompleted } } });
  };

  return (
    <StyledInput
      type="checkbox"
      value={isCompleted}
      checked={isCompleted}
      onChange={handleOnChange}
    />
  );
};
