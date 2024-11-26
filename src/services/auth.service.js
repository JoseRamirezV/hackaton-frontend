import { getToken } from '../utils/handleToken';

const baseURL = `${import.meta.env.VITE_BACKEND_URL}/users`;

export const login = async (id, password) => {
   try {
      const token = getToken();
      const req = await fetch(`${baseURL}/${id}&${password}`, {
         headers: {
            Authentication: `Bearer ${token}`,
         },
      });
      const res = await req.json();

      return res;
   } catch (error) {
      return { error };
   }
};
