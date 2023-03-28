import { useEffect, useState } from "react";
import { Card } from "../card/Card";

export const Main = () => {
  const [user, setUser] = useState("");

  useEffect(() => {
    fetch("http://localhost:3333/api/candidates")
      .then((response) => response.json())
      .then((data) => setUser(data));
  }, []);

  return (
    <div className="container p-5 d-flex flex-wrap justify-content-between bg-light">
      {Object.values(user).map((value, index) => {
        return <Card data={value} key={index} />;
      })}
    </div>
  );
};
