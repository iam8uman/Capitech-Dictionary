// src/app/history.tsx
"use client";

import React from "react";
import DiscBox from "@/components/DiscBox";

const History: React.FC = () => {
  // Assume we have a history of search results(yo chai assume nai garne aba)
  const searchHistory: any[] = [
    // Sample search result data
    {
      word: "Suman",
      meanings: [
        {
          partOfSpeech: "noun",
          definitions: [
            {
              definition: "A representative form or pattern",
              synonyms: ["model", "exemplar"],
              antonyms: ["counterexample"],
            },
          ],
        },
      ],
    },
    // Add more search results as needed
  ];

  return (
    <div className="mt-10 flex flex-col">
      {/* Iterate over search history and display DiscBox for each result */}
      {searchHistory.map((result, index) => (
        <div key={index} className="text-lg  font-semibold py-5">
          <div className="text-2xl font-mono px-40">Search History <br />
          </div>
          <DiscBox searchResult={[result]} />
        </div>
      ))}
    </div>
  );
};

export default History;
