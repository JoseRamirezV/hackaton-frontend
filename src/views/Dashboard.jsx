import { IoApps, IoChatbox } from 'react-icons/io5';
import { Link, Outlet, Route, Routes } from 'react-router';
import Apps from '../components/Dashboard/Apps';
import { CiUser } from 'react-icons/ci';
import { FaAddressCard, FaPlus, FaRegPlusSquare } from 'react-icons/fa';
import { FaCartPlus } from 'react-icons/fa6';

export default function Dashboard() {
   return (
      <div className='h-screen bg-gray-100'>
         <header className='absolute flex h-20 w-full bg-gray-100 px-2 py-1'></header>
         <main className='flex min-h-full pt-20 bg-gray-50'>
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
                  <li className='flex justify-start items-center gap-2 ps-2 py-1 text-lg'>
                     <Link to={'/apps'} className='contents'>
                        <IoChatbox className='size-5' />
                        <p className='w-0 overflow-clip group-hover:w-fit pr-0 transition-all group-hover:pr-8'>
                           Reseñas
                        </p>
                     </Link>
                  </li>
                  <li className='flex justify-start items-center gap-2 ps-2 py-1 text-lg'>
                     <Link to={'/apps'} className='contents'>
                        <FaRegPlusSquare className='size-5' />
                        <p className='w-0 overflow-clip group-hover:w-fit pr-0 transition-all group-hover:pr-8'>
                           Agregar
                        </p>
                     </Link>
                  </li>
                  <li className='flex justify-start items-center gap-2 ps-2 py-1 text-lg'>
                     <Link to={'/apps'} className='contents'>
                        <FaAddressCard className='size-5' />
                        <p className='w-0 overflow-clip group-hover:w-fit pr-0 transition-all group-hover:pr-8'>
                           Mi cuenta
                        </p>
                     </Link>
                  </li>
               </ul>
            </aside>
            <Apps/>
         </main>
      </div>
   );
}
