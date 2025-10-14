import NavBar from "./components-app/NavBar";
import DataShowingHomepage from "./components-app/data-showing-homepage";
import "./App.css";
import TableHomepage from "./components-app/table-homepage";
import { ChartBarDefault } from "./components-app/chart-homepage";
import { PaginationHomepage } from "./components-app/pagination";
import { useState } from "react";
function App() {
  let [data] = useState([
    {
      key: 1,
      date: "2024-07-26",
      category: "Food",
      description: "Lunch at Cafe",
      amount: -12.50,
    },
    {
      key: 2,
      date: "2024-07-26",
      category: "Transportation",
      description: "Bus fare",
      amount: -2.00,
    },
    {
      key: 3,
      date: "2024-07-26",
      category: "Entertainment",
      description: "Movie ticket",
      amount: -15.00,
    },
    {
      key: 4,
      date: "2024-07-26",
      category: "Shopping",
      description: "Grocery shopping",
      amount: 50.00,
    },
    {
      key: 5,
      date: "2024-07-26",
      category: "Utilities",
      description: "Electricity bill",
      amount: 75.00,
    },
    {
      key: 6,
      date: "2024-07-26",
      category: "Health",
      description: "Doctor's appointment",
      amount: -100.00,
    },
    {
      key: 7,
      date: "2024-07-26",
      category: "Miscellaneous",
      description: "Gift for friend",
      amount: 30.00,
    },  
  ]);
  return (
    <div className="noto-sans-jp">
      <div>
        <NavBar />
      </div>
      <div className="mt-30 gap-10 pb-10 px-2.5 flex flex-col">
        <div className="md:w-[90%] text-center md:text-start flex justify-start flex-col mx-auto  w-auto  ">
          <h1 className="text-4xl mb-1">
            Welcome to Dashboard
            </h1>
          <p className="sm:translate-x-1.5 text-gray-400 flex justify-center md:justify-start">Overview of your financial decisions</p>
        </div>
        <div className="flex w-[90%] mx-auto gap-5 md:flex-row items-center md:items-start flex-col justify-center md:justify-start">
          <div
            className="flex-2 text-white md:w-auto w-[100%]
        "
          >
            <ChartBarDefault />
          </div>
          <div className="flex-1 md:space-y-10 h-[100%]">
            <DataShowingHomepage />
          </div>
        </div>
      </div>
      <div className="px-2.5 gap-10 pb-10 flex flex-col items-center w-full">
        <TableHomepage data={data}/>
        <PaginationHomepage />
      </div>
    </div>
  );
}

export default App;
