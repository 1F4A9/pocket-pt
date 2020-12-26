import { gql, useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';

const ALL_WORKOUTS = gql`
  query GetAllWorkouts($where: WorkoutWhereInput) {
    workouts(where: $where) {
      name
      subtitle
      id
    }
  }
`;

export function useGetWorkouts() {
  const { id } = useParams();
  const { data, loading } = useQuery(ALL_WORKOUTS, {
    variables: { where: { program: { id } } }
  });

  return loading ? { data, loading } : { data: data.workouts, loading };
};
