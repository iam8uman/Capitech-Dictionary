// src/pages/page.tsx
"use client";

import React, { useState } from "react";
import Search from "@/components/Search";
import DiscBox from "@/components/DiscBox";
import Footer from "@/components/Footer";

const Page: React.FC = () => {
  const [searchResult, setSearchResult] = useState<any[]>([]);
  const [searchHistory, setSearchHistory] = useState<string[]>([]);

  // Function to handle the search result
  const handleSearchResult = (result: any[]) => {
    setSearchResult(result);
  };

  // Function to handle the search history update
  const handleSearchHistoryUpdate = (word: string) => {
    setSearchHistory((prevHistory) => [...prevHistory, word]);
  };

  return (
    <>
      <div className="main bg-muted min-h-96">
        {/* Pass the handleSearchResult and handleSearchHistoryUpdate functions to the Search component */}
        <Search
          onSearchResult={handleSearchResult}
          onSearchHistoryUpdate={handleSearchHistoryUpdate}
        />

        {/* Pass the searchResult to the DiscBox component */}
        <DiscBox searchResult={searchResult} />

        <Footer />
      </div>
    </>
  );
};

export default Page;
