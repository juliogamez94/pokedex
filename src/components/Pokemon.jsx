import React, { useContext } from "react";
import FavoriteContext from "../context/favoritesContext";

function Pokemon(props) {
  const { pokemon } = props;

  const { favoritePokemons, updateFavoritePokemon } =
    useContext(FavoriteContext);

  const redHeart = "❤️";
  const blackHeart = "🖤";

  const heart = favoritePokemons.includes(pokemon.name) ? redHeart : blackHeart;

  const clickFav = (e) => {
    e.preventDefault();
    updateFavoritePokemon(pokemon.name);
  };
  return (
    <div className="pokemon-card">
      <div className="pokemon-img-container">
        <img
          src={pokemon.sprites.front_default}
          className="pokemon-img"
          alt={pokemon.name}
        />
      </div>
      <div className="card-body">
        <div className="card-top">
          <h3>{pokemon.name}</h3>
          <div>#{pokemon.id}</div>
        </div>
        <div className="card-bottom">
          <div className="card-type">
            {pokemon.types.map((type, idx) => {
              return (
                <div key={idx} className="pokemon-type-text">
                  {type.type.name}
                </div>
              );
            })}
          </div>
          <button onClick={clickFav}>
            <div className="pokemon-favorite">{heart} </div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Pokemon;
