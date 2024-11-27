import React from "react";
import wallpaper from "../../assets/img-awp.avif";
import { LuDownload } from "react-icons/lu";
import { BiLike } from "react-icons/bi";

const Card = ({ app }) => {
  return (
    <div
      id="contentCard"
      className="flex ml-4 flex-col gap-2 w-full justify-end items-center text-gray-900 shadow-md rounded-2xl"
    >
      <header>
        <img className="w-5/8 rounded-2xl" src={app.imageURL} alt="imagen pwa" />
      </header>
      <main className="space-y-2 px-3 py-1">
        <h3 className="flex font-bold leading-tight">
          {app.title}
        </h3>
        <p className="text-xs text-pretty">
          {app.description}
        </p>
      </main>
      <footer className="flex gap-2 w-full justify-end gap-x-4 px-6 pb-4 text-gray-400">
        <div className="flex text-right gap-x-1">
          <BiLike className="size-5" />
          <span>{app.upVotes}</span>
        </div>
        <div className="flex justify-right gap-x-1">
          <LuDownload className="size-5" />
          <span>{app.downloads}</span>
        </div>
      </footer>
    </div>
  );
};
export default Card;
