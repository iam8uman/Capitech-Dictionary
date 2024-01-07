import DiscBox from "@/components/DiscBox";
import Footer from "@/components/Footer";
import Search from "@/components/Search";
import React from "react";

const page = () => {
  return (
    <>
      <div className="main bg-muted min-h-96">
        <Search />
        <DiscBox />
        <Footer />
      </div>
    </>
  );
};

export default page;
