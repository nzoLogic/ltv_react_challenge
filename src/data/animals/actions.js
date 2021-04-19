import {
  ANIMALS_FETCHING,
  ANIMALS_FETCH_SUCCESS,
  ANIMALS_FETCH_ERROR,
} from './constants';

export const AnimalsRequest = () => ({
  type: ANIMALS_FETCHING,
});

export const AnimalsSuccess = (animals) => ({
  type: ANIMALS_FETCH_SUCCESS,
  animals,
});

export const AnimalsError = (errors) => ({
  type: ANIMALS_FETCH_ERROR,
  errors,
});
