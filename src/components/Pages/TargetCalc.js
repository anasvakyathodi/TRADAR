import React, { useState, useEffect } from "react";
import Input from "./../Input";
import DarkModeButton from "../DarkModeButton";

const TargetCalc = ({ darkMode, setDarkMode }) => {
  const [data, setData] = useState({
    cash: "",
    percentage: "",
    result: "",
  });
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (data.percentage !== "" && data.cash !== "") {
      const res =
        parseFloat(data.cash) + parseFloat((data.cash * data.percentage) / 100);
      setData({ ...data, result: res });
    } else {
      setData({ ...data, result: "" });
    }
  }, [data.cash, data.percentage]);

  return (
    <div className="flex flex-col h-screen bg-gray-100 dark:bg-gray-800">
      <DarkModeButton darkmode={darkMode} setDarkMode={setDarkMode} />
      <div className="grid place-items-center mx-2 my-20 sm:my-auto">
        <div
          className="w-11/12 p-12 sm:w-8/12 md:w-6/12 lg:w-5/12 2xl:w-4/12 
            px-6 py-10 sm:px-10 sm:py-6 
            bg-white rounded-lg shadow-md lg:shadow-lg"
        >
          <h2 className="text-center font-semibold text-3xl lg:text-4xl text-gray-800">
            Find T/SL
          </h2>
          <form className="m-10">
            <Input
              id="cash"
              type="number"
              name="cash"
              placeholder="Amount"
              value={data.cash}
              onChange={handleChange}
              autoFocus
              required
            />
            <Input
              id="percentage"
              type="number"
              placeholder="Percentage"
              name="percentage"
              value={data.percentage}
              onChange={handleChange}
              min="-100"
              max="100"
            />
            <Input
              id="result"
              type="number"
              value={data.result}
              name="result"
              disabled
              placeholder="Result"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default TargetCalc;
