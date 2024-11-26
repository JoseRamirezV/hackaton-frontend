import { AiOutlineLogout } from 'react-icons/ai';
import { IoApps } from 'react-icons/io5';
import { Link, Outlet } from 'react-router';
import { useUsers } from '../hooks/useUsers';

export default function Dashboard() {
   const {user, logout} = useUsers()

   return (
      <div className='h-screen bg-gray-100'>
         <header className='absolute flex justify-between items-center h-20 w-full bg-gray-100 px-10'>
            <img src="vite.svg" alt="" className='size-10'/>
            <div className='flex gap-2 items-center text-gray-700'>
               <p className='text-lg'>{user&& user.name}</p>
               <button onClick={logout} className='hover:text-red-600 transition-colors'><AiOutlineLogout className='size-5'/></button>
            </div>
         </header>
         <main className='flex h-full pt-20 bg-gray-50'>
            <aside className='flex flex-col w-fit h-full p-2 bg-gray-100 text-gray-700 group'>
               <ul>
                  <li className='flex justify-start items-center gap-2 ps-2 py-1 text-lg'>
                     <Link to={'/dashboard'} className='contents'>
                        <IoApps className='size-5' />
                        <p className='w-0 overflow-clip group-hover:w-fit pr-0 transition-all group-hover:pr-8'>
                           Aplicaciones
                        </p>
                     </Link>
                  </li>
               </ul>
            </aside>

            <Outlet />
         </main>
      </div>
   );
}
