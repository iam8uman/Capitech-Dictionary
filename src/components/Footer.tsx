import { Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <section className="w-full bg-blue-400 py-8 rounded-lg flex flex-col items-center justify-center md:flex-row md:gap-96">
      {/* Logo */}
      <div className="mb-4 md:mb-0">
        <Link href="/history">
          <Image
            src="/logo2x.png"
            height={120}
            width={120}
            alt="logo"
            className="relative bottom-20"
          />
        </Link>
      </div>

      {/* Twitter Section */}
      <div className="flex flex-col items-center md:flex-row md:items-start justify-center md:justify-between px-4 md:relative md:left-56">
        {/* Twitter Icon */}
        <div className="bg-slate-300 overflow-hidden rounded-lg p-2 pr-4 h-fit hover:rotate-1 mb-4 md:mb-0">
          <Link href="https://twitter.com/CapitechNepal">
            <Twitter />
          </Link>
        </div>

        {/* Twitter Text */}
        <div className="text text-center md:text-left">
          <div className="header text-2xl font-bold p-2 text-slate-200 drop-shadow-md hover:drop-shadow-xl hover:shadow-black">
            Capitech.Nepal
          </div>
          <p className="text-sm inline-block px-6">Follow Us On Twitter for more updates!</p>
        </div>
      </div>
    </section>
  );
}
