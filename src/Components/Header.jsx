import { FaBars } from "react-icons/fa";

function Header() {
  return (
    <div className="flex justify-between">
      <div className="flex items-center gap-2 lg:w-1/3">
        <img
          src="./assets/hosterr-high-resolution-logo-black-transparent.png"
          alt="logo"
          className="w-1/3 md:w-2/12 lg:w-4/12"
        />
        <button className="bg-gradient-to-r from-orange-400 to-red-400 text-xs text-white px-2.5 py-1.5 rounded-2xl">
          Hosterr is hiring
        </button>
      </div>
      <ul className="hidden lg:flex items-center font-lato text-gray-400 gap-6">
        <li>
          <a href="#">Plans</a>
        </li>
        <li>
          <a href="#">Find Domain</a>
        </li>
        <li>
          <a href="#">Why Hosterr</a>
        </li>
      </ul>
      <div className="hidden lg:flex items-center justify-center font-lato gap-6">
        <a href="#" className="text-gray-400">
          Sign In
        </a>
        <button className="rounded-md px-4 py-3 bg-blue-400 hover:bg-blue-600 text-white">
          Join Waitlist
        </button>
      </div>
      <div className="lg:hidden">
        <FaBars />
      </div>
    </div>
  );
}
export default Header;
