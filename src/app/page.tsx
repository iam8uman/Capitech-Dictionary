// src/app/main.tsx
"use client"

import React, { useState } from "react";
import Search from "@/components/Search";
import DiscBox from "@/components/DiscBox";
import Footer from "@/components/Footer";

const Main: React.FC = () => {
  const [searchResult, setSearchResult] = useState<any[]>([]);

  // Function to handle the search result
  const handleSearchResult = (result: any[]) => {
    setSearchResult(result);
  };

  return (
    <>
      <div className="main bg-muted min-h-96">
        {/* Pass the handleSearchResult function to the Search component */}
        <Search onSearchResult={handleSearchResult} />
        
        {/* Pass the searchResult to the DiscBox component */}
        <DiscBox searchResult={searchResult} />
        
        <Footer />
      </div>
    </>
  );
};

export default Main;
