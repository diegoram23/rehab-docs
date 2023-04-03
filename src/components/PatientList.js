const PatientList = ({patients}) => {

    return (
        <main className="patients-container">
            {patients.map(patient =>
                <div className="patients-box" key={patient.id}>
                    <h3>{patient.last}, {patient.first}</h3>
                    <p><strong>DOB: </strong>{patient.DOB}</p>
                    <div className="inline">
                        <p><strong>Dx: </strong>{patient.Diagnosis}</p>
                        <button className="all-notes-btn">Tx. history</button>
                        <button className="new-note-btn">New note</button>
                    </div>
                </div>
            )}
        </main>
    );
}

export default PatientList;