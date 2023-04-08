import "./card.css";
import { Link } from "react-router-dom";
export const Card = ({ data }) => {
  console.log(data);

  return (
    <Link
      to={`/candidate-reports/${data.id}`}
      className="glavni d-flex justify-content-center m-2 col-12 col-xl-3 col-l-5 col-md-4 text-decoration-none text-dark"
    >
      <div
        className="card-container p-4 d-flex flex-column align-items-center"
        key={data.id}
      >
        <div className="img-container">
          <img src={data.avatar} alt="" className="card-image " />
        </div>
        <div className="pt-3">
          <p>{data.name}</p>
        </div>
        <div className="pt-3">
          <p className="paragraph">{data.email}</p>
        </div>
      </div>
    </Link>
  );
};
