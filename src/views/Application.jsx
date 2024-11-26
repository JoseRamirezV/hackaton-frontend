// import FeedbackItem from '../components/FeedbackItem';

export default function Application() {
   // const comments = [1, 2, 3, 4, 5];
   const title = 'uber';
   const imageURL =
      'https://th.bing.com/th/id/OIP.7FzBf3Kxd0RtNloMTIsMPQHaHa?rs=1&pid=ImgDetMain';
   const appURL = 'https://www.uber.com/global/es/sign-in/';
   const description =
      'Obtén un viaje confiable en minutos con la aplicación de Uber.';
   return (
      <section>
         <div className='flex gap-5 w-3/4 px-2 py-10  mx-auto'>
            <div>
               <img
                  src={imageURL}
                  alt=''
                  className='size-20 shadow-md rounded-2xl'
               />
               <a
                  className=' px-1 py-1 text shadow-inner rounded-s'
                  href={appURL}
               >
                  Descargar
               </a>
            </div>
            <span>
               <h1 className='font-semibold '>{title}</h1>
               <p className='text-black'>{description}</p>
            </span>
         </div>

         <div className='flex flex-col gap-5'>
            {/* {comments.map((comment) => (
               <FeedbackItem />
            ))} */}
         </div>
      </section>
   );
}
