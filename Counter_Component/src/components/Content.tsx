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

  return (
    <>
      <main>
        <div className="container text-center">
          <div className="row py-4">
            <div className="col">
              <h1>
              LEVEL UP
              <div className="row"></div>
            {counter}</h1>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <button className="btn btn-danger" onClick={minusNum}>
                -
              </button>

              <button className="btn btn-success" onClick={plusNum}>
                +
              </button>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <button className="btn btn-warning" onClick={resetNum}>
                RESET
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Content;
