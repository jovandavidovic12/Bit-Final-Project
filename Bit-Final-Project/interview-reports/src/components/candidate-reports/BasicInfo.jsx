import './BasicInfo.css';
import { useState } from 'react';
import { useEffect } from 'react';

const BasicInfo = () => {

    const [userData, setUserData] = useState([]);
    const candidateId = "56479186"
    // localStorage.getItem("candidateId");

    useEffect(() => {
        fetch(`http://localhost:3333/api/candidates`)
            .then((response) => response.json())
            .then((data) => {
                setUserData(data)
                console.log(data)
            });

        console.log("basic info console> ", userData);

    }, []);

    return (
        <div className="container info-card">

            {userData.map((item, i) => {

                // for (let i = 0; i < userData.length; i++) {
                    if (item.id == candidateId) {
                        return (
                            <>
                                <div className='candidate-image'>
                                    <img src={item.avatar} alt="" />
                                </div>
                                <div className="info">
                                    <div className="name">
                                        <p className='tag'>Name:</p>
                                        <h3>{item.name}</h3>
                                    </div>
                                    <div className="dob">
                                        <p className='tag'>Date of birth:</p>
                                        <h3>{item.birthday}</h3>
                                    </div>

                                    <div className='email-education'>
                                        <div className="email">
                                            <p className='tag'>Email:</p>
                                            <h3>{item.email}</h3>
                                        </div>
                                        <div className="education">
                                            <p className='tag'>Education:</p>
                                            <h3>{item.education}</h3>
                                        </div>
                                    </div>
                                </div>
                            </>

                        )
                    // }
                }
            })}


            {/* <div className='candidate-image'>
                <img src="https://placehold.co/600x400" alt="" />
            </div>
            <div className="info">
                <div className="name">
                    <p className='tag'>Name:</p>
                    <h3>Josefina Higgins</h3>
                </div>
                <div className="dob">
                    <p className='tag'>Date of birth:</p>
                    <h3>01.01.1991.</h3>
                </div>

                <div className='email-education'>
                    <div className="email">
                        <p className='tag'>Email:</p>
                        <h3>josefina.higgins@gmail.com</h3>
                    </div>
                    <div className="education">
                        <p className='tag'>Education:</p>
                        <h3>Belgrade Institute of Technology</h3>
                    </div>
                </div>
            </div> */}
        </div>
    )
}

export default BasicInfo;