import { useNavigate } from "react-router-dom";

import { db } from "../firebase/config";
import { doc, deleteDoc } from "firebase/firestore";

const PatientList = ({ patients }) => {
    const navigate= useNavigate()

    const handleClick = async (id) => {
        console.log(id)
        const docRef = doc(db, 'patients', id)
        await deleteDoc(docRef)
    }

    return (
        <main className="patients-container">
            {patients.map(patient =>
                <section className="patients-box" key={patient.id}>
                    <header className="patient-box-title">
                        <h3>{patient.last}, {patient.first}</h3>
                        <button className="delete-patient" onClick={() => handleClick(patient.id)}>X</button>
                    </header>
                    <p><strong>DOB: </strong>{patient.DOB}</p>
                    <div className="inline">
                        <p><strong>Dx: </strong>{patient.Diagnosis}</p>
                        <button onClick={() => navigate(`/patient/${patient.id}`)} className="all-notes-btn">History</button>
                        <button className="new-note-btn">New note</button>
                    </div>
                </section>
            )}
        </main>
    );
}

export default PatientList;