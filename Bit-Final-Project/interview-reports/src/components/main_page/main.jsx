import { useEffect, useState } from "react";
import { NavItem } from "react-bootstrap";
import { getCandidates } from "../../services/getData";
import { Card } from "../card/Card";
import SearchBar from "../search-bar/SearchBar";
import "./Main.css";

export const Main = () => {
  const [user, setUser] = useState([]);
  const [defaultUser, setDefaultUser] = useState([]);

  useEffect(() => {
    getCandidates().then((data) => {
      setUser(data);
      setDefaultUser(data);
    });
  }, []);

  return (
    <>
      <div className="container d-flex search-tab align-items-center">
        <div className="h2-candidates">
          <h2>Candidates</h2>
        </div>
        <div className="div-search-bar">
          <SearchBar
            setUser={setUser}
            defaultUser={defaultUser}
          />
        </div>
      </div>
      <div className="container">
        <hr />
      </div>
      <div className="container d-flex flex-wrap justify-content-center mt-5">
        {user.map((value) => {
          
          return <Card data={value} key={value.id} />;
        })}
      </div>
    </>
  );
};
