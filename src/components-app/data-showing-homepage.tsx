const DataShowingHomepage = () => {
  return (
    <div className='noto-sans-jp flex flex-row  gap-6 md:flex-col mx-auto max-w-xl mb-10'>

      <div className='flex flex-col h-[30vh] items-center md:items-start gap-4 backdrop-blur-xs bg-white/0.5 border-[1.5px] border-green-800 rounded-2xl p-10 text-start'>
        <h1 className="text-xl font-semibold">Current Budget:</h1> {/* Increased size and added weight */}
        <p className="text-3xl font-bold text-[#3CB371]">$5000</p> {/* Larger for emphasis */}
      </div>

      <div className='flex h-[30vh] flex-col items-center md:items-start gap-4 backdrop-blur-xs bg-white/0.5 border-[1.5px] border-green-800 rounded-2xl p-10 text-start'>
        <p className="text-xl font-semibold">Money Spent Today:</p> {/* Matching style */}
        <p className="text-3xl font-bold text-red-500">-$200</p> {/* Matching emphasis */}
      </div>

    </div>
  )
}

export default DataShowingHomepage
