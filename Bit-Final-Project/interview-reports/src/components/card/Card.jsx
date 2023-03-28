import "./card.css";
import { useEffect } from "react";
export const Card = (user) => {
  return (
    <div>
      {user
        ? Object.values(user).map((item) => {
            return (
              <div
                className="card-container p-5 d-flex flex-column align-items-center"
                key={item.id}
              >
                <div className="img-container">
                  <img src={item.avatar} alt="" className="card-image " />
                </div>
                <div className="pt-3">
                <p>{item.name}</p>
                </div>
                <div className="pt-2">
                  <p>{item.email}</p>
                </div>
              </div>
            );
          })
        : ""}
    </div>
  );
};
