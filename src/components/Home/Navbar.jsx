import { AiOutlineSearch } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router";

export default function Navbar() {
  return (
    <>
      <header
        id="contentSearch"
        className="flex w-10/12 mx-auto py-3 px-6 bg-slate-500 rounded-full mt-5"
      >
        <nav className="flex w-full items-center justify-between">
          <div className="relative h-fit">
            <input
              className={`bg-purple-100 text-gray-700 rounded-full`}
              type="text"
            />
            <button
              className={`absolute right-0 bg-purple-100 text-gray-700 rounded-full`}
            >
              <AiOutlineSearch className="size-5" />
            </button>
          </div>
          <Link
            to="/login"
            className="flex gap-2 items-center group overflow-clip hover:bg-orange-500 px-3 py-1 rounded-full"
          >
            <span className="w-0 group-hover:w-10 opacity-0 group-hover:opacity-100 transition-all">
              Login
            </span>
            <FaUser className="size-4" />
          </Link>
        </nav>
      </header>
    </>
  );
}
