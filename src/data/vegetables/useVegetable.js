import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchVegetables } from './actions';

const useVegetable = () => {
  const { vegetables, isFetching } = useSelector(({ vegetable }) => vegetable);
  const dispatch = useDispatch();

  const fetchVegetablesData = useCallback(
    () => dispatch(fetchVegetables()),
    [dispatch]
  )
  return {
    vegetables,
    isFetching,
    fetchVegetablesData
  }
}

export default useVegetable;