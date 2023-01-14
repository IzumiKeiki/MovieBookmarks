import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Bookmarks from "./pages/Bookmark";
import { MovieProvider } from "./MovieContext";

function App() {
  return (
    <>
      <MovieProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/bookmarks" element={<Bookmarks />} />
          </Routes>
        </Router>
      </MovieProvider>
    </>
  );
}

export default App;
