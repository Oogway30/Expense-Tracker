import { useState } from "react";
const TableHomepage = () => {
  let [data] = useState([
    {
      key: 1,
      date: "2024-07-26",
      category: "Food",
      description: "Lunch at Cafe",
      amount: "-$12.50",
      positive: false
    },
    {
      key: 2,
      date: "2024-07-26",
      category: "Transportation",
      description: "Bus fare",
      amount: "-$2.00",
      positive: false
    },
    {
      key: 3,
      date: "2024-07-26",
      category: "Entertainment",
      description: "Movie ticket",
      amount: "-$15.00",
      positive: false
    },
    {
      key: 4,
      date: "2024-07-26",
      category: "Shopping",
      description: "Grocery shopping",
      amount: "$50.00",
      positive: true
    },
    {
      key: 5,
      date: "2024-07-26",
      category: "Utilities",
      description: "Electricity bill",
      amount: "$75.00",
      positive: true
    },
    {
      key: 6,
      date: "2024-07-26",
      category: "Health",
      description: "Doctor's appointment",
      amount: "-$100.00",
      positive: false
    },
    {
      key: 7,
      date: "2024-07-26",
      category: "Miscellaneous",
      description: "Gift for friend",
      amount: "$30.00",
      positive: true
    },  
  ]);

  return (
    <div className="overflow-hidden w-[90%] mx-auto rounded-xl  border-[1.5px] border-green-800 dark:border-primary/30 bg-background-light dark:bg-background-dark">
      <div className="overflow-x-auto">
        <table className="min-w-[100%] backdrop-blur-xs bg-white/0.5 divide-y divide-primary/20 dark:divide-primary/30">
          <thead className="bg-[rgb(22,51,32)] w-[100%] dark:bg-primary/10">
            <tr>
              <th
                className="px-25 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-400 dark:text-gray-400"
                scope="col"
              >
                Date
              </th>
              <th
                className="px-25 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-400 dark:text-gray-400"
                scope="col"
              >
                Category
              </th>
              <th
                className="px-25 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-400 dark:text-gray-400"
                scope="col"
              >
                Description
              </th>
              <th
                className="px-25 py-3 text-right text-xs font-medium uppercase tracking-wider text-gray-400 dark:text-gray-400"
                scope="col"
              >
                Amount
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-primary/20 dark:divide-primary/30">
            
            {data.map((item) => {
              return (
                <tr key={item.key}>
                  <td className="whitespace-nowrap px-25 py-4 text-sm text-[rgb(201,209,212)] dark:text-gray-200">
                    {item.date}
                  </td>
                  <td className="whitespace-nowrap px-25 py-4 text-sm text-gray-400 dark:text-gray-400">
                    {item.category}
                  </td>
                  <td className="whitespace-nowrap px-25 py-4 text-sm text-gray-400 dark:text-gray-400">
                    {item.description}
                  </td>
                 {item.positive ? (
                   <td className="whitespace-nowrap px-25 py-4 text-right text-sm font-medium  text-green-500">
                   {item.amount}
                 </td>
                 ) : (
                   <td className="whitespace-nowrap px-25 py-4 text-right text-sm font-medium text-red-500">
                     {item.amount}
                   </td>
                 )}
                </tr>
              );
            })}
            
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableHomepage;
