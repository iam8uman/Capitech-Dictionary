import Footer from "@/components/Footer";
import { Search } from "lucide-react";
import React from "react";

const page = () => {
  return (
    <>
      <div className="main bg-muted min-h-96">
        {/* Search bar here  */}
        <div className="flex grow shadow-md bg-muted mx-40 my-12">
          <input
            className="flex h-10 w-full rounded-md bg-slate-40000 text-black px-3 py-2 text-sm placeholder:text-black focus:outline-blue-500 focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
            type="search"
            placeholder="Serach"
          />
        </div>

        <Footer />
      </div>
    </>
  );
};

export default page;
