import { useParams } from "react-router-dom";
import useCollection from "../hooks/useCollection";


const PatientDetails = () => {
    const { id } = useParams()
    const {documents: patients} = useCollection('patients')

    const single = patients.filter(patient => patient.id === id)
    console.log(single)
    return (
            <main className="patients-container">
                {single.map(patient =>
                    <section className="patients-box" key={patient.id}>
                        <header className="patient-box-title">
                            <h3>{patient.last}, {patient.first}</h3>
                        </header>
                        <p><strong>DOB: </strong>{patient.DOB}</p>
                        <div className="inline">
                            <p><strong>Dx: </strong>{patient.Diagnosis}</p>
                        </div>
                    </section>
                )}
            </main>
    );
}

export default PatientDetails;