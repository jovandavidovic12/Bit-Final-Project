import './Table.css';
import { FaEye } from 'react-icons/fa';
import { BiDownArrow } from 'react-icons/bi';

const Table = () => {
    return (
        <div className="container">
            <table>
                <tr>
                    <th><BiDownArrow/> Company</th>
                    <th><BiDownArrow/> Interview date</th>
                    <th colSpan={'2'}><BiDownArrow/> Status</th>
                </tr>
                <tr>
                    <td>Google</td>
                    <td>20.03.2023.</td>
                    <td>Passed</td>
                    <td className='eye-icon'><FaEye/></td>
                </tr>

                <tr>
                    <td>Google</td>
                    <td>20.03.2023.</td>
                    <td>Passed</td>
                    <td className='eye-icon'><FaEye/></td>
                </tr>
            </table>
        </div>
    )
}

export default Table;