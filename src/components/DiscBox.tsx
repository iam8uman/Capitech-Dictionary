"use client"

import React, { useState } from "react";
import { PlayCircleIcon } from "lucide-react";
import Link from "next/link";

interface DiscBoxProps {
  searchResult: any[];
}

const DiscBox: React.FC<DiscBoxProps> = ({ searchResult }) => {
  const [activePartOfSpeech, setActivePartOfSpeech] = useState<string>("noun");

  // Check if searchResult is defined and has elements
  const phonetic = searchResult && searchResult.length > 0 ? searchResult[0].phonetic : "";
  const meanings = searchResult && searchResult.length > 0 ? searchResult[0].meanings : [];

  const handlePartOfSpeechClick = (partOfSpeech: string): void => {
    setActivePartOfSpeech(partOfSpeech);
  };

  return (
    <div className="mx-4 md:mx-10 lg:mx-20 xl:mx-40 rounded-md border border-blue-500 bg-white min-h-80 mb-8 md:mb-12 lg:mb-16">
      <div className="flex flex-col md:flex-row">
        {/* Play button */}
        <div className="bg-black text-white overflow-hidden rounded-full p-2 m-2 h-fit hover:rotate-1">
          <Link href="/play">
            <PlayCircleIcon className="scale-150" />
          </Link>
        </div>
        {/* phonetics section lai lekhna paro yeha */}
        <p className="text-lg m-2 p-2">{phonetic}</p>
      </div>
      {/* Content section */}
      <div className="p-4">
        <h1 className="text-lg flex gap-2 md:gap-4 font-semibold">
          {/* Noun button */}
          <button
            className={`bg-black text-white px-3 py-1 rounded-lg ${
              activePartOfSpeech === "noun" ? "bg-opacity-80" : ""
            }`}
            onClick={() => handlePartOfSpeechClick("noun")}
          >
            noun
          </button>
          {/* Verb button */}
          <button
            className={`bg-slate-300 text-black px-3 py-1 rounded-lg ${
              activePartOfSpeech === "verb" ? "bg-opacity-80" : ""
            }`}
            onClick={() => handlePartOfSpeechClick("verb")}
          >
            verb
          </button>
        </h1>
        {/* Iterate over meanings and definitions */}
        {meanings.map((meaning: any, index: number) => (
          <div
            key={index}
            className={`mt-3 text-md text-black px-3 ${
              activePartOfSpeech === meaning.partOfSpeech ? "" : "hidden"
            }`}
          >
            <h2 className="text-xl font-semibold">{meaning.partOfSpeech}</h2>
            <ol className="list-outside list-decimal">
              {meaning.definitions.map((definition: any, subIndex: number) => (
                <li key={subIndex}>
                  {definition.definition}
                  {definition.synonyms && definition.synonyms.length > 0 && (
                    <div>
                      <strong>Synonyms:</strong> {definition.synonyms.join(", ")}
                    </div>
                  )}
                  {definition.antonyms && definition.antonyms.length > 0 && (
                    <div>
                      <strong>Antonyms:</strong> {definition.antonyms.join(", ")}
                    </div>
                  )}
                </li>
              ))}
            </ol>
          </div>
        ))}
        {/* Read button */}
        <button
          type="button"
          className="mt-4 rounded-sm bg-black px-2.5 py-1 text-[10px] font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        >
          Read
        </button>
      </div>
    </div>
  );
};

export default DiscBox;
