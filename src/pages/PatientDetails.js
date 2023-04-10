import { useParams } from "react-router-dom";
import useCollection from "../hooks/useCollection";

import Modal from "../components/Modal";
import Notes from "../components/Notes";
import { db } from "../firebase/config";
import { collection, onSnapshot, query} from 'firebase/firestore'



import { useEffect } from "react";

const PatientDetails = () => {
    const { id } = useParams()

    //Custom hook to fetch all patients available
    const { documents: patients } = useCollection('patients')

  


















    //Filters patients list to the patient selected
    const singlePatient = patients.filter(patient => patient.id === id)
    console.log('single', singlePatient)

    return (

        <main className="patient-details-container">

            {/*Renders details of patient chosen by user*/}
            {singlePatient.map(patient =>
                <section className="patient-details-box" key={patient.id}>

                    {/*Patient name info */}
                    <header className="patient-details-title">
                        <h3>{patient.last}, {patient.first}</h3>
                    </header>

                    {/*Patient DOB and diagnosis info */}
                    <h3 className="patient-details-subtitle">PT Evaluation</h3>
                    <div className="patient-details-inline">
                        <p><strong>Diagnosis: </strong>{patient.Diagnosis}</p>
                        <p><strong>DOB: </strong>{patient.DOB}</p>
                    </div>

                    {/*Patients previous mobility level */}
                    <p><strong>Bed mobility: </strong>{patient.bedMobility}</p>
                    <p><strong>Transfers: </strong>{patient.transfers}</p>
                    <p><strong>Ambulation: </strong>{patient.ambulation}, {patient.assistiveDevice}, {patient.distance}</p>
                    <p><strong>Prior Living Situation: </strong>{patient.priorLiving}</p>
                </section>
            )}
            <Modal singlePatient={singlePatient} />
            <Notes path={`patients/${id}/notes`}/>
        </main>
    );
}

export default PatientDetails;

