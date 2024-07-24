import { createContext, useContext, useState } from "react";

export const FavoritesContext = createContext();
FavoritesContext.displayName = "MyFavorites";

export default function FavoritesProvider({ children }) {
  const [favorite, setFavorite] = useState([]);

  return (
    <FavoritesContext.Provider value={{ favorite, setFavorite: setFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
}

// Hook personalizado
export function useFavoriteContext() {
  const { favorite, setFavorite } = useContext(FavoritesContext);

  function addFavorite(newFavorite) {
    // Verificar se há itens repetidos
    const repatedFavorite = favorite.some((item) => item.id === newFavorite.id);

    // Nova lista recebe lista anterior
    let newList = [...favorite];

    // Verificar se há repetidos e adicionar a lista
    if (!repatedFavorite) {
      newList.push(newFavorite);
      return setFavorite(newList);
    }

    // Se for repetido é tirado da lista
    newList = favorite.filter((fav) => fav.id !== newFavorite.id);
    return setFavorite(newList);
  }

  return { favorite, addFavorite };
}
