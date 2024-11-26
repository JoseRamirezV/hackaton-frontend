// import icono from '../../assets/iconoapp.png';
import PropTypes from 'prop-types';
import appsImg from '../../assets/apps.webp';

export default function Card({ app }) {
   return (
      <>
         <div
            id='contentCard'
            className='flex flex-col justify-center items-center shadow-md bg-gray-100'
         >
            <img
               className='w-full aspect-square rounded-b-xl object-cover'
               src={appsImg}
               alt='imagen pwa'
            />
            <div className='flex items-center space-x-2 w-full px-2 py-1'>
               {/* <img className='ml-4 w-10 h-10' src={icono} alt='icono pwa' /> */}
               <div className='flex flex-col text-gray-700'>
                  <p className='text-sm truncate w-28'>{app.title}</p>
                  {app.tags.length > 0 &&
                     app.tags.map((tag) => <span key={tag} className='text-xs'>{tag}</span>)}
                  <p className='text-xs'>4</p>
               </div>
            </div>
         </div>
      </>
   );
}

Card.propTypes = {
   app: PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string,
      userId: PropTypes.string,
      imageURL: PropTypes.string,
      appURL: PropTypes.string,
      tags: PropTypes.arrayOf(PropTypes.string),
      isApp: PropTypes.bool,
      upVotes: PropTypes.number,
      downloads: PropTypes.number,
   }).isRequired,
};
