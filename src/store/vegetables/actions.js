export const VEGETABLES = '[Vegetables]:'

export const FETCH_VEGETABLES = `${ VEGETABLES } FETCH_VEGETABLES`;
export const FETCH_VEGETABLES_SUCCESS = `${ VEGETABLES } FETCH_VEGETABLES_SUCCESS`;
export const SET_VEGETABLES = `${ VEGETABLES } SET_VEGETABLES`;

export const fetchVegetables = () => ({
  type: FETCH_VEGETABLES
})

export const setVegetables = payload => ({
  type: SET_VEGETABLES,
  payload
})