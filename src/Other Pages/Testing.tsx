import { useSelector, useDispatch } from 'react-redux'
import { removeTransaction, addTransaction, filterTransaction } from '../Redux/Transaction/transactionSlice'
import type { RootState } from '../Redux/store'

const Testing = () => {
    const transactions = useSelector((state: RootState) => state.transaction.transactions)
  const dispatch = useDispatch()

    return (
     <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(addTransaction({date:"2020-03-04", amount: 30, description: "Test", category: "groceriess" }))}
        >
          Increment
        </button>
        {
    transactions.map((e)=>{
        return (
            <div key={e.id}>
            <div>{e.id}</div>
            <div>{e.category}</div>
            <div>{e.amount}</div>
            <div>{e.description}</div>
            <div>{e.date}</div>
            </div>
        )
    })
        }
        <button
          aria-label="Filter groceries"
          onClick={() => dispatch(filterTransaction("groceries"))}
        >
          Filter groceries
        </button>
        <button
          aria-label="Decrement value"
          onClick={() => transactions.length && dispatch(removeTransaction(transactions[transactions.length - 1].id))}
        >
          Decrement
        </button>
      </div>
    </div>
  )
}

export default Testing
