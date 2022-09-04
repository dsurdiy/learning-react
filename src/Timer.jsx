import { useDispatch, useSelector } from "react-redux";
import * as timerActions from "./redux/timerActions";
import css from "./Timer.module.css";

export const Timer = () => {
  const dispatch = useDispatch();
  const value = useSelector((state) => state.timer);

  return (
    <div className={css.container}>
      <button
        type="button"
        className={css.button}
        onClick={() => dispatch(timerActions.decrement(5))}
      >
        &#8722;
      </button>
      <p className={css.value}>{value} minutes</p>
      <button
        type="button"
        className={css.button}
        onClick={() => dispatch(timerActions.increment(5))}
      >
        &#43;
      </button>
    </div>
  );
};
