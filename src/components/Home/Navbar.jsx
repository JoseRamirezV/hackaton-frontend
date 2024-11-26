import { AiOutlineSearch } from "react-icons/ai";
import { Link } from "react-router";

export default function Navbar() {
   return (
      <>
         <header
            id='contentSearch'
            className='flex w-3/4 mx-auto py-3 px-6 bg-slate-500 rounded-full mt-5'
         >
            <nav className='flex w-full justify-between'>
               <div className='relative'>
                  <input
                     className={`bg-purple-100 text-gray-700 rounded-full`}
                     type='text'
                  />
                  <button className={`absolute right-0 bg-purple-100 text-gray-700 rounded-full`}>
                     <AiOutlineSearch className="size-5"/>
                  </button>
               </div>
               <div>
                  <Link to='/login'>LogIn</Link>
               </div>
            </nav>
         </header>
      </>
   );
}
