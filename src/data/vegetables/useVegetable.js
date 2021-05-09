import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchVegetables } from './actions';

/**
 * This is an example of using an interface adapter that serves as the glue that connects our UI pieces to application and business specific rules.
 * They are dirtier in nature and know how to connect our UI requirements with the inner business rules.
 * 
 * This shields our dumb UI components, which are only concerned with UI-specific functionality, and our business rules from details of how they are 
 * implemented
 * 
 */
const useVegetable = () => {
  // grab slices we need from our store
  const { vegetables, isFetching } = useSelector(({ vegetable }) => vegetable);
  const dispatch = useDispatch();

  // expose required functionality to be used in a genergic way
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