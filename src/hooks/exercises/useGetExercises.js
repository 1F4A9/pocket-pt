import { gql, useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';

const ALL_EXERCISES = gql`
  query GetAllExercises($where: ExerciseWhereInput) {
    exercises(where: $where, orderBy: order_ASC) {
      name
      id
      slug
      sets {
        weight
        reps
        bodyweight
        amrap
        completed
        id
      }
    }
  }
`;

export function useGetExercises() {
  const { id } = useParams();
  const { data, loading } = useQuery(ALL_EXERCISES, {
    variables: { where: { session: { id } } }
  });

  return loading ? { data, loading } : { data: data.exercises, loading };
};
