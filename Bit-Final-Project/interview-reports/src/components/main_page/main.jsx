import { useEffect, useState } from "react";

export const Main = () => {
  const [user, setUser] = useState("");

  useEffect(() => {
    fetch("http://localhost:3333/api/candidates")
      .then((response) => response.json())
      .then((data) => setUser(data));
  }, []);

  console.log(user);


  const renderCandidates = () => {
    return Object.values(user).map((value, index)=> {
        return (
            <div key={value.id}>
                <img src={value.avatar} alt="" />
                <p>{value.name}</p>
            </div>
        )
    })
  }

  return <div>{renderCandidates()}</div>;
};
