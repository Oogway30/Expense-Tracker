"use client";

import NavBar_Back from "../components-app/NavBar-Back";
import { useForm, type SubmitHandler } from "react-hook-form";
import { FaShoppingCart, FaFilm, FaBus } from "react-icons/fa";
import { addTransaction, getTotalSpent, getTotalSpentByCategory } from "../Redux/Transaction/transactionSlice";
import { useDispatch, useSelector } from "react-redux";
import SuccessBanner from "../components-app/successBanner";
import { useState } from "react";
import type { RootState } from '../Redux/store'

type Inputs = {
  amount: number;
  category_form: string;
  date: string;
  description: string;
};

const Transaction = () => {
  const transactions = useSelector((state: RootState) => state.transaction.transactions)
  const demoTransactions = useSelector(getTotalSpentByCategory).filter((e) => e.category !== "Dining");
  const TotalAmount = useSelector(getTotalSpent) 
  const dispatch = useDispatch();
  const [showBanner, setShowBanner] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    dispatch(
      addTransaction({
        date: data.date,
        amount: data.amount,
        description: data.description,
        category: data.category_form,
      })
    );
    setShowBanner(true);
  };

  return (
    <>
      {showBanner && <SuccessBanner message="Transaction added successfully!" />}
      <NavBar_Back />
      <main className="flex mt-15 flex-col md:flex-row items-center justify-center py-10 px-4 sm:px-6 lg:px-8">
        <div className="w-full md:w-[50vw] flex flex-col items-center justify-center space-y-6">
          <div className="w-full max-w-md rounded-xl bg-background-dark/50 p-6 shadow-sm">
            <h3 className="text-xl font-bold text-background-light">Today's Spending</h3>
            <div className="mt-4 mb-4 flex items-center justify-between">
              <p className="text-4xl font-extrabold text-green-500">{TotalAmount} €</p>
              <p className="text-sm text-background-light/70">from {transactions.length} transactions</p>
            </div>
            <h4 className="text-sm font-medium text-background-light/80 mb-5">Recent Transactions</h4>
            {demoTransactions.map((item) => (
              <div className="flex justify-between" key={item.category}>
                <div className="flex items-center w-[50%] justify-start gap-5 p-3">
                  <div className="p-3 rounded-full bg-[#3CB371]">
                    {item.category==="Groceries"?<FaShoppingCart />:''} {item.category==="Utilities"? <FaFilm />:''} {item.category==="Transport"?<FaBus />:''}
                  </div>
                  <p>{item.category}</p>
                </div>
                <div className="text-red-500 flex items-center">{item.desktop} €</div>
              </div>
            ))}
          </div>

          <div className="relative w-full max-w-md">
            <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-primary/30 to-primary/10 opacity-30 blur-2xl"></div>
            <svg className="relative w-full text-primary/50" viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient gradientTransform="rotate(45)" id="grad1">
                  <stop offset="0%" stopColor="rgba(32, 223, 108, 0.9)" />
                  <stop offset="100%" stopColor="rgba(32, 223, 108, 0)" />
                </linearGradient>
                <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="4" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>
              <path
                d="M 0 100 C 50 50, 150 50, 200 100 S 350 150, 400 100"
                fill="none"
                stroke="url(#grad1)"
                strokeWidth="4"
                filter="url(#glow)"
              />
              <path
                d="M 0 120 C 60 160, 160 160, 200 120 S 340 80, 400 120"
                fill="none"
                stroke="url(#grad1)"
                strokeDasharray="8,8"
                strokeWidth="4"
                filter="url(#glow)"
              />
            </svg>
          </div>
        </div>

        <div className="w-full max-w-md space-y-8 mt-10 md:mt-0">
          <div>
            <h2 className="text-center text-3xl font-extrabold text-background-dark dark:text-background-light">
              Add New Transaction
            </h2>
            <p className="text-center text-sm text-background-dark/60 dark:text-background-light/60">
              Keep track of your spending effortlessly.
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="space-y-4 rounded-lg bg-background-light p-6 shadow-sm dark:bg-background-dark/50">
              {/* Amount */}
              <div>
                <label className="block text-sm font-medium text-background-dark dark:text-background-light" htmlFor="amount">
                  Amount
                </label>
                <div className="relative mt-1 rounded-lg">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <span className="text-background-dark/50 dark:text-background-light/50">$</span>
                  </div>
                  <input
                    {...register("amount", {
                      required: "Amount is required",
                      valueAsNumber: true,
                      validate: (value) => value > 0 || "Amount must be greater than zero",
                    })}
                    className={`block w-full rounded-lg border ${
                      errors.amount ? "border-red-500" : "border-[#3CB371]"
                    } bg-background-light py-3 pl-7 pr-4 text-background-dark placeholder-background-dark/50 focus:outline-none focus:ring-primary dark:border-primary/40 dark:bg-background-dark dark:text-background-light dark:placeholder-background-light/50`}
                    id="amount"
                    name="amount"
                    placeholder="0.00"
                    type="number"
                  />
                  {errors.amount && (
                    <p className="mt-1 text-sm text-red-500 font-medium">{errors.amount.message}</p>
                  )}
                </div>
              </div>

              {/* Category */}
              <div>
                <label className="block text-sm font-medium text-background-dark dark:text-background-light" htmlFor="category">
                  Category
                </label>
                <select
                  className="form-select mt-1 block w-full rounded-lg border border-[#3CB371] bg-background-light py-3 pl-3 pr-10 text-background-dark focus:border-primary focus:outline-none focus:ring-primary dark:border-primary/40 dark:bg-background-dark "
                  id="category"
                  {...register("category_form", { required: true })}
                >
                  <option className="text-black">Groceries</option>
                  <option className="text-black">Utilities</option>
                  <option className="text-black">Dining</option>
                  <option className="text-black">Transport</option>
                </select>
              </div>

              {/* Date */}
              <div>
                <label className="block text-sm font-medium text-background-dark dark:text-background-light" htmlFor="date">
                  Date
                </label>
                <input
                  {...register("date", { required: true })}
                  className="mt-1 block w-full rounded-lg border border-[#3CB371] bg-background-light py-3 px-4 text-background-dark focus:border-primary focus:outline-none focus:ring-primary dark:border-primary/40 dark:bg-background-dark dark:text-background-light"
                  id="date"
                  name="date"
                  type="date"
                />
              </div>

                            {/* Description */}
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

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="relative flex w-full justify-center rounded-lg border-2 border-[#3CB371] bg-white/6 backdrop-blur-sm px-4 py-3 text-sm font-bold text-white transition-all hover:bg-white/8 focus:outline-none focus:ring-2 focus:ring-[#3CB371]/30 focus:ring-offset-2 focus:ring-offset-transparent shadow-sm"
                style={{
                  textShadow:
                    "0 1px 0 rgba(255,255,255,0.06), 0 8px 24px rgba(60,179,113,0.06)",
                }}
              >
                <span className="relative z-10">Add Transaction</span>
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
