import { GoSearch } from "react-icons/go";

type Props = {
  filter: string;
  setFilter: (filterFromInput: string) => void;
};

const Search = ({ setFilter, filter }: Props) => {
  return (
    <div>
      <GoSearch className="mr-2 inline text-2xl" />
      <input
        className="px-2 py-1 rounded border shadow"
        type="text"
        id="search"
        placeholder="Name..."
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
    </div>
  );
};

export default Search;
