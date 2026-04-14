import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset } from "./slicer1";

const Counter = () => {
  const count = useSelector((state) => state.slice1.count);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>{count}</h2>

      <button onClick={() => dispatch(increment())}>Inc</button>
      <button onClick={() => dispatch(decrement())}>Dec</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
    </div>
  );
};

export default Counter;