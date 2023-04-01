import './Header.css';
import { useNavigate } from 'react-router-dom';


const Header = () => {

    const navigate = useNavigate();

    const navigateToHome = () => {
        navigate('/');
      };

    return (
        <div className="container-liquid header ">
            <div className="container content">
                <div>
                    <h1>Interviews Reports</h1>
                </div>

                <div onClick={navigateToHome} className="candidates-button">
                   <p>Candidates</p>
                </div>
            </div>
        </div>
    )
}

export default Header;