import './Table.css';
import { FaEye } from 'react-icons/fa';
import { BiDownArrow } from 'react-icons/bi';
import { useState } from 'react';
import { useEffect } from 'react';
import ReportOverview from './ReportOverview';

const Table = () => {

    const [data, setData] = useState([]);

    const candidateId = "56479186"
    // localStorage.getItem("candidateId")

    useEffect(() => {
        fetch(`http://localhost:3333/api/reports?candidateId=${candidateId}`)
            .then((response) => response.json())
            .then((data) => {
                setData(data)
            });

        // console.log(data);

    }, []);



    return (
        <div className="container">
            <table>
                <tr>
                    <th><BiDownArrow /> Company</th>
                    <th><BiDownArrow /> Interview date</th>
                    <th colSpan={'2'}><BiDownArrow /> Status</th>
                </tr>

                {data.map((item, i) => {
                    return (
                        <tr id={i}>
                            <td>{item.companyName}</td>
                            <td>{item.interviewDate}</td>
                            <td>{item.status}</td>
                            <td className='eye-icon'><FaEye /></td>
                        </tr>
                    )
                })}
                {/* <tr>
                    <td>Google</td>
                    <td>20.03.2023.</td>
                    <td>Passed</td>
                    <td className='eye-icon'><FaEye /></td>
                </tr>

                <tr>
                    <td>Google</td>
                    <td>20.03.2023.</td>
                    <td>Passed</td>
                    <td className='eye-icon'><FaEye /></td>
                </tr> */}
            </table>
        </div>
    )
}

export default Table;