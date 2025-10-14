const DataShowingHomepage = () => {
  return (
    <div className="noto-sans-jp flex flex-row gap-6 md:flex-col mx-auto max-w-xl mb-10 px-4 sm:px-6">
      <div className="flex flex-col h-[30vh] sm:h-[28vh] md:h-[22vh] lg:h-[26vh] items-center md:items-start gap-4  border-[1.5px] border-[#3CB371]/60 rounded-2xl p-6 sm:p-8 text-start shadow-sm">
        <div className="w-full flex items-start justify-between">
          <h1 className="text-base sm:text-lg md:text-xl font-semibold text-white-800">Current Budget:</h1>
          <svg className="w-6 h-6 text-[#3CB371]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
            <rect x="3" y="7" width="18" height="10" rx="2" stroke="currentColor" strokeWidth="1.5" />
            <path d="M7 11h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <circle cx="9.5" cy="12" r="0.8" fill="currentColor" />
          </svg>
        </div>

        <p className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#3CB371] leading-tight">5,000€</p>

        
      </div>

      <div className="flex h-[30vh] sm:h-[28vh] md:h-[22vh] lg:h-[26vh] flex-col items-center md:items-start gap-4 border-[1.5px] border-[#3CB371]/60 rounded-2xl p-6 sm:p-8 text-start shadow-sm">
        <div className="w-full flex items-start justify-between">
          <p className="text-base sm:text-lg md:text-xl font-semibold text-white-800">Money Spent Today:</p>
          <svg className="w-6 h-6 text-red-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
            <path d="M12 3v18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M7 8h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </div>

        <p className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-red-500 leading-tight">-200€</p>

      </div>
    </div>
  )
}

export default DataShowingHomepage
