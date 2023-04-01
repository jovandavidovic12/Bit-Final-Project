import "./Header.css";
import { Link} from "react-router-dom";

const Header = () => {
 

  return (
    <div className="container-liquid header ">
      <div className="container content">
        <div>
          <h1>Interviews Reports</h1>
        </div>

        <Link to="/" className="candidates-button">
        <p>Candidates</p>
        </Link>
         
        
      </div>
    </div>
  );
};


export default Header;
