import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { getAll } from '../services/app.service';
import { getUserApps } from '../services/user.service';

export default function useApps() {
   const [apps, setApps] = useState([]);
   const [isLoaded, setIsLoaded] = useState(false);
   const navigate = useNavigate();

   useEffect(() => {
      getApps();
   }, []);

   const getApps = async () => {
      const { ok, data } = await getAll();
      if (!ok) return;

      setApps(data);
      setIsLoaded(true);
   };

   const getAppsByUserId = async (id) => {
      const { ok, data, unauthorized } = await getUserApps(id);
      if (!ok) return;
      if (unauthorized)
         return navigate('/login', {
            state: {
               unauthorized,
            },
         });

      setApps(data);
   };

   return {
      apps,
      isLoaded,
      getAppsByUserId,
   };
}
