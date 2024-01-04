import { useDispatch } from 'react-redux';

import { decrement, increment } from '@/features/product/productSlice';

export const Counter = ({ count }) => {
  const dispatch = useDispatch();

  return (
    <div>
      <button className="rounded-md bg-black p-2 text-white" onClick={() => dispatch(increment())}>
        Increment
      </button>
      <span>{count}</span>
      <button className="rounded-md bg-black p-2 text-white" onClick={() => dispatch(decrement())}>
        Decrement
      </button>
    </div>
  );
};
