import React, { useState } from "react";
import { searchPokemon } from "../api";

const SearchBar = () => {
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  const handleSearch = async (e) => {
    const data = await searchPokemon(search);
    console.log(data);
  };
  return (
    <div>
      <div>
        <input
          placeholder="Buscar pokemon..."
          type="text"
          onChange={handleChange}
          value={search}
        />
      </div>
      <div>
        <button onClick={handleSearch}> Buscar</button>
      </div>
    </div>
  );
};

export default SearchBar;
