export function getNavigateBackwardsValue(currentExerciseIndex, amountOfExercises) {
  let nextExerciseIndex = currentExerciseIndex;

  if (currentExerciseIndex === amountOfExercises - 1) {
    nextExerciseIndex += 1;
  } else if (currentExerciseIndex <= amountOfExercises - 1) {
    nextExerciseIndex += 2;
  };

  return -nextExerciseIndex;
};

export function getNextSlug(data, currentExerciseIndex, amountOfExercises) {
  let nextSlug = '';
  if (currentExerciseIndex === amountOfExercises - 1) {
    nextSlug = data[currentExerciseIndex].slug;
  } else if (currentExerciseIndex < amountOfExercises) {
    nextSlug = data[currentExerciseIndex + 1].slug;
  };

  return nextSlug;
};
