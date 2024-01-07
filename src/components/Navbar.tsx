"use client";

import React from "react";
import { Menu, X } from "lucide-react";
import logo from "@/../public/logo.png";
import Image from "next/image";

export default function Navbar() {

  return (
    <div className="relative w-full bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
        <div className="inline-flex items-center space-x-2">
          <span>
            <Image src={logo} height={30} width={30} alt="logo" />
          </span>
          <span className="font-bold text-2xl">Capitech Dictionary!</span>
        </div>
      </div>
    </div>
  );
}
