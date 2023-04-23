import { useParams } from "react-router-dom";
import useCollection from "../hooks/useCollection";

import Modal from "../components/Modal";
import Notes from "../components/Notes";

const PatientDetails = () => {
    const { id } = useParams()

    //Custom hook to fetch all patients available
    const { documents: patients } = useCollection('patients')

    //Filters patients list to the patient selected
    const singlePatient = patients.filter(patient => patient.id === id)

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
                    <p><strong>Therapy start date: </strong>{patient.therapyDate}</p>

                    {/*Patients previous mobility level */}
                    <p><strong>Bed mobility: </strong>{patient.bedMobility}</p>
                    <p><strong>Transfers: </strong>{patient.transfers}</p>
                    <p><strong>Ambulation: </strong>{patient.ambulation}, {patient.assistiveDevice}, {patient.distance}</p>
                    <p><strong>Prior Living Situation: </strong>{patient.priorLiving}</p>
                </section>
            )}
            <Notes path={`patients/${id}/notes`} />
            <Modal singlePatient={singlePatient} />

        </main>
    );
}

export default PatientDetails;

