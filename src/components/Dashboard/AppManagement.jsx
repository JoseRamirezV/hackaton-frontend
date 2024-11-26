import { PiDownload } from 'react-icons/pi';
import Card from '../Home/Card';
import { MdOutlineMessage } from 'react-icons/md';
import { IoApps } from 'react-icons/io5';

export default function AppManagement() {
   return (
      <div className='size-full'>
         <div className='grid my-4 mx-4 grid-cols-3 gap-8 justify-items-center text-gray-900'>
            <div className='justify-items-center'>
               <PiDownload className='size-8' />
               <h2 className='text-lg'>Total Descargas</h2>
               <span className='bg-orange-600 w-12 rounded-lg text-lg text-white text-center px-2 py-1'>
                  8
               </span>
            </div>

            <div className='justify-items-center'>
               <MdOutlineMessage className='size-8' />
               <h2 className='text-lg'>Reseñas totales</h2>
               <span className='bg-orange-600 w-12 rounded-lg text-lg text-white text-center px-2 py-1'>
                  8
               </span>
            </div>

            <div className='justify-items-center'>
               <IoApps className='size-8' />
               <h2 className='text-lg'>Total Aplicaciones</h2>
               <span className='bg-orange-600 w-12 rounded-lg text-lg text-white text-center px-2 py-1'>
                  10
               </span>
            </div>
         </div>

         <div className='grid grid-cols-4 gap-4 items-center'>
            <div>
               <Card />
            </div>
            <div>
               <Card />
            </div>
            <div>
               <Card />
            </div>
            <div>
               <Card />
            </div>
            <div>
               <Card />
            </div>
            <div>
               <Card />
            </div>
            <div>
               <Card />
            </div>
            <div>
               <Card />
            </div>
         </div>
      </div>
   );
}
