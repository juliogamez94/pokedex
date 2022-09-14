import React, { useState } from "react";
import { searchPokemon } from "../api";

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const [pokemon, setPokemon] = useState();

  const handleChange = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  const handleSearch = async (e) => {
    const data = await searchPokemon(search);
    setPokemon(data);
  };
  return (
    <div className="searchbar-container">
      <div className="searchbar">
        <input
          placeholder="Buscar pokemon..."
          type="text"
          onChange={handleChange}
          value={search}
        />
      </div>
      <div className="searchbar-btn">
        <button onClick={handleSearch}> Buscar</button>
      </div>
    </div>
  );
};

export default SearchBar;
