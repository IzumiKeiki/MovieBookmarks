import { useContext, useEffect, useState } from "react";
import { getMovies, API_URL, SEARCH_API } from "../MovieAction";
import MovieContext from "../MovieContext";
import Card from "./Card";

function CardList() {
  const { searchTerm, page, movies, dispatch } = useContext(MovieContext);

  useEffect(() => {
    if (searchTerm) {
      const url = SEARCH_API + searchTerm + "&page=" + page;

      const init = async () => {
        const movies = await getMovies(url);
        dispatch({ type: "get_movie", data: movies });
      };
      init();
    } else {
      const url = API_URL + page;
      const init = async () => {
        const movies = await getMovies(url);
        dispatch({ type: "get_movie", data: movies });
      };
      init();
    }
  }, [page, searchTerm]);

  if (movies.length > 0) {
    return (
      <>
        <div className="card-list">
          {movies.map((movie) => (
            <Card key={movie.id} movie={movie} />
          ))}
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="card-list">
          <div className="card">
            <img src="https://images.unsplash.com/photo-1609743522653-52354461eb27" />
            <div className="movie-info">
              <h3>No result</h3>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default CardList;
