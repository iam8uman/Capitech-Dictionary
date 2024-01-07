import { Twitter } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function Footer() {
  return (
    <section className="absolute bottom-0 w-full bg-blue-400 py-8 rounded-lg flex justify-between">
      <div className="container relative z-10  px-4 mx-36">
        <div className="-m-8 flex flex-wrap items-center justify-between">
          <Image
            src="/logo2x.png"
            height={120}
            width={120}
            alt="logo"
            className="relative bottom-12"
          />
        </div>
      </div>
      {/* twitter icon */}
      <div className="right-part flex justify-around">
        <div className="bg-slate-300 overflow-hidden rounded-lg  p-2 h-fit">
          <Twitter />
        </div>
        <div className="text">hello</div>{" "}
      </div>
    </section>
  );
}
