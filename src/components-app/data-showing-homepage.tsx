import { useSelector } from 'react-redux'
import { getTotalSpent } from '../Redux/Transaction/transactionSlice'

const DataShowingHomepage = () => {

  const amount = useSelector(getTotalSpent) ?? 0
  return (
    <div className="noto-sans-jp flex flex-row gap-6 md:flex-col mx-auto max-w-xl mb-10 px-4 sm:px-6">
      

      <div className="flex h-[30vh] sm:h-[28vh] md:h-[22vh] lg:h-[26vh] flex-col items-center md:items-start gap-4 border-[1.5px] border-[#3CB371]/60 rounded-2xl p-6 sm:p-8 text-start shadow-sm">
        <div className="w-full flex items-start justify-between">
          <p className="text-base sm:text-lg md:text-xl font-semibold text-white-800">Money Spent Today:</p>
          <svg className="w-6 h-6 text-red-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
            <path d="M12 3v18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M7 8h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </div>

        <p className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-red-500 leading-tight">{amount}€</p>

      </div>
    </div>
  )
}

export default DataShowingHomepage
