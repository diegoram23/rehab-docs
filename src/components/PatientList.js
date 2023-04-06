import { useNavigate } from "react-router-dom";

const PatientList = ({ patients }) => {
    const navigate = useNavigate()

    return (
        <main className="patients-container">
            {patients.map(patient =>
                <section className="patients-box" key={patient.id}>
                    
                    {/*Displays name and min info of all patients available */}
                    <header className="patient-box-title">
                        <h3>{patient.last}, {patient.first}</h3>
                    </header>
                    <p><strong>DOB: </strong>{patient.DOB}</p>
                    <div className="inline-btns">
                        <p><strong>Dx: </strong>{patient.Diagnosis}</p>

                        {/*Redirects user to details page of patient chosen */}
                        <button onClick={() => navigate(`/patient/${patient.id}`)} className="all-notes-btn">History</button>
                        <button className="new-note-btn">New note</button>
                    </div>
                </section>
            )}
        </main>
    );
}

export default PatientList;


