import { HiMenu, HiX } from "react-icons/hi";

const NavMenuButton = ({ isMenuOpen, setIsMenuOpen }) => (
  <div className="z-30 flex-1">
    <button
      onClick={() => setIsMenuOpen(!isMenuOpen)}
      className="p-2 focus:outline-none"
      aria-label="Toggle menu"
    >
      {isMenuOpen ? (
        <HiX className="w-8 h-8 bg-btt hover:bg-white hover:border hover:border-btt hover:text-btt text-white rounded-full p-2 transition duration-300" />
      ) : (
        <HiMenu className="w-8 h-8 bg-white hover:bg-btt  hover:text-white text-slate-500 rounded-full p-2 transition duration-300" />
      )}
    </button>
  </div>
);

export default NavMenuButton;
