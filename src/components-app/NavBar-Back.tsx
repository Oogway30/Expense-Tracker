import { IoChevronBack } from "react-icons/io5";
import { Link } from "react-router-dom";
const NavBar_Back = () => {
  return (
    <div className="fixed top-0 left-0 w-full  z-10">
      <div className="flex items-center justify-between min-h-max border-b-[1.5px] border-green-800 backdrop-blur-xs bg-white/1 sm:py-auto py-1.5 px-5 xl:px-10 text-white">
          <Link to="/">
        <div className="flex items-center justify-center md:gap-4 cursor-pointer hover:text-[#3CB371] transition-colors">
            <IoChevronBack size={25} />
            <h1 className="text-xl font-bold">Add New Expense</h1>
        </div>
          </Link>

        {/* Profile - Desktop */}
        <div className="hidden  xl:flex h-16 items-center justify-center cursor-pointer hover:text-[#3CB371] transition-colors">
          Profile
        </div>
      </div>
    </div>
  );
};

export default NavBar_Back;
