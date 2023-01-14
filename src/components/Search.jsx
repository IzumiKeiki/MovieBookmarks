import { ImSearch } from "react-icons/im";
import { useState, useContext, useEffect } from "react";
import MovieContext from "../MovieContext";
import { getMovies, SEARCH_API, API_URL } from "../MovieAction";

function Search() {
  const [text, setText] = useState("");

  const { page, dispatch } = useContext(MovieContext);

  const handleChange = (e) => setText(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (text) {
      const url = SEARCH_API + text;
      const movies = await getMovies(url);
      dispatch({ type: "search_movie", data: movies });
      dispatch({ type: "get_searchTerm", data: text });
    } else {
      dispatch({ type: "search_movie", data: [] });
      dispatch({ type: "get_searchTerm", data: "" });
    }
  };

  return (
    <>
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          className="search-input"
          type="text"
          autoFocus
          placeholder="Search..."
          onChange={handleChange}
        />
        <button type="submit" className="search-btn">
          <ImSearch className="search-icon" />
        </button>
      </form>
    </>
  );
}

export default Search;
