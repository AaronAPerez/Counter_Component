import { useState } from "react"; // Import the useState hook from React

const Content = () => {
  // functional component called "Content"
  const [counter, setCounter] = useState(0); // Initialize the "counter" state with 0 using the useState hook

  const minusNum = () => {
    // function to decrease the counter
    setCounter((minusNum) => (minusNum > 0 ? minusNum - 1 : 0));
  }; //// Update the counter state by decreasing it if it's greater than 0, otherwise set it to 0

  const plusNum = () => {
    // function to increase the counter
    setCounter((plusNum) => plusNum + 1); // Update the counter state by increasing it
  };

  const resetNum = () => {
    // function to reset the counter
    setCounter(0); // Update the counter state by setting it to 0
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
                {counter}{" "}
                {/* Display the {counter} text "LEVEL UP" and the current value of the counter */}
              </h1>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <button className="btn btn-danger" onClick={minusNum}>
                - {/* Button to decrease the counter */}
              </button>

              <button className="btn btn-success" onClick={plusNum}>
                + {/* Button to increase the counter */}
              </button>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <button className="btn btn-warning" onClick={resetNum}>
                RESET {/* Button to reset the counter */}
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Content; // Export the Content component
