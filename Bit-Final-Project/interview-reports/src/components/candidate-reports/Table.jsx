
import "./Table.css";
import { FaEye } from "react-icons/fa";
import { BiDownArrow } from "react-icons/bi";
import { AiOutlineClose } from 'react-icons/ai'
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getCompanies } from "../../services/getData";
import './Modal.css'
import Modal from 'react-modal';


const customStyles = {
  content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
  },

  overlay: {
      backgroundColor: 'rgba(96, 96, 96, 0.75)',
  }

};



const Table = () => {
  const { id } = useParams();
  const [report, setReport] = useState("");
  const [modalIsOpen, setIsOpen] = useState(false);

  useEffect(() => {
    getCompanies().then((data) => {
      const newReport = data.filter(
        (item) => item.candidateId === parseInt(id)
      );
      setReport(newReport);
      console.log(newReport);
    });
  }, []);

  function openModal() {
    setIsOpen(true);
}

function afterOpenModal() {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = '#f00';
}

function closeModal() {
    setIsOpen(false);
}

return (
  <div className="container">
      <Modal
          contentClassName="card"
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Modal"
      >
          <>
              <div className="card">

                  <div>
                      <button className='close-icon' onClick={closeModal}><AiOutlineClose /></button>
                      <h4>Josefina <span></span></h4>
                      <hr />
                  </div>
                  <div className="overview-card d-flex">

                      <div className="info-report d-flex">
                          <div className="company">
                              <h6>Company</h6>
                              <p>Google</p>
                          </div>
                          <div className="interview-date">
                              <h6>Interview date</h6>
                              <p>Sun Aug 29 2021</p>
                          </div>
                          <div className="phase">
                              <h6>Phase</h6>
                              <p>final</p>
                          </div>
                          <div className="status">
                              <h6>Status</h6>
                              <p>passed</p>
                          </div>

                      </div>
                      <div className="notes">
                          <h6>Notes</h6>
                          <p>Incidunt in commodi aliquid tenetur architecto excepturi cupiditate. Id quibusdam quibusdam dolorem incidunt. Harum consequuntur rerum libero impedit. Quia omnis amet explicabo pariatur. Qui excepturi molestiae suscipit officia eius corrupti.</p>
                      </div>
                  </div>
              </div>
          </>
      </Modal>
      <table>
          <tbody>
              <tr>
                  <th><BiDownArrow /> Company</th>
                  <th><BiDownArrow /> Interview date</th>
                  <th colSpan={'2'}><BiDownArrow /> Status</th>
              </tr>
              { Object.values(report).map((item)=>{
      return <tr>
      <td>{item.companyName}</td>
      <td>20.03.2023.</td>
      <td>{item.status}</td>
      <td className="eye-icon">
        <FaEye />
      </td>
    </tr>
  })}

              
          </tbody>
      </table>
  </div>
)
}
export default Table;
