import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: [],
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    addDebit: (state, action) => {
      state.value.push({...action.payload, type: 'debit'})
    },
    subtractDebit: (state, action) => {
      state.value.push({...action.payload, type: 'credit' })
    }
  }
});

export const { addDebit, subtractDebit } = counterSlice.actions;

export const selectCount = (state) => state.counter.value;

export const selectBalance = (state) => {
  const balance = state.counter.value.reduce((acc, curr) => {
    if (curr.type === 'debit')
      return acc + curr.amount;
    else
      return acc - curr.amount;
  }, 0)

  return balance;
}

export default counterSlice.reducer;
