import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../redux/store";

export const Layout = () => {
  const value = useSelector((state) => state.myValue);
  const dispatch = useDispatch();

  return (
    <div>
      {value}
      <button onClick={() => dispatch(increment(100))}>Increment</button>
      <button onClick={() => dispatch(decrement(50))}>Decrement</button>
    </div>
  );
};
