import React from "react";

const TestState = () => {
  const [count, setCount] = React.useState(0);
  return (
    <center>
      <div>
        <p>{count}</p>
        <button onClick={() => setCount(count + 1)}>Click Me</button>
      </div>
    </center>
  );
};
export default TestState;
