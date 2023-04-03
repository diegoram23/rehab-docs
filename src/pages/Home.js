import { useEffect, useState } from "react";
import { db } from "../firebase/config";
import { collection, getDocs } from 'firebase/firestore'

const Home = () => {
    const [patients, setPatients] = useState([])

    useEffect(() => {
        const ref = collection(db, 'patients')

        getDocs(ref)
            .then(snapshot => {
                let results = []
                snapshot.docs.forEach(doc => {
                    results.push({ id: doc.id, ...doc.data() })
                })
                setPatients(results)
                console.log(results)
            })
    }, [])

    return (
        <main className="patients-container">
            {patients.map(patient =>
                <div className="patients-box" key={patient.id}>
                    <h3>{patient.Last}, {patient.first}</h3>
                    <p>{patient.DOB}</p>
                    <p>{patient.Diagnosis}</p>
                </div>
            )}
        </main>
    );
}

export default Home;