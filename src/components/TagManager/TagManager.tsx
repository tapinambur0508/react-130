import { useState } from "react";

const TAGS = [
  "Apple",
  "Microsoft",
  "Microsemi",
  "MetaBank",
  "Meta",
  "Netflix",
  "Google",
  "Nvidia",
];

function TagManager() {
  const [tags, setTags] = useState<string[]>(TAGS);
  const [search, setSearch] = useState<string>("");

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    setSearch(value);
  };

  const handleTagRemove = (tag: string) => {
    setTags((prevTags) => prevTags.filter((t) => t !== tag));
  };

  const filterTags = tags.filter((tag) => {
    return tag.toLowerCase().includes(search);
  });

  return (
    <section>
      <div>
        <input placeholder="Search" onChange={handleSearchChange} />
      </div>

      {filterTags.length > 0 && <p>Tags {filterTags.length}</p>}

      {filterTags.map((tag) => (
        <span key={tag} style={{ marginRight: "10px" }}>
          {tag}
          <button onClick={() => handleTagRemove(tag)}>X</button>
        </span>
      ))}
    </section>
  );
}

export default TagManager;
