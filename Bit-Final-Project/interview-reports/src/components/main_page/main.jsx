import { useEffect, useState } from "react";
import {  getCandidates } from "../../services/getData";
import { Card } from "../card/Card";

export const Main = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    getCandidates().then((data) => {
      setUser(data)
    })
  }, []);

  

  return (
    <div className="container d-flex flex-wrap justify-content-center mt-5">
      {user.map((value) => {
        return <Card data={value} key={value.id} />;
        
        })}
    </div>
  );
};