import { getToken } from "../utils/handleToken";

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

export const getUserApps = async (id) => {
  try {
    const token = getToken();
    const res = await fetch(`${baseURL}/user/${id}`, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
    const data = await res.json();

    return data;
  } catch (error) {
    return { error };
  }
};
