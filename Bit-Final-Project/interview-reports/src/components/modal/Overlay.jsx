import './Modal.css'
import { AiOutlineClose } from 'react-icons/ai'
import { useState } from 'react'
import { FaEye } from 'react-icons/fa';
import Overlay from 'react-overlays/Overlay'
import { Modal } from 'react-modal';

const Overlay = ({ open, onClose }) => {

    const [modal, setModal] = useState(open)

    // const toggleModal = () => {
    //     setModal(!modal)
    //     console.log("toggle> ", modal)
    // }

    if (!open) {
        return null;
    }
    else {
        return (
            <>
                <Modal
                    isOpen={modalIsOpen}
                    onAfterOpen={afterOpenModal}
                    onRequestClose={closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                >
                    <div className="container-liquid">
                        <div className='overview-bg'></div>
                        <div className="card">

                            <div>
                                <button className='close-icon' onClick={onClose}><AiOutlineClose /></button>
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
                    </div>
                </Modal>
            </>
        )

    }


}

export default Modal;

{/* <div className="modal">
                    <div onClick={toggleModal} className="overlay"></div>
                    <div className="modal-content">
                        <h2>Hello Modal</h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
                            perferendis suscipit officia recusandae, eveniet quaerat assumenda
                            id fugit, dignissimos maxime non natus placeat illo iusto!
                            Sapiente dolorum id maiores dolores? Illum pariatur possimus
                            quaerat ipsum quos molestiae rem aspernatur dicta tenetur. Sunt
                            placeat tempora vitae enim incidunt porro fuga ea.
                        </p>
                        <button className="close-modal" onClick={onClose}>
                            CLOSE
                        </button>
                    </div>
                </div> */}