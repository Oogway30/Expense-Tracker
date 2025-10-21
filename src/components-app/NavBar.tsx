import { useState } from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    // Added text-base baseline so pages cannot change navbar font-size via inheritance
    <div className="noto-sans-jp fixed top-0 left-0 w-full z-10 text-base">
      <div className="flex items-center justify-between border-b-[1.5px] border-green-800 backdrop-blur-xs bg-white/1 px-6 xl:px-20 text-white">
        <h1 className="text-xl font-bold">Expense Tracker</h1>

        {/* Desktop Navigation */}
        <nav className="hidden xl:block">
          {/* Replaced invalid `min-text-lg` with explicit `text-lg` so font-size is consistent */}
          <ul className="flex gap-20 text-lg">
            {/* Move NavLink inside li so text-size classes apply predictably and consistently */}
            <li className="cursor-pointer hover:text-[#3CB371] transition-colors">
              <NavLink to="/" className={({ isActive }) => (isActive ? "text-[#3CB371] text-sm" : "text-sm")}>
                Dashboard
              </NavLink>
            </li>

            <li className="cursor-pointer hover:text-[#3CB371] transition-colors">
              <NavLink to="/transaction" className={({ isActive }) => (isActive ? "text-[#3CB371] text-sm" : "text-sm")}>
                Transactions
              </NavLink>
            </li>

            <li className="cursor-pointer hover:text-[#3CB371] transition-colors">
              <NavLink to="/budgets" className={({ isActive }) => (isActive ? "text-[#3CB371] text-sm" : "text-sm")}>
                Budgets
              </NavLink>
            </li>

            <li className="cursor-pointer hover:text-[#3CB371] transition-colors">
              <NavLink to="/reports" className={({ isActive }) => (isActive ? "text-[#3CB371] text-sm" : "text-sm")}>
                Reports
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* Profile - Desktop */}
        <div className="hidden xl:flex h-16 items-center justify-center cursor-pointer hover:text-[#3CB371] transition-colors">
          {/* Ensure text size consistent for Profile too */}
          <NavLink to="/profile" className={({ isActive }) => (isActive ? "text-[#3CB371] text-lg" : "text-lg")}>
            Profile
          </NavLink>
        </div>

        {/* Burger Menu Button */}
        <button
          className="xl:hidden p-2 text-white hover:text-[#3CB371] transition-colors"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Backdrop */}
      {/* Clicking backdrop closes the menu; keep pointer-events-none when hidden */}
      <div
        className={`fixed inset-0 backdrop-blur-sm bg-black/20 transition-opacity duration-300 ease-in-out xl:hidden ${
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleMenu}
        aria-hidden={!isMenuOpen}
      />

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 backdrop-blur-md bg-white/10 transform transition-transform duration-300 ease-in-out xl:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <nav className="px-6 py-20">
          <ul className="flex flex-col gap-6">
            {/* Made text-lg explicit on mobile items to match desktop sizes */}
            <li className="cursor-pointer hover:text-[#3CB371] transition-colors py-2 text-lg">
              <NavLink to="/" onClick={() => setIsMenuOpen(false)} className={({ isActive }) => (isActive ? "text-[#3CB371] text-lg" : "text-lg")}>
                Dashboard
              </NavLink>
            </li>

            <li className="cursor-pointer hover:text-[#3CB371] transition-colors py-2 text-lg">
              <NavLink to="/transaction" onClick={() => setIsMenuOpen(false)} className={({ isActive }) => (isActive ? "text-[#3CB371] text-lg" : "text-lg")}>
                Transactions
              </NavLink>
            </li>

            <li className="cursor-pointer hover:text-[#3CB371] transition-colors py-2 text-lg">
              <NavLink to="/budgets" onClick={() => setIsMenuOpen(false)} className={({ isActive }) => (isActive ? "text-[#3CB371] text-lg" : "text-lg")}>
                Budgets
              </NavLink>
            </li>

            <li className="cursor-pointer hover:text-[#3CB371] transition-colors py-2 text-lg">
              <NavLink to="/reports" onClick={() => setIsMenuOpen(false)} className={({ isActive }) => (isActive ? "text-[#3CB371] text-lg" : "text-lg")}>
                Reports
              </NavLink>
            </li>

            <li className="cursor-pointer hover:text-[#3CB371] transition-colors py-2 text-lg">
              {/* Profile in mobile - close the menu when navigating */}
              <NavLink to="/profile" onClick={() => setIsMenuOpen(false)} className={({ isActive }) => (isActive ? "text-[#3CB371] text-lg" : "text-lg")}>
                Profile
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
