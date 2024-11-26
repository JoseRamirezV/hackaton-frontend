import { IoApps } from 'react-icons/io5';
import { Link, Outlet, Route, Routes } from 'react-router';
import Profile from '../components/Dashboard/Profile';
import UserProfile from '../components/Userprofile';

export default function Dashboard() {
   return (
      <div className='h-screen bg-gray-100'>
         <header className='absolute flex h-20 w-full bg-gray-100 px-2 py-1'></header>
         <main className='flex h-full pt-20 bg-gray-50'>
            <aside className='flex flex-col w-fit h-full p-2 bg-gray-100 text-gray-700 group'>
               <ul>
                  <li className='flex justify-start items-center gap-2 ps-2 py-1 text-lg'>
                     <Link to={'/apps'} className='contents'>
                        <IoApps className='size-5' />
                        <p className='w-0 overflow-clip group-hover:w-fit pr-0 transition-all group-hover:pr-8'>
                           Aplicaciones
                        </p>
                     </Link>
                  </li>
               </ul>
            </aside>
            <UserProfile/>
         </main>
      </div>
   );
}
