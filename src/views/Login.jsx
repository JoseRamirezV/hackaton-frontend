import './Login';

export default function Login() {
   

   return (
      <div className='w-[1280] sm:w-auto min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8'>
         <h2 className='mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900'>
            Ingresa a tu cuenta
         </h2>

         <form
            action='#'
            className='space-y-6 mt-10 sm:mx-auto sm:w-full sm:max-w-sm'
         >
            <label
               htmlFor='email'
               className='flex flex-col gap-1 text-sm/6 font-medium text-gray-900'
            >
               Correo electrónico
               <input
                  id='email'
                  name='email'
                  type='email'
                  required
                  autoComplete='email'
                  className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm/6'
               />
            </label>

            <label
               htmlFor='password'
               className='flex flex-col gap-1 text-sm/6 font-medium text-gray-900'
            >
               Contraseña
               <input
                  id='password'
                  name='password'
                  type='password'
                  required
                  autoComplete='current-password'
                  className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm/6'
               />
            </label>

            <button
               type='submit'
               className='flex w-full justify-center rounded-md bg-black px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600 transition-colors'
            >
               Iniciar Sesión
            </button>
         </form>
      </div>
   );
}
