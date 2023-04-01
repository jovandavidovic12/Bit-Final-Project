import "./card.css";
import { Link } from "react-router-dom";
export const Card = (user) => {
  // console.log(user)

  return (
    <Link
      to={`/candidate-reports/${user.data.id}`}
      className="glavni d-flex justify-content-center m-2 col-12 col-xl-3 col-l-5 col-md-4 text-decoration-none text-dark"
    >
      {user
        ? Object.values(user).map((item) => {
            return (
              <div
                className="card-container p-4 d-flex flex-column align-items-center"
                key={item.id}
              >
                <div className="img-container">
                  <img src={item.avatar} alt="" className="card-image " />
                </div>
                <div className="pt-3">
                  <p>{item.name}</p>
                </div>
                <div className="pt-3">
                  <p className="paragraph">{item.email}</p>
                </div>
              </div>
            );
          })
        : ""}
    </Link>
  );
};
