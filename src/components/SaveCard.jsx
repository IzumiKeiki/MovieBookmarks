import { useState, useEffect, useContext } from "react";
import { IMG_PATH } from "../MovieAction";
import MovieContext from "../MovieContext";

function SaveCard({ movie }) {
  const { list, dispatch } = useContext(MovieContext);
  const [btn, setBtn] = useState(false);

  useEffect(() => {
    const checklist = JSON.parse(localStorage.getItem("movie"));

    if (checklist) {
      const test = checklist.find((item) => movie.id === item.id);
      const test2 = typeof test === "object";

      if (test2) {
        setBtn(true);
      }
    }

    return;
  }, []);

  const handleClick = () => {
    const movieData = {
      id: movie.id,
      title: movie.title,
      poster_path: movie.poster_path,
      vote_average: movie.vote_average,
    };

    setBtn(!btn);

    if (!btn) {
      dispatch({ type: "save_movie", data: movieData });
    } else {
      const newlist = list.filter((item) => item.id !== movieData.id);
      dispatch({ type: "delete_movie", data: newlist });
    }
  };

  function getClassByRate(vote) {
    if (vote >= 8) {
      return "green";
    } else if (vote >= 5) {
      return "orange";
    } else {
      return "red";
    }
  }

  return (
    <>
      <div onClick={handleClick} className={`card + ${btn}`}>
        <img src={IMG_PATH + movie.poster_path} />
        <div className="movie-info">
          <h3>{movie.title}</h3>
          <span className={getClassByRate(movie.vote_average)}>
            {movie.vote_average}
          </span>
        </div>
        <p className="btn">{btn ? "Delete" : "Save"}</p>
      </div>
    </>
  );
}

export default SaveCard;
