import { useDispatch } from "react-redux";
import { useState } from "react";
import { incrementByAmount } from "./slicer1";

const CustomCounter = () => {
  const [value, setValue] = useState();
  const dispatch = useDispatch();

  return (
    <div style={{ marginTop: "20px" }}>
      <h3>Custom Increment</h3>

      <input
        type="number"
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
      />

      <button onClick={() => dispatch(incrementByAmount(value))}>
        Add
      </button>
    </div>
  );
};

export default CustomCounter;