"use client";

import React from "react";
import logo from "@/../public/logo.png";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="relative w-full bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
        <Link href="/">
          <div className="inline-flex items-center space-x-2">
            {/* Logo */}
            <span className="hidden md:inline-block">
              <Image src={logo} height={30} width={30} alt="logo" />
            </span>
            {/* Logo for smaller screens */}
            <span className="md:hidden">
              <Image src={logo} height={24} width={24} alt="logo" />
            </span>
            {/* Site Title */}
            <span className="font-bold text-xl md:text-2xl">Capitech Dictionary!</span>
          </div>
        </Link>
      </div>
    </div>
  );
}
