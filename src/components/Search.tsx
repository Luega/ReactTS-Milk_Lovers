import React from "react";

type Props = {
  filter: string;
  setFilter: (filterFromInput: string) => void;
};

const Search = ({ setFilter, filter }: Props) => {
  return (
    <>
      <label>
        Search:
        <input
          type="text"
          id="search"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
      </label>
    </>
  );
};

export default Search;
