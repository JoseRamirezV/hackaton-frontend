const baseURL = `${import.meta.env.VITE_BACKEND_URL}/application`;

export const getAll = async () => {
   try {
      const res = await fetch(baseURL);
      const { ok, data } = await res.json();

      return { ok, data };
   } catch (error) {
      return { error };
   }
};
