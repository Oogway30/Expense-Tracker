type TransactionItem = {
  date?: string;
  category?: string;
  description?: string;
  amount?: number;
};

type TableReportsProps = {
  transaction?: TransactionItem[];
};

const TableReports: React.FC<TableReportsProps> = ({ transaction }) => {
  return (
    <div>
      <table className="min-w-full mb-10 rounded-2xl text-sm text-left text-slate-500 dark:text-slate-400">
        <thead className="bg-primary/20 dark:bg-primary/30 text-xs text-slate-700 dark:text-slate-300 uppercase">
          <tr>
            <th
              className="px-6 py-3 text-gray-400 dark:text-slate-300"
              scope="col"
            >
              Date
            </th>
            <th
              className="px-6 py-3 text-gray-400 dark:text-slate-300"
              scope="col"
            >
              Category
            </th>
            <th
              className="px-6 py-3 text-gray-400 dark:text-slate-300"
              scope="col"
            >
              Description
            </th>
            <th
              className="px-6 py-3 text-gray-400 dark:text-slate-300 text-right"
              scope="col"
            >
              Amount
            </th>
          </tr>
        </thead>
        <tbody>
          {transaction ? transaction.map((item, index) => (
            <tr
              key={index}
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
          )) :<tr className="h-[15rem]">
  <td colSpan={4} className="text-center text-2xl w-full">
    No Data Available!
  </td>
</tr>
}
        </tbody>
      </table>
    </div>
  );
};
export default TableReports;
