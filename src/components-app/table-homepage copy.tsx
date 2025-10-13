
const TableHomepage = () => {
  return (
    <div
              className="overflow-hidden rounded-xl border border-primary/20 dark:border-primary/30 bg-background-light dark:bg-background-dark"
            >
              <div className="overflow-x-auto">
                <table
                  className="min-w-full divide-y divide-primary/20 dark:divide-primary/30"
                >
                  <thead className="bg-primary/5 dark:bg-primary/10">
                    <tr>
                      <th
                        className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400"
                        scope="col"
                      >
                        Date
                      </th>
                      <th
                        className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400"
                        scope="col"
                      >
                        Category
                      </th>
                      <th
                        className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400"
                        scope="col"
                      >
                        Description
                      </th>
                      <th
                        className="px-6 py-3 text-right text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400"
                        scope="col"
                      >
                        Amount
                      </th>
                    </tr>
                  </thead>
                  <tbody
                    className="divide-y divide-primary/20 dark:divide-primary/30"
                  >
                    <tr>
                      <td
                        className="whitespace-nowrap px-6 py-4 text-sm text-gray-900 dark:text-gray-200"
                      >
                        2024-07-26
                      </td>
                      <td
                        className="whitespace-nowrap px-6 py-4 text-sm text-gray-500 dark:text-gray-400"
                      >
                        Food
                      </td>
                      <td
                        className="whitespace-nowrap px-6 py-4 text-sm text-gray-500 dark:text-gray-400"
                      >
                        Lunch at Cafe
                      </td>
                      <td
                        className="whitespace-nowrap px-6 py-4 text-right text-sm font-medium text-red-500"
                      >
                        -$12.50
                      </td>
                    </tr>
                    <tr>
                      <td
                        className="whitespace-nowrap px-6 py-4 text-sm text-gray-900 dark:text-gray-200"
                      >
                        2024-07-26
                      </td>
                      <td
                        className="whitespace-nowrap px-6 py-4 text-sm text-gray-500 dark:text-gray-400"
                      >
                        Transportation
                      </td>
                      <td
                        className="whitespace-nowrap px-6 py-4 text-sm text-gray-500 dark:text-gray-400"
                      >
                        Bus fare
                      </td>
                      <td
                        className="whitespace-nowrap px-6 py-4 text-right text-sm font-medium text-red-500"
                      >
                        -$2.00
                      </td>
                    </tr>
                    <tr>
                      <td
                        className="whitespace-nowrap px-6 py-4 text-sm text-gray-900 dark:text-gray-200"
                      >
                        2024-07-25
                      </td>
                      <td
                        className="whitespace-nowrap px-6 py-4 text-sm text-gray-500 dark:text-gray-400"
                      >
                        Shopping
                      </td>
                      <td
                        className="whitespace-nowrap px-6 py-4 text-sm text-gray-500 dark:text-gray-400"
                      >
                        Grocery store
                      </td>
                      <td
                        className="whitespace-nowrap px-6 py-4 text-right text-sm font-medium text-red-500"
                      >
                        -$18.00
                      </td>
                    </tr>
                    <tr>
                      <td
                        className="whitespace-nowrap px-6 py-4 text-sm text-gray-900 dark:text-gray-200"
                      >
                        2024-07-25
                      </td>
                      <td
                        className="whitespace-nowrap px-6 py-4 text-sm text-gray-500 dark:text-gray-400"
                      >
                        Entertainment
                      </td>
                      <td
                        className="whitespace-nowrap px-6 py-4 text-sm text-gray-500 dark:text-gray-400"
                      >
                        Movie ticket
                      </td>
                      <td
                        className="whitespace-nowrap px-6 py-4 text-right text-sm font-medium text-red-500"
                      >
                        -$10.00
                      </td>
                    </tr>
                    <tr>
                      <td
                        className="whitespace-nowrap px-6 py-4 text-sm text-gray-900 dark:text-gray-200"
                      >
                        2024-07-24
                      </td>
                      <td
                        className="whitespace-nowrap px-6 py-4 text-sm text-gray-500 dark:text-gray-400"
                      >
                        Income
                      </td>
                      <td
                        className="whitespace-nowrap px-6 py-4 text-sm text-gray-500 dark:text-gray-400"
                      >
                        Freelance work
                      </td>
                      <td
                        className="whitespace-nowrap px-6 py-4 text-right text-sm font-medium text-primary"
                      >
                        +$100.00
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
  )
}

export default TableHomepage
