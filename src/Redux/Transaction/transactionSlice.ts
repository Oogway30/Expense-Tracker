import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "@reduxjs/toolkit";

export interface TransactionState {
  transactions: Array<{
    id: number;
    date: string;
    amount: number;
    description: string;
    category: string;
  }>;
  activeCategory: string;
  filteredTransactions: Array<{
    id: number;
    date: string;
    amount: number;
    description: string;
    category: string;
  }>;
}

const initialState: TransactionState = {
  transactions: [],
  activeCategory: "",
  filteredTransactions: [],
};

export const transactionSlice = createSlice({
  name: "transaction",
  initialState,
  reducers: {
    addTransaction: (state, action) => {
      state.transactions.push({
        id: Date.now(),
        date: action.payload.date,
        amount: action.payload.amount,
        description: action.payload.description,
        category: action.payload.category,
      });
    },
    removeTransaction: (state, action) => {
      state.transactions = state.transactions.filter(
        (e) => e.id !== action.payload
      );
    },
    filterTransaction: (state, action) => {
      state.activeCategory = action.payload;
      state.filteredTransactions = state.transactions.filter(
        (e) => e.category === action.payload
      );
    },
  },
});

// ✅ Define the selector outside the slice
export const getTotalSpent =(state: { transaction: TransactionState }) =>
  state.transaction.transactions.reduce((sum, tx) => sum + tx.amount, 0);


export const getTotalSpentByCategory = createSelector(
  [(state: { transaction: TransactionState }) => state.transaction.transactions],
  (transactions) => {
    return [
      { category: "Groceries", desktop: transactions.filter(e => e.category === "Groceries").reduce((sum, tx) => sum + tx.amount, 0) },
      { category: "Utilities", desktop: transactions.filter(e => e.category === "Utilities").reduce((sum, tx) => sum + tx.amount, 0) },
      { category: "Transport", desktop: transactions.filter(e => e.category === "Transport").reduce((sum, tx) => sum + tx.amount, 0) },
      { category: "Dining", desktop: transactions.filter(e => e.category === "Dining").reduce((sum, tx) => sum + tx.amount, 0) },
    ]
  }
)

// Export actions and reducer
export const { addTransaction, removeTransaction, filterTransaction } =
  transactionSlice.actions;

export default transactionSlice.reducer;
