import NavBar from "../components-app/NavBar";
import TableReports from "./../components-app/table-reports";
import { ChartReport } from "../components-app/chart-reports";
const Reports = () => {
  
  return (
    <div className="flex overflow-x-hidden text-gray-400 flex-col min-h-screen">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <NavBar />
        </div>
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8 mt-20">
            <h1 className="text-4xl  font-bold text-white dark:text-white">
              Reports
            </h1>
            <p className="mt-2 text-gray-400 dark:text-slate-400">
              Generate and export detailed financial reports.
            </p>
          </div>
          <div className="space-y-8">
            <div className="bg-background-light dark:bg-background-dark/50 border border-[#3CB371] dark:border-primary/30 rounded-xl p-6">
              <h3 className="text-lg font-bold text-white dark:text-white mb-4">
                Report Filters
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    className="block text-sm font-medium text-gray-400 dark:text-slate-300 mb-2"
                    htmlFor="date-range"
                  >
                    Date Range
                  </label>
                  <select
                    className="w-full h-12 px-4 bg-background-light dark:bg-background-dark border border-primary/30 dark:border-primary/40 rounded-lg text-gray-400 dark:text-slate-300 focus:ring-primary focus:border-primary"
                    id="date-range"
                    name="date-range"
                  >
                    <option>Last 30 Days</option>
                    <option>Last 90 Days</option>
                    <option>This Year</option>
                    <option>All Time</option>
                  </select>
                </div>
                <div>
                  <label
                    className="block text-sm font-medium text-gray-400 dark:text-slate-300 mb-2"
                    htmlFor="category"
                  >
                    Category
                  </label>
                  <select
                    className="w-full h-12 px-4 bg-background-light dark:bg-background-dark border border-primary/30 dark:border-primary/40 rounded-lg text-gray-400 dark:text-slate-300 focus:ring-primary focus:border-primary"
                    id="category"
                    name="category"
                  >
                    <option>All Categories</option>
                    <option>Groceries</option>
                    <option>Utilities</option>
                    <option>Income</option>
                    <option>Dining</option>
                    <option>Transportation</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="  bg-background-light dark:bg-background-dark/50 dark:border-primary/30 rounded-xl overflow-hidden">
              <div className="p-6 ">
                <h3 className="text-lg font-bold text-white dark:text-white">
                  Report Summary
                </h3>
              </div>
              <div className="overflow-x-auto">
                <TableReports />
              </div>
            </div>
            <ChartReport/>
             <div className="flex justify-end gap-4">
              <button
                className="h-12 px-6 rounded-lg bg-[#359a62] dark:bg-primary/30 text-white font-bold text-sm hover:bg-[#2c8a56] dark:hover:bg-primary/40 transition-colors"
              >
                Export PDF
              </button>
              <button
                className="h-12 px-6 rounded-lg bg-[#3CB371] text-white font-bold text-sm hover:opacity-90 transition-opacity"
              >
                Export CSV
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Reports;
