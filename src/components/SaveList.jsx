import SaveCard from "./SaveCard";
import { useContext, useEffect, useState } from "react";
import MovieContext from "../MovieContext";

function SaveList() {
  const { list, dispatch } = useContext(MovieContext);

  const movies = list;

  if (movies.length > 0) {
    return (
      <>
        <div className="card-list">
          {movies.map((movie) => (
            <SaveCard key={movie.id} movie={movie} />
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

export default SaveList;
