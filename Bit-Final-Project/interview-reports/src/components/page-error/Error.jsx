import "./Error.css";
import { useNavigate } from "react-router-dom";
export const Error = () => {
  const navigate = useNavigate();

  const GoHome = () => {
    navigate("/");
  };
  return (
    <div className="error mt-5 d-flex text-center justify-content-center flex-column">
      <div>
        <h1 className="errorText">Ooops!</h1>
      </div>
      <p className="pageNot">404 - PAGE NOT FOUND</p>
      <div>
        <button type="button" className="btn btn-primary mt-5" onClick={GoHome}>
          GO TO HOMEPAGE
        </button>
      </div>
    </div>
  );
};
