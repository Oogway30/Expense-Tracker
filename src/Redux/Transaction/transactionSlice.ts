import { createSlice } from "@reduxjs/toolkit";

export interface TransactionState {
  transactions: Array<{
    id: number;
    date: string;
    amount: number;
    description: string;
    category: string;
  }>;
}

const initialState: TransactionState = {
  transactions: [],
};

export const transactionSlice = createSlice({
  name: "transaction",
  initialState,
  reducers: {
     addTransaction: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      
      state.transactions.push({
        id: Date.now(),
        date: action.payload.date,
        amount: action.payload.amount,
        description: action.payload.description,
        category: action.payload.category,
      });
      console.log(state.transactions);
    },
    removeTransaction: (state, action) => {
       state.transactions = state.transactions.filter((e) => e.id !== action.payload);
    },
    filterTransaction: (state, action) => {
      let filteredTransaction = state.transactions = state.transactions.filter((e) => e.category === action.payload);
      filteredTransaction
    },
  },
});

// Action creators are generated for each case reducer function
export const { addTransaction, removeTransaction, filterTransaction } =
  transactionSlice.actions;

export default transactionSlice.reducer;
