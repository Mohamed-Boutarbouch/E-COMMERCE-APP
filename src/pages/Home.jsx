import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { fetchProducts } from '@/services/products';
import DisplayProducts from '@/components/DisplayProducts';
import Counter from '@/components/Counter';

const Home = () => {
  const { value: count, products, loading, error } = useSelector((state) => state.product);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading) {
    return <p>LOADING...</p>;
  }

  if (error.hasError) {
    return <p>{error.message}</p>;
  }

  return (
    <main>
      <Counter count={count} />
      <DisplayProducts products={products} />
    </main>
  );
};

export default Home;
