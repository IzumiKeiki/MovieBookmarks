import { createContext, useEffect, useReducer } from "react";
import { useImmerReducer } from "use-immer";

const MovieContext = createContext();

const movieReducer = (draft, action) => {
  switch (action.type) {
    case "get_movie":
      draft.movies = action.data;
      return;
    case "search_movie":
      draft.movies = action.data;
      return;
    case "save_movie":
      draft.list.push(action.data);
      return;
    case "delete_movie":
      draft.list = action.data;
      return;
    case "increase":
      draft.page < 10 ? draft.page++ : (draft.page = 10);
      return;
    case "decrease":
      draft.page > 1 ? draft.page-- : (draft.page = 1);
      return;
    case "get_searchTerm":
      draft.searchTerm = action.data;
      return;
  }
};

export const MovieProvider = ({ children }) => {
  const storage = JSON.parse(localStorage.getItem("movie"));

  const initialState = {
    movies: [],
    save: false,
    list: storage ? storage : [],
    page: 1,
    searchTerm: "",
  };

  const [state, dispatch] = useImmerReducer(movieReducer, initialState);

  useEffect(() => {
    localStorage.setItem("movie", JSON.stringify(state.list));
  }, [state.list]);

  return (
    <MovieContext.Provider
      value={{
        ...state,
        dispatch,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};

export default MovieContext;
