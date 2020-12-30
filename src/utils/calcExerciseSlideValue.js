import { WINDOW_INNERWIDTH_PERCENTAGE } from '../constants';

export function calcExerciseSlideValue(xPos, direction, amountOfExercises) {
  const MAX_VALUE = -amountOfExercises * WINDOW_INNERWIDTH_PERCENTAGE;
  const MIN_VALUE = WINDOW_INNERWIDTH_PERCENTAGE;

  let nextValue = xPos - WINDOW_INNERWIDTH_PERCENTAGE;
  let prevValue = xPos + WINDOW_INNERWIDTH_PERCENTAGE;

  if (direction === 'prev' && prevValue !== MIN_VALUE) return prevValue;
  if (direction === 'next' && nextValue !== MAX_VALUE) return nextValue;

  if (direction === 'prev') return MIN_VALUE - WINDOW_INNERWIDTH_PERCENTAGE;
  if (direction === 'next') return MAX_VALUE + WINDOW_INNERWIDTH_PERCENTAGE;
};
