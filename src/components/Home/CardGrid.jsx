import PropTypes from 'prop-types';
import Card from './Card';

export default function CardGrid({ apps }) {
   return (
      <>
         <h2 className='text-black ml-4'>Aplicaciones</h2>
         <div className='grid grid-cols-[repeat(auto-fit,minmax(14, 1fr))] gap-5 place-items-center'>
            {apps.map((app) => (
               <Card key={app._id} app={app} />
            ))}
         </div>
      </>
   );
}

CardGrid.propTypes = {
   apps: PropTypes.arrayOf(
      PropTypes.shape({
         title: PropTypes.string,
         description: PropTypes.string,
         userId: PropTypes.string,
         imageURL: PropTypes.string,
         appURL: PropTypes.string,
         tags: PropTypes.arrayOf(PropTypes.string),
         isApp: PropTypes.bool,
         upVotes: PropTypes.number,
         downloads: PropTypes.number,
      })
   ).isRequired,
};
