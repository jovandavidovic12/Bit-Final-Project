import './ReportOverview.css'
import { AiOutlineClose } from 'react-icons/ai'

const ReportOverview = () => {

    return (
        <div className="container-liquid overview-bg">
            <div className="card">
                <div>
                    <h4>Josefina <span><AiOutlineClose className='close-icon'/></span></h4>
                    
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
        </div>
    )
}

export default ReportOverview;