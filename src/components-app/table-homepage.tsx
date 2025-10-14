
type dataItem = {
  key: number;
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
                 {item.amount>0 ? (
                   <td className="whitespace-nowrap px-25 py-4 text-right text-sm font-medium  text-green-500">
                   {item.amount} €

                 </td>
                 ) : (
                   <td className="whitespace-nowrap px-25 py-4 text-right text-sm font-medium text-red-500">
                     {item.amount} €
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
