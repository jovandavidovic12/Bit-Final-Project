import React, { useState, useEffect } from 'react';
import { getAllReports } from '../../../services/getData';
import { BiDownArrow } from "react-icons/bi";
import { format } from "date-fns";
import Modal from "react-modal";
import { FaEye } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import SearchBar from "../../search-bar/SearchBar";

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

Modal.setAppElement("#root");

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [initialData, setInitialData] = useState([]);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectedData, setSelectedData] = useState({});
  useEffect(() => {
    getAllReports().then((data) => {
      setData(data);
      setInitialData(data);
    })
  }, []);

  const openModal = () => {
    setIsOpen(true);
  }

  const getAllData = (report) => {
    setSelectedData(report);
    openModal();
  };

  const afterOpenModal = () => {
    console.log('Otvoren je modal');
  }

  const closeModal = () => {
    setIsOpen(false);
  }

  const formatDate = (item) => {
    return format(new Date(item), "dd.MM.yyyy");
  }
  
  return (
    <>
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
                <h4>{selectedData.candidateName}</h4>
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
                    {selectedData && selectedData.interviewDate ? formatDate(selectedData.interviewDate) : "Nema trenutno datuma"}
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
                  <p>{selectedData.note}</p>
                </div>
              </div>
            </div>
          </>
        </Modal>
        <div className="div-search-bar">
          <SearchBar 
            setUser={setData}
            defaultUser={initialData}
          />
        </div>
        <table>
          <tbody>
            <tr>
              <th>
                <BiDownArrow /> Company
              </th>
              <th>
                <BiDownArrow /> Candidate Name
              </th>
              <th>
                <BiDownArrow /> Interview date
              </th>
              <th colSpan={"2"}>
                <BiDownArrow /> Status
              </th>
            </tr>
            {data.map((item) => {
              return (
                <tr key={item.id}>
                  <td>{item.companyName}</td>
                  <td>{item.candidateName}</td>
                  <td>{formatDate(item.interviewDate)}</td>
                  <td>{item.status}</td>
                  <td className="eye-icon">
                    <button
                      onClick={() => {
                        getAllData(item);
                      }}
                    >
                      <FaEye />
                    </button>
                    <button
                    >
                      <AiOutlineClose />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
  export default Dashboard;