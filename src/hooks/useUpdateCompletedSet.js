import { gql, useMutation } from '@apollo/client';

const UPDATE_COMPLETED_SET = gql`
  mutation UpdateCompletedSet($where: SetWhereUniqueInput!, $data: SetUpdateInput!) {
    updateSet(where: $where, data: $data) {
      id
      completed
    }
  }
`;

export function useUpdateCompletedSet() {
  const [updateCompletedSet] = useMutation(UPDATE_COMPLETED_SET);
  return updateCompletedSet;
};
