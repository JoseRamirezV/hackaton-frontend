import { getToken } from "../utils/handleToken";

const baseURL = `${import.meta.env.VITE_BACKEND_URL}/users`;

export const getUserApps = async (id) => {
   const token = getToken()
   const res = await fetch(`${baseURL}/user/${id}`,{
      headers: {
         Authentication: `Bearer ${token}`
      }
   })
   const data = await res.json()
   return data
}