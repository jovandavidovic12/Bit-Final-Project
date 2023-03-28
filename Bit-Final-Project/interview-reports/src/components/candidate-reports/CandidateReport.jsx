import BasicInfo from "./BasicInfo"
import Header from "./Header"
import './CandidateReport.css';
import Table from "./Table";

const CandidateReport = () => {

    return (
        <>
        <div className="container-liquid info-container">
            <Header />
            <BasicInfo />
        </div>
        <div className="container table">
            <h2>Reports</h2>
            <Table/>
        </div>
        </>
        
    )
}

export default CandidateReport;