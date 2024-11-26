import { Route, Routes } from 'react-router';
import Home from './views/Home';
import Dashboard from './views/Dashboard';
import Login from './views/Login';
import AppManagement from './components/Dashboard/AppManagement';

function App() {
   return (
      <Routes>
         <Route index Component={Home} />
         <Route path='login' Component={Login} />
         <Route path='dashboard' Component={Dashboard}>
            <Route index Component={AppManagement} />
         </Route>
      </Routes>
   );
}

export default App;
