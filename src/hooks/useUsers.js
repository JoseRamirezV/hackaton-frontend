import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router';
import { getToken } from '../utils/handleToken';

export const useUsers = () => {
   const [user, setUser] = useState();
   const location = useLocation();
   const navigate = useNavigate();

   useEffect(() => {
      const token = getToken();
      if (!token) return navigate('/login', { state: { unauthorized: true } });
      setUser(location.state);
   }, [location.state, navigate]);

   const logout = () => {
      window.localStorage.removeItem('token');
      navigate('/');
   };

   return {
      user,
      logout
   };
};
