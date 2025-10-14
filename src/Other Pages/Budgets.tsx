import { useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import NavBar from "./../components-app/NavBar";
type Inputs = {
  amount: number;
  frequency: string;
};
function Budgets() {
  const { register, handleSubmit } = useForm<Inputs>();
  const [TogglePopUp, setTogglePopUp] = useState(false);
  const [ToggleError, setToggleError] = useState(false);
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    try {
      
      console.log(data);
      setTogglePopUp(true);
    } catch (error) {
        console.log(error)
      setToggleError(true);
    }
  };
  return (
    <div>
      <NavBar />
      <main className="flex-grow mt-16 noto-sans-jp">
        <div className="mx-auto max-w-2xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="space-y-8 rounded-lg border border-[#3CB371] p-8 shadow-lg backdrop-blur-sm dark:bg-black/10">
            <div className="text-center">
              <h1 className="text-3xl font-bold text-[#3CB371] dark:text-white">
                Set Your Allowance
              </h1>
              <p className="mt-2 text-sm text-white dark:text-gray-400">
                Manage your spending by setting a daily or weekly allowance.
              </p>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label
                  className="block text-sm font-medium text-white dark:text-gray-300"
                  htmlFor="amount"
                >
                  Allowance Amount
                </label>
                <div className="relative mt-2">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <span className="text-gray-500 sm:text-sm">€</span>
                  </div>
                  <input
                    {...register("amount", { required: true })}
                    id="amount"
                    type="number"
                    placeholder="0,00"
                    className="block w-full rounded-lg border-2 border-[#184e36] text-center font-bold py-3 pl-10 pr-4 text-white placeholder:text-gray-400 shadow-sm focus:border-[#2ed07b] focus:ring-0 focus:outline-none dark:border-[#0f2b20] dark:bg-background-dark/60 dark:placeholder:text-gray-500"
                  />
                </div>
              </div>
              <div>
                <span className="block text-sm font-medium text-white dark:text-gray-300">
                  Frequency
                </span>
                <div className="mt-2 grid grid-cols-2 gap-4">
                  <label className="block">
                    <input
                      {...register("frequency", { required: true })}
                      type="radio"
                      value="daily"
                      className="peer sr-only"
                    />
                    <div className="flex cursor-pointer items-center justify-center rounded-lg border-2 border-[#163f2b] bg-[#0f2b20]/5 p-4 text-center text-sm font-bold text-white transition-all hover:bg-[#163f2b]/5 focus-within:outline-none focus-within:ring-2 focus-within:ring-[#19a162] peer-checked:bg-[#163f2b] peer-checked:border-[#19a162] peer-checked:text-white">
                      <span>Daily</span>
                    </div>
                  </label>

                  <label className="block">
                    <input
                      {...register("frequency", { required: true })}
                      type="radio"
                      value="weekly"
                      className="peer sr-only"
                    />
                    <div className="flex cursor-pointer items-center justify-center rounded-lg border-2 border-[#163f2b] bg-[#0f2b20]/5 p-4 text-center text-sm font-bold text-white transition-all hover:bg-[#163f2b]/5 focus-within:outline-none focus-within:ring-2 focus-within:ring-[#19a162] peer-checked:bg-[#163f2b] peer-checked:border-[#19a162] peer-checked:text-white">
                      <span>Weekly</span>
                    </div>
                  </label>
                </div>
              </div>
              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full rounded-lg bg-gradient-to-r from-[#1f8b55] to-[#2ed07b] px-6 py-3 text-sm font-semibold text-white shadow-md transition-transform duration-150 hover:scale-[1.02] active:scale-95 focus:outline-none focus:ring-4 focus:ring-[#2ed07b]/30"
                >
                  Save Allowance
                </button>
              </div>
              {TogglePopUp === true ? (
                <div className="mt-4 bg-[#163f2b] rounded-sm  p-4 text-center text-sm text-primary-800 dark:text-primary-200">
                  <p>Your allowance has been updated successfully!</p>
                </div>
              ) : (
                ""
              )}
              {ToggleError === true ? (
                <div className="mt-4 bg-red-500/40 rounded-lg  p-4 text-center text-sm text-primary-800 dark:text-primary-200">
                  <p>Something went wrong try again later</p>
                </div>
              ) : ""}
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Budgets;
