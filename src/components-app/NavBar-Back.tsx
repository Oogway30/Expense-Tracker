import { IoChevronBack } from "react-icons/io5";
const NavBar_Back = () => {

 
  return (
    <div className="fixed top-0 left-0 w-full z-10">
      <div className="flex items-center justify-between border-b-[1.5px] border-green-800 backdrop-blur-xs bg-white/1  px-6 xl:px-10 text-white">
        <div className="flex items-center justify-center gap-4 cursor-pointer hover:text-[#3CB371] transition-colors">
          <div className="translate-y-[0.1rem]">

          <IoChevronBack size={25} />
          </div>
          <h1 className="text-xl font-bold">Add New Expense</h1>
        </div>
        
        

        {/* Profile - Desktop */}
        <div className="hidden xl:flex h-16 items-center justify-center cursor-pointer hover:text-[#3CB371] transition-colors">
          Profile
        </div>

        
      </div>


     
    </div>
  );
};

export default NavBar_Back;
