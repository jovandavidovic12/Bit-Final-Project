import "./Table.css";
import { FaEye } from "react-icons/fa";
import { BiDownArrow } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getReports } from "../../services/getData";
import "./Modal.css";
import Modal from "react-modal";
import {format } from 'date-fns'

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },

  overlay: {
    backgroundColor: "rgba(96, 96, 96, 0.75)",
  },
};

Modal.setAppElement('#root');

const Table = () => {
  const { id } = useParams();
  const [report, setReport] = useState([]);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectedData, setSelectedData] = useState({});
  useEffect(() => {
    
    getReports(id).then((data) => {
      setReport(data);
      

    }
    
      );
  });
  // console.log(report)

  function openModal() {
    
    setIsOpen(true);

  }

  const getAllData = (report) => {
    setSelectedData(report);
    openModal();
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }


  const formatDate = ()=> {
    if(selectedData && selectedData.interviewDate) {
        return format(new Date(selectedData.interviewDate), 'MM-dd-yyyy')
    }

    return '';
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
              <button className="close-icon" onClick={closeModal}>
                <AiOutlineClose />
              </button>
              <h4>
                {selectedData.candidateName}
              </h4>
              <hr />
            </div>
            <div className="overview-card d-flex">
              <div className="info-report d-flex">
                <div className="company">
                  <h6>Company</h6>
                  <p>{selectedData.companyName}</p>
                </div>
                <div className="interview-date">
                  <h6>Interview date</h6>
                  {formatDate()}
                </div>
                <div className="phase">
                  <h6>Phase</h6>
                  <p>{selectedData.phase}</p>
                </div>
                <div className="status">
                  <h6>Status</h6>
                  <p>{selectedData.status}</p>
                </div>
              </div>
              <div className="notes">
                <h6>Notes</h6>
                <p>
                  {selectedData.note}
                </p>
              </div>
            </div>
          </div>

        </>
      </Modal>
      <table>
        <tbody>
          <tr>
            <th>
              <BiDownArrow /> Company
            </th>
            <th>
              <BiDownArrow /> Interview date
            </th>
            <th colSpan={"2"}>
              <BiDownArrow /> Status
            </th>
          </tr>
          {report.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.companyName}</td>
                <td>{format(new Date(item.interviewDate), 'MM-dd-yyyy')}</td>
                <td>{item.status}</td>
                <td className="eye-icon">
                  <button onClick={ ()=> {getAllData(item)}}  >
                    <FaEye />
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default Table;
