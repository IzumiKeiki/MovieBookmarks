import { Link } from "react-router-dom";
import { BsBookmarks } from "react-icons/bs";
import Search from "../components/Search";
import CardList from "../components/CardList";
import Paginations from "../components/Paginations";

import { useContext, useEffect, useState } from "react";
import MovieContext from "../MovieContext";

function Home() {
  const { searchTerm, page, movies, dispatch } = useContext(MovieContext);

  return (
    <>
      <div className="container">
        <div className="header">
          <Link className="btn" to={"/bookmarks"}>
            <BsBookmarks />
            <p>Your bookmarks</p>
          </Link>
          <Search />
        </div>
        {}
        <Paginations />
        <CardList />
      </div>
    </>
  );
}

export default Home;
