import { useState } from "react";
import { useNavigate } from "react-router";
import { getAll, getUserApps } from "../services/app.service";
// import mockData from '../mock.json';

export default function useApps() {
  const [apps, setApps] = useState([]);
  const [counts, setCounts] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const navigate = useNavigate();

  const getApps = async () => {
    const { ok, data } = await getAll();
    if (!ok) return;

    setApps(data);
    // setApps(mockData);
    setIsLoaded(true);
  };

  const getAppsByUserId = async (id) => {
    const { ok, data, counts, unauthorized } = await getUserApps(id);
    if (!ok) return;
    if (unauthorized)
      return navigate("/login", {
        state: {
          unauthorized,
        },
      });

    setApps(data);
    setCounts(counts);
  };

  return {
    apps,
    isLoaded,
    counts,
    getAppsByUserId,
    getApps,
  };
}
