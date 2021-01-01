import { gql, useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';

const ALL_SESSIONS = gql`
  query GetAllWorkouts($where: SessionWhereInput) {
    sessions(where: $where) {
      name
      subtitle
      id
      exercises(first: 1) {
        slug
      }
    }
  }
`;

export function useGetSessions() {
  const { id } = useParams();
  const { data, loading } = useQuery(ALL_SESSIONS, {
    variables: { where: { workout: { id } } }
  });

  return loading ? { data, loading } : { data: data.sessions, loading };
};
