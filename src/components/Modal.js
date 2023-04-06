
import { useState } from "react";

const Modal = ({ singlePatient }) => {

    const [modal, setModal] = useState(true)

    const toggleModal = (id) => {
        setModal(!modal)
        console.log('id', id)
        console.log('modal', modal)
    }

    return (
        <>
            <button className="delete-btn" onClick={() => toggleModal(singlePatient[0].id)}>Delete patient caseload</button>
            {modal && <div className="modal">
                <div className="overlay"></div>
                <div className="modal-content">
                    <p>{`Are you sure you want to remove ${singlePatient[0].first} ${singlePatient[0].last} from caseload?`}</p>
                    <div className="modal-btns-container">
                        <button className="modal-btn">No</button>
                        <button className="modal-btn">Yes</button>
                    </div>
                </div>
            </div>}
        </>
    );
}

export default Modal;
