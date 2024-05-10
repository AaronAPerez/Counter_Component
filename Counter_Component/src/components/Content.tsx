import { useState } from "react";

const Content = () => {
  const [counter, setCounter] = useState(0);

  const minusNum = () => {
    setCounter((minusNum) => (minusNum > 0 ? minusNum - 1 : 0));
  };

  const plusNum = () => {
    setCounter((plusNum) => plusNum + 1);
  };

  const resetNum = () => {
    setCounter(0);
  };

  // return alert (
  //   "The counter is not allowed to be negative");

  return (
    <>
      <main>
        <div className="container centerStyle">
          <div className="displayStyle moveIt">Current Number: {counter}</div>
            <div className="displayStyle m-3">
              <button className="btn btn-danger" onClick={minusNum}>-</button>
              <button className="btn btn-success" onClick={plusNum}>+</button>
              <button className="btn btn-warning" onClick={resetNum}>RESET</button>
            </div>
        </div>
      </main>
    </>
  );
};

export default Content;
