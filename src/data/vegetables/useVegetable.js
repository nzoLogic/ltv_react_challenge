import { useSelector } from 'react-redux';

const useVegetable = () => {
  const vegetables = useSelector(({ vegetable }) => vegetable.vegetables);

  return {
    vegetables
  }
}

export default useVegetable;