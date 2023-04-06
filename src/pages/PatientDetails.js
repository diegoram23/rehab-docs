
import { useParams, useNavigate } from "react-router-dom";
import useCollection from "../hooks/useCollection";


import { db } from "../firebase/config";
import { doc, deleteDoc } from "firebase/firestore";
import Modal from "../components/Modal";


const PatientDetails = () => {
    const { id } = useParams()
    const { documents: patients } = useCollection('patients')
    const navigate = useNavigate()

    //Filters patients list to the patient selected
    const singlePatient = patients.filter(patient => patient.id === id)


    const handleClick = async (id) => {
        const docRef = doc(db, 'patients', id)
        await deleteDoc(docRef)
        navigate('/')
    }

    console.log(singlePatient)
    return (
        <main className="patient-details-container">
            {singlePatient.map(patient =>
                <section className="patient-details-box" key={patient.id}>
                    <header className="patient-details-title">
                        <h3>{patient.last}, {patient.first}</h3>
                    </header>
                    <h3 className="patient-details-subtitle">PT Evaluation</h3>
                    <div className="patient-details-inline">
                        <p><strong>Diagnosis: </strong>{patient.Diagnosis}</p>
                        <p><strong>DOB: </strong>{patient.DOB}</p>
                    </div>
                    <p><strong>Bed mobility: </strong>{patient.bedMobility}</p>
                    <p><strong>Transfers: </strong>{patient.transfers}</p>
                    <p><strong>Ambulation: </strong>{patient.ambulation}, {patient.assistiveDevice}, {patient.distance}</p>
                    <p><strong>Prior Living Situation: </strong>{patient.priorLiving}</p>
                </section>
            )}
            <Modal singlePatient={singlePatient}/>
        </main>
    );
}

export default PatientDetails;

