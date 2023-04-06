
import { useState } from "react";
import { useNavigate } from "react-router";
import { db } from "../firebase/config";
import { doc, deleteDoc } from "firebase/firestore";

const Modal = ({ singlePatient }) => {

    const [modal, setModal] = useState(false)

    const navigate = useNavigate()

    //Function to remove patient from db and frontend
    const deletePatient = async (id) => {
        //closes modal
        setModal(!modal)

        const docRef = doc(db, 'patients', id)
        await deleteDoc(docRef)

        //sends user to homepage
        navigate('/')
    }


    return (
        <>
            <button className="delete-btn" onClick={() => setModal(!modal)}>Delete patient caseload</button>

            {/*Modal only appears if true */}

            {modal && <div className="modal">
                <div className="overlay"></div>
                <div className="modal-content">
                    <p>{`Are you sure you want to remove '${singlePatient[0].first} ${singlePatient[0].last}' from caseload?`}</p>
                    <div className="modal-btns-container">

                        {/*Clicking no closes modal */}
                        <button className="modal-btn" onClick={() => setModal(!modal)}>No</button>
                        {/*Clicking yes calls function to delete user */}
                        <button className="modal-btn" onClick={() => deletePatient(singlePatient[0].id)}>Yes</button>
                    </div>
                </div>
            </div>}
        </>
    );
}

export default Modal;
