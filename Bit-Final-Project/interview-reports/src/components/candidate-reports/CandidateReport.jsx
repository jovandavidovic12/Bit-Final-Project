import BasicInfo from "./BasicInfo";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCandidates } from "../../services/getData";
import "./CandidateReport.css";
import Table from "./Table";

const CandidateReport = () => {
  const { id } = useParams();
  const [info, setInfo] = useState([]);

  useEffect(() => {
    getCandidates().then((data) => {
      const newInfo = data.find((item) => item.id === parseInt(id));
      setInfo(newInfo);
    });
  }, [id]);

  return (
    <>
      <div className="container-liquid info-container">
        <BasicInfo data={info} />
      </div>
      <div className="container table">
        <h2>Reports</h2>
        <Table key={id}/>
      </div>
    </>
  );
};

export default CandidateReport;
