import CardGrid from '../components/Home/CardGrid';
import FieldApps from '../components/Home/FieldApps';
import Navbar from '../components/Home/Navbar';
import useApps from '../hooks/useApps';

const Home = () => {
   const { apps, isLoaded } = useApps();

   return (
      <div className='w-3/4 mx-auto'>
         <Navbar />
         {/* <Highlights /> */}
         <FieldApps />
         {isLoaded && <CardGrid apps={apps} />}
         <footer className='h-5 bg-purple-400'></footer>
      </div>
   );
};

export default Home;
