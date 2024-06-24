import React, { useState } from "react";

const Clock: React.FC = () => {
  const [times, setTimes] = useState(new Date());
  setInterval(() => {
    setTimes(new Date());
  }, 1000);
  return (
    <div>
      <h2>현재 시간 : {times.toLocaleTimeString()}시 </h2>
    </div>
  );
};

export default Clock;
