import { Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <section className="absolute bottom-0 w-full bg-blue-400 py-8 rounded-lg flex justify-between">
      <div className="container relative z-10  px-4 mx-36">
        <div className="-m-8 flex flex-wrap items-center justify-between">
          <Link href='/history'>
          <Image
            src="/logo2x.png"
            height={120}
            width={120}
            alt="logo"
            className="relative bottom-12"
          />
          </Link>
        </div>
      </div>
      {/* twitter icon */}
      <div className=" flex justify-around">
        <div className="bg-slate-300 overflow-hidden rounded-lg p-2 pr-4 h-fit hover:rotate-1">
          <Link href="https://twitter.com/CapitechNepal">

            <Twitter />
            </Link>

        </div>
        <div className="text flex flex-col pr-16">
          <div className="header text-2xl font-bold p-2 flex text-slate-200 drop-shadow-md hover:drop-shadow-xl hover:shadow-black">
            Capitech.Nepal
          </div>
          <p className="text-sm inline-block px-6">Follow Us On Twitter for more updates!</p>
        </div>
      </div>
    </section>
  );
}
