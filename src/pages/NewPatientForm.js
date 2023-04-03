import { useState } from "react";
import { useNavigate } from "react-router";

import { db } from "../firebase/config";
import { collection, addDoc} from 'firebase/firestore'

const NewPatientForm = () => {
    const navigate = useNavigate()

    const [first, setFirst] = useState('')
    const [last, setLast] = useState('')
    const [DOB, setDOB] = useState('')
    const [Diagnosis, setDiagnosis] = useState('')
    const [isPending, setIsPending] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsPending(true)

        const ref = collection(db, 'patients')
        //creates new patient and sends values to db
        await addDoc(ref, {
            first: first,
            last: last,
            DOB: DOB,
            Diagnosis: Diagnosis
        })
        setIsPending(false)
        //sends user back to homepage after submit
        navigate('/')
    }

    return (
        <div className="patient-form">

            <h2>Patient information</h2>

            <form onSubmit={handleSubmit}>
                <label>
                    <span>First name:</span>
                    <input
                        required
                        type='text'
                        placeholder="First name"
                        value={first}
                        onChange={(e) => setFirst(e.target.value)}
                    />
                </label>
                <label>
                    <span>Last name:</span>
                    <input
                        required
                        type='text'
                        placeholder="Last name"
                        value={last}
                        onChange={(e) => setLast(e.target.value)}
                    />
                </label>
                <label>
                    <span>DOB:</span>
                    <input
                        required
                        type='date'
                        value={DOB}
                        onChange={(e) => setDOB(e.target.value)}
                    />
                </label>
                <label>
                    <span>Diagnosis:</span>
                    <input
                        required
                        type='text'
                        placeholder="Diagnosis"
                        value={Diagnosis}
                        onChange={(e) => setDiagnosis(e.target.value)}
                    />
                </label>
                {!isPending && <button className="patient-form-btn">Add patient</button>}
                {isPending && <button className="patient-form-btn" disabled>Adding patient...</button>}
                <p>{first} {last} {DOB} {Diagnosis}</p>
            </form>
        </div>
    );
}

export default NewPatientForm;