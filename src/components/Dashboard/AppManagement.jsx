import { PiDownload } from "react-icons/pi";
import Card from "../Home/Card";
import { MdOutlineMessage } from "react-icons/md";
import { IoApps } from "react-icons/io5";
import useApps from "../../hooks/useApps";
import { useEffect } from "react";
import { useOutletContext } from "react-router";

export default function AppManagement() {
  const { apps, counts, getAppsByUserId } = useApps();
  const [user] = useOutletContext();

  useEffect(() => {
    user && getAppsByUserId(user._id);
  }, [user]);

  return (
    <div className="size-full py-10">
      <div className="grid mt-4 mb-8 grid-cols-3 gap-8 justify-items-center text-gray-900">
        <div className="relative justify-items-center">
          <PiDownload className="size-8" />
          <h2 className="text-lg">Total Descargas</h2>
          <span className="absolute bottom-3/4 left-1/2 ms-1 bg-orange-600 rounded-lg text-xs text-white text-center px-2 py-1">
            {counts.totalDownloads}
          </span>
        </div>

        <div className="relative justify-items-center">
          <MdOutlineMessage className="size-8" />
          <h2 className="text-lg">Reseñas totales</h2>
          <span className="absolute bottom-3/4 left-1/2 ms-1 bg-orange-600 rounded-lg text-xs text-white text-center px-2 py-1">
            8
          </span>
        </div>

        <div className="relative justify-items-center">
          <IoApps className="size-8" />
          <h2 className="text-lg">Total Aplicaciones</h2>
          <span className="absolute bottom-3/4 left-1/2 ms-1 bg-orange-600 rounded-lg text-xs text-white text-center px-2 py-1">
            {counts.totalApps}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(15rem,1fr))] gap-8 w-10/12 mx-auto items-center">
        {apps && apps.map((app) => <Card key={app._id} app={app} />)}
      </div>
    </div>
  );
}
