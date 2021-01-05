import { gql, useQuery } from '@apollo/client';
import { useAuth0 } from '@auth0/auth0-react';

const ALL_PROGRAMS = gql`
  query GetPrograms($where: ProgramWhereInput!) {
    programs(where: $where) {
      name
      subtitle
      id
    }
  }
`;

export function useGetPrograms() {
  const { user: { email = '' } = '' } = useAuth0();

  const { data, loading } = useQuery(ALL_PROGRAMS, {
    variables: { where: { client: { email } } }
  });

  return loading ? { data, loading } : { data: data.programs, loading };
};
