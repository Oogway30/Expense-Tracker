import NavBar from "./../components-app/NavBar";
const BudgetsComingSoon = () => {


  return (
    <>
      <NavBar />
      <div className="flex noto-sans-jp p-5 justify-center text-center items-center flex-col w-fit-content mt-50 mb-50">
        <div className="flex flex-col justify-center items-center mb-10 gap-5 md:mt-25">
          <h1 className="text-white text-5xl ">Coming Soon</h1>
          <p className="text-gray-400">
            Exciting new features are being crafted to help you master your
            finances.
          </p>
          <p>Launching Soon!</p>
          <div className="rounded  w-full h-3 flex justify-start bg-[rgb(40,54,45)]">
            <span
              className="bg-[rgb(32,223,108)] transition-all rounded w-[75%] h-full"
            ></span>
          </div>
        </div>
      </div>
    </>
  );
};

export default BudgetsComingSoon;
