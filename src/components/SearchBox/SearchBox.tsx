import { useDebouncedCallback } from "use-debounce";

import css from "./SearchBox.module.css";

interface SearchBoxProps {
  search: string;
  onSearch: (search: string) => void;
}

function SearchBox({ search, onSearch }: SearchBoxProps) {
  const debounced = useDebouncedCallback(
    // function
    (value: string) => {
      onSearch(value);
    },
    // delay in ms
    1000,
  );

  return (
    <input
      type="text"
      defaultValue={search}
      className={css.searchInput}
      placeholder="Search..."
      onChange={(event) => debounced(event.target.value)}
    />
  );
}

export default SearchBox;
