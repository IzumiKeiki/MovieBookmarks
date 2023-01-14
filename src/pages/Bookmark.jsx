import { Link } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import SaveList from "../components/SaveList";

function Bookmarks() {
  return (
    <>
      <div className="container">
        <div className="header">
          <Link className="btn" to="/">
            <AiOutlineHome />
            <p>Back to Home</p>
          </Link>
        </div>
        <SaveList />
      </div>
    </>
  );
}

export default Bookmarks;
