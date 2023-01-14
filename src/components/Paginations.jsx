import { GrCaretPrevious, GrCaretNext } from "react-icons/gr";
import { useContext, useEffect, useState, useRef } from "react";
import MovieContext from "../MovieContext";
import { getMovies, API_URL, SEARCH_API } from "../MovieAction";

function Paginations({}) {
  const { dispatch } = useContext(MovieContext);

  function increase() {
    dispatch({ type: "increase" });
  }

  function decrease() {
    dispatch({ type: "decrease" });
  }

  return (
    <>
      <div className="pagination">
        <GrCaretPrevious onClick={decrease} className="icon" />
        <GrCaretNext onClick={increase} className="icon" />
      </div>
    </>
  );
}

export default Paginations;
