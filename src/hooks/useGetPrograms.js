import { gql, useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';

const ALL_PROGRAMS = gql`
  query GetPrograms {
    programs {
      name
      subtitle
      id
    }
  }
`;

export function useGetPrograms() {
  const { id } = useParams();
  const { data, loading } = useQuery(ALL_PROGRAMS);

  return loading ? { data, loading } : { data: data.programs, loading };
};
