
const DataShowingHomepage = () => {
  return (

    <div className='noto-sans-jp flex flex-row gap-6 md:flex-col mx-auto max-w-xl mb-10'>

    <div className='flex flex-col  h-[30vh] gap-4 backdrop-blur-xs bg-white/0.5 border-[1.5px] border-green-800 rounded-2xl p-10 text-start'>
        <h1>Current Budget:</h1>
        <p className="font-bold text-2xl">$5000</p>
    </div>
    <div className='flex h-[30vh] flex-col gap-4 backdrop-blur-xs bg-white/0.5 border-[1.5px]  border-green-800 rounded-2xl p-10 text-start'>
        <p>Money Spent Today:</p>
        <p className="font-bold text-2xl">$200</p>
    </div>
    </div>
    
  )
}

export default DataShowingHomepage
