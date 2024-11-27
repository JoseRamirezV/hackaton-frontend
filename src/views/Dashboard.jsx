import { AiOutlineLogout } from "react-icons/ai";
import { FaAddressCard, FaRegPlusSquare } from "react-icons/fa";
import { IoApps, IoChatbox } from "react-icons/io5";
import { Link, Outlet } from "react-router";
import { useUsers } from "../hooks/useUsers";

export default function Dashboard() {
  const { user, logout } = useUsers();
  return (
    <div className="h-screen bg-gray-100">
      <header className="absolute flex items-center justify-between h-20 w-full bg-gray-100 px-8 py-1 text-gray-800">
        <Link to={"/"}>
          <img src="logo.webp" alt="" className="w-16" />
        </Link>
        <span className="flex gap-2">
          <p>{user?.name}</p>
          <button
            className="hover:text-red-500 transition-colors"
            onClick={logout}
          >
            <AiOutlineLogout className="size-5" />
          </button>
        </span>
      </header>
      <main className="flex min-h-full pt-20 bg-gray-50">
        <aside className="flex flex-col w-fit min-h-full p-2 bg-gray-100 text-gray-700 group">
          <ul className="flex flex-col gap-2">
            <li className="">
              <Link
                to={"/"}
                className="ps-3 py-2 text-md flex justify-start items-center gap-2 hover:bg-orange-500 rounded-md transition-colors group/link"
              >
                <IoApps className="size-5 group-hover/link:text-white transition-colors" />
                <p className="w-0 overflow-clip group-hover:w-fit pr-0 transition-all group-hover:pr-8 whitespace-nowrap group-hover/link:text-white">
                  Aplicaciones
                </p>
              </Link>
            </li>
            <li className="">
              <Link
                to={"ratings"}
                className="ps-3 py-2 text-md flex justify-start items-center gap-2 hover:bg-orange-500 rounded-md transition-colors group/link"
              >
                <IoChatbox className="size-5 group-hover/link:text-white transition-colors" />
                <p className="w-0 overflow-clip group-hover:w-fit pr-0 transition-all group-hover:pr-8 whitespace-nowrap group-hover/link:text-white">
                  Reseñas
                </p>
              </Link>
            </li>
            <li className="">
              <Link
                to={"/apps"}
                className="ps-3 py-2 text-md flex justify-start items-center gap-2 hover:bg-orange-500 rounded-md transition-colors group/link"
              >
                <FaRegPlusSquare className="size-5 group-hover/link:text-white transition-colors" />
                <p className="w-0 overflow-clip group-hover:w-fit pr-0 transition-all group-hover:pr-8 whitespace-nowrap group-hover/link:text-white">
                  Agregar
                </p>
              </Link>
            </li>
            <li className="">
              <Link
                to={"/apps"}
                className="ps-3 py-2 text-md flex justify-start items-center gap-2 hover:bg-orange-500 rounded-md transition-colors group/link"
              >
                <FaAddressCard className="size-5 group-hover/link:text-white transition-colors" />
                <p className="w-0 overflow-clip group-hover:w-fit pr-0 transition-all group-hover:pr-8 whitespace-nowrap group-hover/link:text-white">
                  Mi cuenta
                </p>
              </Link>
            </li>
          </ul>
        </aside>
        <Outlet context={[user]} />
      </main>
    </div>
  );
}
