import './BasicInfo.css';

const BasicInfo = () => {
    return (
        <div className="container info-card">
            <div className='candidate-image'>
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
            </div>
        </div>
    )
}

export default BasicInfo;