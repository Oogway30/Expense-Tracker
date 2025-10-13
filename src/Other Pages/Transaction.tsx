import NavBar_Back from "../components-app/NavBar-Back";
import { useForm, type SubmitHandler } from "react-hook-form";

type Inputs = {
  amount: number;
  category_form: string;
  date: string;
  description: string;
  positive: boolean;
};
const Transaction = () => {
  const { register, handleSubmit, watch } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    data.positive = data.amount >= 0 ? true : false;
    console.log(data);
  };

  console.log(watch("amount")); // watch input value by passing the name of it

  return (
    <>
      <div>
        <NavBar_Back />
      </div>
      <main className="flex flex-1 md:flex-row flex-col items-center justify-center py-30 sm:px-6 lg:px-8">
        <div
            className="md:w-[50vw] w-[100vw] flex-col items-center justify-center space-y-6 lg:flex"
          >
            <div
              className="w-full max-w-md rounded-xl bg-background-dark/50 p-6 shadow-sm"
            >
              <h3 className="text-xl font-bold text-background-light">
                Today's Spending
              </h3>
              <div className="mt-4 flex items-center justify-between">
                <p className="text-4xl font-extrabold text-green-500">$124.50</p>
                <p className="text-sm text-background-light/70">
                  from 5 transactions
                </p>
              </div>
              <div className="mt-6">
                <h4 className="text-sm font-medium text-background-light/80">
                  Recent Transactions
                </h4>
                <ul className="mt-3 space-y-3">
                  <li className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div
                        className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/20 text-primary"
                      >
                        <span className="material-symbols-outlined">
                          shopping_cart
                        </span>
                      </div>
                      <div>
                        <p className="font-medium text-background-light">
                          Groceries
                        </p>
                        <p className="text-xs text-background-light/60">
                          SuperMart
                        </p>
                      </div>
                    </div>
                    <p className="font-bold text-background-light text-red-500">-$45.75</p>
                  </li>
                  <li className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div
                        className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/20 text-primary"
                      >
                        <span className="material-symbols-outlined"> movie </span>
                      </div>
                      <div>
                        <p className="font-medium text-background-light">
                          Entertainment
                        </p>
                        <p className="text-xs text-background-light/60">
                          Cinema City
                        </p>
                      </div>
                    </div>
                    <p className="font-bold text-background-light text-red-500">-$22.00</p>
                  </li>
                  <li className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div
                        className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/20 text-primary"
                      >
                        <span className="material-symbols-outlined"> train </span>
                      </div>
                      <div>
                        <p className="font-medium text-background-light">
                          Transport
                        </p>
                        <p className="text-xs text-background-light/60">
                          Metro Ticket
                        </p>
                      </div>
                    </div>
                    <p className="font-bold text-background-light text-red-500">-$5.50</p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="relative w-full max-w-md">
              <div
                className="absolute inset-0 rounded-xl bg-gradient-to-tr from-primary/30 to-primary/10 opacity-30 blur-2xl"
              ></div>
              <svg
                className="relative w-full text-primary/50"
                viewBox="0 0 400 200"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient gradientTransform="rotate(45)" id="grad1">
                    <stop
                      offset="0%"
                      stop-color="rgba(32, 223, 108, 0.2)"
                    ></stop>
                    <stop
                      offset="100%"
                      stop-color="rgba(32, 223, 108, 0)"
                    ></stop>
                  </linearGradient>
                </defs>
                <path
                  d="M 0 100 C 50 50, 150 50, 200 100 S 350 150, 400 100"
                  fill="none"
                  stroke="url(#grad1)"
                  stroke-width="4"
                ></path>
                <path
                  d="M 0 120 C 60 160, 160 160, 200 120 S 340 80, 400 120"
                  fill="none"
                  stroke="url(#grad1)"
                  stroke-dasharray="8,8"
                  stroke-width="4"
                ></path>
              </svg>
            </div>
          </div>
          <div className="w-full max-w-md  space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-background-dark dark:text-background-light">
              Add New Transaction
            </h2>
            <p className="mt-2 text-center text-sm text-background-dark/60 dark:text-background-light/60">
              Keep track of your spending effortlessly.
            </p>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            action="#"
            className=" mt-8 space-y-6"
            method="POST"
          >
            <div className="space-y-4 rounded-lg bg-background-light p-6 shadow-sm dark:bg-background-dark/50">
              <div>
                <label
                  className="block text-sm font-medium text-background-dark dark:text-background-light"
                  htmlFor="amount"
                >
                  Amount
                </label>
                <div className="relative mt-1 rounded-lg">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <span className="text-background-dark/50 dark:text-background-light/50">
                      $
                    </span>
                  </div>
                  <input
                    {...register("amount", {
                      required: true,
                      valueAsNumber: true,
                    })}
                    className=" block w-full rounded-lg border border-[#3CB371] bg-background-light py-3 pl-7 pr-4 text-background-dark placeholder-background-dark/50 focus:border-[#3CB371] focus:outline-none focus:ring-primary dark:border-primary/40 dark:bg-background-dark dark:text-background-light dark:placeholder-background-light/50 dark:focus:border-primary"
                    id="amount"
                    name="amount"
                    placeholder="0.00"
                    type="number"
                  />
                </div>
              </div>
              <div>
                <label
                  className="block text-sm font-medium text-background-dark dark:text-background-light"
                  htmlFor="category"
                >
                  Category
                </label>
                <select
                  className="form-select mt-1 block w-full appearance-none rounded-lg border border-[#3CB371] bg-background-light py-3 pl-3 pr-10 text-background-dark focus:border-primary focus:outline-none focus:ring-primary dark:border-primary/40 dark:bg-background-dark dark:text-background-light"
                  id="category"
                  {...register("category_form", { required: true })}
                >
                  <option className="">Groceries</option>
                  <option>Utilities</option>
                  <option>Entertainment</option>
                  <option>Transport</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label
                  className="block text-sm font-medium text-background-dark dark:text-background-light"
                  htmlFor="date"
                >
                  Date
                </label>
                <input
                  {...register("date", { required: true })}
                  className="mt-1 block w-full rounded-lg border border-[#3CB371] bg-background-light py-3 px-4 text-background-dark focus:border-primary focus:outline-none focus:ring-primary dark:border-primary/40 dark:bg-background-dark dark:text-background-light [&::-webkit-calendar-picker-indicator]:fill-[#3CB371] [&::-webkit-calendar-picker-indicator]:text-[#3CB371] [&::-webkit-calendar-picker-indicator]:filter-[invert(62%)_sepia(93%)_saturate(361%)_hue-rotate(93deg)_brightness(95%)_contrast(87%)]"
                  id="date"
                  name="date"
                  type="date"
                />
              </div>
              <div>
                <label
                  className="block text-sm font-medium text-background-dark dark:text-background-light"
                  htmlFor="description"
                >
                  Description
                </label>
                <textarea
                  {...register("description")}
                  className="mt-1 block w-full rounded-lg border border-[#3CB371] bg-background-light py-3 px-4 text-background-dark placeholder-background-dark/50 focus:border-primary focus:outline-none focus:ring-primary dark:border-primary/40 dark:bg-background-dark dark:text-background-light dark:placeholder-background-light/50"
                  id="description"
                  name="description"
                  placeholder="e.g., Weekly grocery shopping"
                  rows={3}
                ></textarea>
              </div>
            </div>
            <div>
              <button
                type="submit"
                // Glass card: translucent background, backdrop blur, themed border, soft shadow
                className="relative flex w-full justify-center rounded-lg border-2 border-[#3CB371] bg-white/6 backdrop-blur-sm px-4 py-3 text-sm font-bold text-white transition-all hover:bg-white/8 focus:outline-none focus:ring-2 focus:ring-[#3CB371]/30 focus:ring-offset-2 focus:ring-offset-transparent shadow-sm"
                // Subtle glossy text using text-shadow; adjust values to taste
                style={{
                  textShadow:
                    "0 1px 0 rgba(255,255,255,0.06), 0 8px 24px rgba(60,179,113,0.06)",
                }}
              >
                <span className="relative z-10">Add Transaction</span>

                {/* Optional: thin animated sheen (pure CSS using absolutely positioned gradient) */}
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-0 -skew-x-12 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 transition-opacity duration-500 hover:opacity-30 rounded-lg"
                />
              </button>
            </div>
          </form>
        </div>
        
      </main>
    </>
  );
};
export default Transaction;
