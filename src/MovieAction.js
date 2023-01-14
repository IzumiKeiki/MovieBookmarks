export const API_URL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=";

export const SEARCH_API =
  "https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query=";

export const IMG_PATH = "https://image.tmdb.org/t/p/w1280";

export const getMovies = async (url) => {
  const res = await fetch(url);
  const data = await res.json();
  return data.results;
};
