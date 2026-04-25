import React from "react";
import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const handleIncrease = () => {
    setCount(prev => prev+ 1);
  };
  return (
    <div className=" h-screen flex justify-center items-center bg-gray-600">
      <div className="bg-white p-10 rounded text-center shadow">
        <h1 className="text-3xl mb-4">Counter App</h1>
        <h2 className="mb-4 text-3xl">{count}</h2>
        <button className="bg-blue-200 text-xl px-4 py-2 rounded"
        onClick={handleIncrease}>
          Add count
        </button>
      </div>
    </div>
  );
};

export default App;
