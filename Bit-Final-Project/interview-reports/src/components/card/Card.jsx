import './card.css';
export const Card = () =>{


    return(
        <div className="card-container col-2 p-1 m-4 bg-light" >
            <div className="img-container ">
                <img src="https://thumbs.dreamstime.com/b/black-software-web-developer-programming-code-icon-isolated-white-background-javascript-computer-script-random-parts-program-219509280.jpg" alt="" className="card-image "/>
            </div>
            <div className='pt-3'>
                <h3>Name</h3>
            </div>
            <div className='pt-2'>
                <h5>E-mail</h5>
            </div>
        </div>
    )
}