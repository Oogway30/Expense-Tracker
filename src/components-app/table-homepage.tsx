type dataItem = {
  id: number;
  date: string;
  category: string;
  description: string;
  amount: number;
};

type TableReportsProps = {
  data: dataItem[];
};
const TableHomepage: React.FC<TableReportsProps> = ({ data }) => {
  return (
    <div className="overflow-hidden w-[90%] mx-auto rounded-xl  border-[1.5px] border-green-800 dark:border-primary/30 bg-background-light dark:bg-background-dark">
      <div className="overflow-x-auto">
        <table className="min-w-[100%] backdrop-blur-xs bg-white/0.5 divide-y divide-primary/20 dark:divide-primary/30">
          <thead className="bg-[rgb(22,51,32)] w-[100%] dark:bg-primary/10">
            <tr>
              <th
                className="px-25 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-400 dark:text-slate-300"
                scope="col"
              >
                Date
              </th>
              <th
                className="px-25 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-400 dark:text-slate-300"
                scope="col"
              >
                Category
              </th>
              <th
                className="px-25 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-400 dark:text-slate-300"
                scope="col"
              >
                Description
              </th>
              <th
                className="px-25 py-3 text-right text-xs font-medium uppercase tracking-wider text-gray-400 dark:text-slate-300"
                scope="col"
              >
                Amount
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-primary/20 dark:divide-primary/30">
           {data ? (
            data.map((item) => (
              <tr
                key={item.id}
                className="border-t  border-[#3CB371] dark:border-primary/30"
              >
                <td className="px-6 py-4 font-medium text-gray-400 dark:text-slate-200">
                  {item.date}
                </td>
                <td className="px-6 py-4">{item.category}</td>
                <td className="px-6 py-4">{item.description}</td>
                <td className="px-6 py-4 text-right text-red-500">
                  {item.amount} €
                </td>
              </tr>
            ))
          ) : (
            <tr className="h-[15rem]">
              <td colSpan={4} className="text-center text-2xl w-full">
                No Data Available!
              </td>
            </tr>
          )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableHomepage;
