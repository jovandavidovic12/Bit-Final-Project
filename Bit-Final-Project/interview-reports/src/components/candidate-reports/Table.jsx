import "./Table.css";
import { FaEye } from "react-icons/fa";
import { BiDownArrow } from "react-icons/bi";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getCompanies } from "../../services/getData";

const Table = () => {
  const { id } = useParams();
  const [report, setReport] = useState("");

  useEffect(() => {
    getCompanies().then((data) => {
      const newReport = data.filter(
        (item) => item.candidateId === parseInt(id)
      );
      setReport(newReport);
      console.log(newReport);
    });
  }, []);
  return (
    <div className="container">
      <table>
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
        
      </table>
    </div>
  );
};

export default Table;
