import { createContext } from "react";

const FavoriteContext = createContext({
  favoritePokemons: [],
  updateFavoritePokemon: (id) => null,
});

export const FavoriteProvider = FavoriteContext.Provider;

export default FavoriteContext;
