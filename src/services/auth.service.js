const baseURL = `${import.meta.env.VITE_BACKEND_URL}/users`;

export const login = async (id, password) => {
try {
   const req = await fetch(`${baseURL}/${id}&${password}`)
   const res = await req.json()

   return res
} catch (error) {
   return {error}
}
}