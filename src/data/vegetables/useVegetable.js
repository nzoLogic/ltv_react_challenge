import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchVegetables } from './actions';

const useVegetable = () => {
  const vegetables = useSelector(({ vegetable }) => vegetable.vegetables);
  const dispatch = useDispatch();

  const fetchVegetablesData = useCallback(
    () => dispatch(fetchVegetables()),
    [dispatch]
  )
  return {
    vegetables,
    fetchVegetablesData
  }
}

export default useVegetable;