import React, { useState, ChangeEvent, FormEvent } from "react";

interface SearchProps {
  onSearchResult: (result: any[]) => void;
}

const Search: React.FC<SearchProps> = ({ onSearchResult }) => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const submitData = async (): Promise<void> => {
    try {
      const res = await fetch(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${searchTerm}`
      );
      const data = await res.json();
      onSearchResult(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setSearchTerm(e.target.value);
  };

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    submitData();
  };

  return (
    <div>
      {/* Search bar here */}
      <div className="flex-grow shadow-md bg-muted mx-4 my-4 md:mx-40 md:my-12">
        <form onSubmit={handleFormSubmit}>
          <input
            className="flex h-10 w-full rounded-md text-black px-3 py-2 text-sm placeholder:text-black focus:outline-blue-500 focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
            type="search"
            placeholder="Search"
            value={searchTerm}
            onChange={handleInputChange}
          />
        </form>
      </div>
    </div>
  );
};

export default Search;
