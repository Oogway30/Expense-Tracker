import reducer, {
  addTransaction,
  removeTransaction,
  filterTransaction,
} from './transactionSlice';

describe('transactionSlice reducers', () => {
  const emptyState = {
    transactions: [] as any[],
    activeCategory: '',
    filteredTransactions: [] as any[],
  };

  afterEach(() => {
    // restore Date.now mock if any
    jest.restoreAllMocks();
  });

  test('addTransaction adds a transaction with generated id and provided fields', () => {
    // make Date.now deterministic
    jest.spyOn(Date, 'now').mockReturnValueOnce(1620000000000);

    const payload = {
      date: '2025-10-21',
      amount: 42.5,
      description: 'Test purchase',
      category: 'Groceries',
    };

    const state = reducer(emptyState, addTransaction(payload));

    expect(state.transactions).toHaveLength(1);
    const t = state.transactions[0];
    expect(t.id).toBe(1620000000000);
    expect(t.date).toBe(payload.date);
    expect(t.amount).toBe(payload.amount);
    expect(t.description).toBe(payload.description);
    expect(t.category).toBe(payload.category);
  });

  test('removeTransaction removes the correct transaction by id and leaves others intact', () => {
    // prepare a state with two transactions
    jest.spyOn(Date, 'now')
      .mockReturnValueOnce(1)
      .mockReturnValueOnce(2);

    const payloadA = { date: '2025-01-01', amount: 10, description: 'A', category: 'X' };
    const payloadB = { date: '2025-02-02', amount: 20, description: 'B', category: 'Y' };

    const withA = reducer(emptyState, addTransaction(payloadA));
    const withAB = reducer(withA, addTransaction(payloadB));

    expect(withAB.transactions).toHaveLength(2);

    // remove the first transaction (id === 1)
    const afterRemove = reducer(withAB, removeTransaction(1));

    expect(afterRemove.transactions).toHaveLength(1);
    expect(afterRemove.transactions[0].id).toBe(2);
    expect(afterRemove.transactions[0].description).toBe('B');
  });

  test('removeTransaction with non-existing id does not change transactions', () => {
    jest.spyOn(Date, 'now').mockReturnValueOnce(10);
    const stateWithOne = reducer(emptyState, addTransaction({ date: 'd', amount: 1, description: 'd', category: 'C' }));

    const result = reducer(stateWithOne, removeTransaction(9999));

    expect(result.transactions).toHaveLength(1);
    expect(result.transactions[0]).toEqual(stateWithOne.transactions[0]);
  });

  test('filterTransaction sets activeCategory and filteredTransactions correctly', () => {
    // create three transactions with categories A, B, A
    jest.spyOn(Date, 'now')
      .mockReturnValueOnce(101)
      .mockReturnValueOnce(102)
      .mockReturnValueOnce(103);

    const s1 = reducer(emptyState, addTransaction({ date: 'd1', amount: 1, description: 't1', category: 'A' }));
    const s2 = reducer(s1, addTransaction({ date: 'd2', amount: 2, description: 't2', category: 'B' }));
    const s3 = reducer(s2, addTransaction({ date: 'd3', amount: 3, description: 't3', category: 'A' }));

    // filter by 'A'
    const filtered = reducer(s3, filterTransaction('A'));

    expect(filtered.activeCategory).toBe('A');
    expect(filtered.filteredTransactions).toHaveLength(2);
    const cats = filtered.filteredTransactions.map((x) => x.category);
    expect(cats.every((c) => c === 'A')).toBe(true);

    // ensure all original transactions remain in state.transactions
    expect(filtered.transactions).toHaveLength(3);
  });

  test('filterTransaction with no matches sets filteredTransactions to empty array', () => {
    jest.spyOn(Date, 'now')
      .mockReturnValueOnce(201)
      .mockReturnValueOnce(202);

    const s1 = reducer(emptyState, addTransaction({ date: 'd1', amount: 5, description: 'one', category: 'Food' }));
    const s2 = reducer(s1, addTransaction({ date: 'd2', amount: 7, description: 'two', category: 'Travel' }));

    const filtered = reducer(s2, filterTransaction('Bills'));

    expect(filtered.activeCategory).toBe('Bills');
    expect(filtered.filteredTransactions).toHaveLength(0);
    // original list remains unchanged
    expect(filtered.transactions).toHaveLength(2);
  });
});
