import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const Counter = () => {
  const dispatch = useDispatch();
  const countervalue = useSelector((state) => state.counteNum.counterValue);
  console.log(countervalue);

  const incrementBtn = () => {
    dispatch({
      type: "increment",
    });
  };
  const decrementBtn = () => {
    dispatch({
      type: "decrement",
    });
  };
  const incrementBtnfive = () => {
    dispatch({
      type: "incrementByFive",
      payload: 25,
    });
  };

  return (
    <>
      <h2>{countervalue}</h2>
      <div className="d_flex">
        <button onClick={decrementBtn}>Decrement</button>
        <button onClick={incrementBtn}>Increment</button>
        <button onClick={incrementBtnfive}>Increment</button>
      </div>
    </>
  );
};

export default Counter;
