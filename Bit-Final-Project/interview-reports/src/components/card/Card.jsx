import "./card.css";
import { useEffect } from "react";
export const Card = (user) => {
  return (
    <div>
      {user
        ? Object.values(user).map((item) => {
            return (
              <div
                className="card-container col-2 p-1 m-4 bg-light"
                key={item.id}
              >
                <div className="img-container ">
                  <img src={item.avatar} alt="" className="card-image " />
                </div>
                <div className="pt-3">
                  <h3>{item.name}</h3>
                </div>
                <div className="pt-2">
                  <h5>{item.email}</h5>
                </div>
              </div>
            );
          })
        : ""}
    </div>
  );

  // (

  //     <div className="card-container col-2 p-1 m-4 bg-light" >
  //         <div className="img-container ">
  //             <img src="https://thumbs.dreamstime.com/b/black-software-web-developer-programming-code-icon-isolated-white-background-javascript-computer-script-random-parts-program-219509280.jpg" alt="" className="card-image "/>
  //         </div>
  //         <div className='pt-3'>
  //             <h3>{7}</h3>
  //         </div>
  //         <div className='pt-2'>
  //             <h5>E-mail</h5>
  //         </div>
  //     </div>
  // )
};
