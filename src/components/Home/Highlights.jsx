import CardGrid from './CardGrid';

const Highlights = () => {
   return (
      <>
         <div
            id='contentHighlight'
            className={` w-screen bg-purple-400 h-56 flex justify-center items-center`}
         >
            <div
               id='highlight'
               className='w-full h-4/6 flex justify-center items-center'
            >
               <CardGrid />
            </div>
         </div>
      </>
   );
};

export default Highlights;
