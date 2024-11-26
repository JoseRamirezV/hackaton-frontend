import { Route, Routes } from 'react-router';
import Home from './views/Home';
import Dashboard from './views/Dashboard';

function App() {
   return (
      <Routes>
         <Route index Component={Home} />
         <Route path='/login' Component={Dashboard} />
      </Routes>
   );
}

export default App;
