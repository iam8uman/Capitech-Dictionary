import { PlayCircleIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function DiscBox() {
  return (
    <div className="mx-40 rounded-md border border-blue-500 bg-white min-h-80 mb-28">
      <div className="flex flex-row">
        <div className="bg-black text-white overflow-hidden rounded-full p-2 m-2 h-fit hover:rotate-1">
          <Link href="/play">
            <PlayCircleIcon className="scale-150"/>
          </Link>
        </div>
        <p className="text-lg m-2 p-2">/text/</p>
      </div>
      <div className="p-4">
        <h1 className="text-lg flex gap-4 font-semibold">
            <Link href="/play">

            <button className="bg-black text-white px-4 py-1 rounded-lg">noun</button>
            </Link>
            <Link href="/play">
            <button className="bg-slate-300 text-black px-4 py-1 rounded-lg">verb</button>
            </Link>
        </h1>
        <div className="mt-3 text-md text-black px-3">
          <ol className="list-outside list-decimal" >
            <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis non voluptatem assumenda.
            </li>
            <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae officia dolorem deserunt distinctio dolorum quos fuga doloribus sint. Praesentium minima aspernatur dolor ipsum!</li>
            <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae officia dolorem deserunt distinctio dolorum quos fuga doloribus sint. Praesentium minima aspernatur dolor ipsum!</li>
           
          </ol>
        </div>
        <button
          type="button"
          className="mt-4 rounded-sm bg-black px-2.5 py-1 text-[10px] font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        >
          Read
        </button>
      </div>
    </div>
  );
}
