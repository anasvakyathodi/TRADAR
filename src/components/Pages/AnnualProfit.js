import React, { useState, useEffect } from "react";
import Input from "./../Input";
import DarkModeButton from "../DarkModeButton";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

const AnnualProfit = ({ darkMode, setDarkMode }) => {
  const [data, setData] = useState({
    cash: "",
    percentage: "",
    type: "",
    result: "",
  });
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (data.percentage !== "" && data.cash !== "" && data.type !== "") {
      let res = 0;
      switch (parseInt(data.type)) {
        case 0:
          res =
            (parseFloat(data.cash) * parseFloat(data.percentage) * 240) / 100;
          break;

        case 1:
          res =
            (parseFloat(data.cash) * parseFloat(data.percentage) * 48) / 100;
          break;

        case 0:
          res =
            (parseFloat(data.cash) * parseFloat(data.percentage) * 12) / 100;
          break;

        default:
          alert("Invalid Input!!!");
          break;
      }

      setData({ ...data, result: res });
    } else {
      setData({ ...data, result: "" });
    }
  }, [data.cash, data.percentage, data.type]);

  return (
    <div className="flex flex-col h-screen bg-gray-100 dark:bg-gray-800">
      <DarkModeButton darkmode={darkMode} setDarkMode={setDarkMode} />
      <div className="grid place-items-center mx-2 my-20 sm:my-auto">
        <div
          className="w-11/12 p-12 sm:w-8/12 md:w-6/12 lg:w-5/12 2xl:w-4/12 
            px-6 py-10 sm:px-10 sm:py-6 
            bg-white rounded-lg shadow-md lg:shadow-lg"
        >
          <Link to="/">
            <Icon icon="typcn:arrow-back" width="40" height="40" />
          </Link>
          <h2 className="text-center font-semibold text-3xl lg:text-4xl text-gray-800">
            Find Annual Profit
          </h2>
          <form className="m-10">
            <Input
              id="cash"
              type="number"
              name="cash"
              label="Capital"
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
              label="Gain/Loss Percentage"
              name="percentage"
              value={data.percentage}
              onChange={handleChange}
              min="-100"
              max="100"
            />
            <label
              htmlFor="type-state"
              className="block text-xs font-semibold my-4 text-gray-600 uppercase"
            >
              Range
            </label>
            <select
              className="block appearance-none w-full  bg-grey-lighter border border-grey-lighter text-grey-darker py-3 px-4 pr-8 rounded"
              id="type-state"
              name="type"
              onChange={handleChange}
              value={data.type}
            >
              <option value="">Select Range</option>
              <option value="0">Daily</option>
              <option value="1">Weekly</option>
              <option value="2">Monthly</option>
            </select>
            <Input
              id="result"
              type="number"
              label="Profit/Loss Per Annum"
              value={data.result}
              name="result"
              disabled
              placeholder="Result"
            />
            <Input
              id="totalProfit"
              type="number"
              label="Total"
              value={parseFloat(data.result) + parseFloat(data.cash) || ""}
              name="result"
              disabled
              placeholder="Total Asset"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AnnualProfit;
