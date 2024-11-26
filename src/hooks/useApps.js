import { useEffect, useState } from 'react';
import { getAll } from '../services/app.service';

export default function useApps() {
   const [apps, setApps] = useState([]);
   const [isLoaded, setIsLoaded] = useState(false);

   useEffect(() => {
      getApps();
   }, []);

   const getApps = async () => {
      const { ok, data } = await getAll();
      if (!ok) return;

      setApps(data);
      setIsLoaded(true);
   };

   return {
      apps,
      isLoaded,
   };
}
