import { useEffect, useState } from "react";
import { Card } from "../card/Card";
import SearchBar from "../search-bar/SearchBar";
import './Main.css'

export const Main = () => {
  const [user, setUser] = useState([]);
  const [defaultUser, setDefaultUser]= useState([]);
  const [dataCopy, setDataCopy] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3333/api/candidates")
      .then((response) => response.json())
      .then((data) => {
        setUser(data)
        setDefaultUser(data)
        setDataCopy(data)
      });
  }, []);

  return (
    <>
      <div className="container d-flex search-tab">
        <div className="h2-candidates">
          <h2>Candidates</h2>
        </div>
        <div className="div-search-bar">
          <SearchBar dataCopy={dataCopy} setData={setUser} deafultData={defaultUser}/>
        </div>

      </div>
      <div className="container">
        <hr />
      </div>

      <div className="container d-flex flex-wrap justify-content-center mt-5">
        {Object.values(user).map((value, index) => {
          return <Card data={value} key={index} />;
        })}
      </div>
    </>
  );
};