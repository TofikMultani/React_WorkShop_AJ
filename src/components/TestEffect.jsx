import React, { useEffect, useState } from "react";

const TestEffect = () => {
  const [laps, setLaps] = useState([]);
  const [count, setCount] = useState(0);
  const [hh, setHh] = useState(0);
  const [mm, setMm] = useState(0);
  const [ss, setSs] = useState(0);
  useEffect(() => {
    let s = count;
    let m = s / 60;
    s = s % 60;
    let h = m / 60;
    m = m % 60;
    s = Math.floor(s);
    m = Math.floor(m);
    h = Math.floor(h);
    setHh(h);
    setMm(m);
    setSs(s);
    setTimeout(() => {
      setCount(count + 1);
    }, 1000);
    return () => {};
  }, [count]);
  const addLaps = () => {
    setLaps((s) => [`${hh}:${mm}:${ss}`, ...s]);
  };
  return (
    <div>
      <p>
        Time: {hh}:{mm}:{ss}
      </p>
      <button onClick={addLaps}>Record</button>
      {laps.map((lap) => (
        <p>{lap}</p>
      ))}
    </div>
  );
};

export default TestEffect;
