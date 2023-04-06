import { useState } from "react";
import { useNavigate } from "react-router";

import { db } from "../firebase/config";
import { collection, addDoc } from 'firebase/firestore'

const NewPatientForm = () => {
    //sends user back to homepage after submit
    const navigate = useNavigate()

    //text input states
    const [first, setFirst] = useState('')
    const [last, setLast] = useState('')
    const [DOB, setDOB] = useState('')
    const [Diagnosis, setDiagnosis] = useState('')
    const [priorLiving, setPriorLiving] = useState('')

    //Fieldset states
    const [bedMobility, setBedMobility] = useState('')
    const [transfers, setTransfers] = useState('')
    const [ambulation, setAmbulation] = useState('')
    const [assistiveDevice, setAssistiveDevice] = useState('')
    const [distance, setDistance] = useState('')

    //Prevents multiple submits by temporarily disabling button
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
            Diagnosis: Diagnosis,
            priorLiving: priorLiving,
            bedMobility: bedMobility,
            transfers: transfers,
            ambulation: ambulation,
            assistiveDevice: assistiveDevice,
            distance: distance
        })
        setIsPending(false)
        //sends user back to homepage after submit
        navigate('/')
    }


    return (
        <div className="patient-form">

            <h2>Patient information</h2>

            {/*------------------- General patient information inputs --------------------- */}

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
                <label>
                    <span>Prior living Situation:</span>
                    <textarea
                        required
                        type='text'
                        placeholder="Prior living situation"
                        value={priorLiving}
                        onChange={(e) => setPriorLiving(e.target.value)}
                    >
                    </textarea>
                </label>

                {/*-------------- Fieldset for bed mobility ----------------*/}

                <fieldset>
                    <legend>Bed mobility history</legend>
                    <input
                        type='radio'
                        id='independent-bm'
                        name="bed-mobility"
                        value='independent'
                        onChange={(e) => setBedMobility(e.target.value)}
                    />
                    <label htmlFor="independent-bm">Independent</label>
                    <input
                        type='radio'
                        id='cga/sba-bm'
                        name="bed-mobility"
                        value='CGA/SBA'
                        onChange={(e) => setBedMobility(e.target.value)}
                    />
                    <label htmlFor="cga/sba-bm">CGA/SBA</label>
                    <input
                        type='radio'
                        id='partial-assistance-bm'
                        name="bed-mobility"
                        value='Partial assistance'
                        onChange={(e) => setBedMobility(e.target.value)}
                    />
                    <label htmlFor="partial-assistance-bm">Partial Assistance</label>
                    <input
                        type='radio'
                        id='max-assistance-bm'
                        name="bed-mobility"
                        value='Max assistance'
                        onChange={(e) => setBedMobility(e.target.value)}
                    />
                    <label htmlFor="max-assistance-bm">Max Assistance</label>
                </fieldset>

                {/*------------- Fieldset for transfers ------------------*/}

                <fieldset>
                    <legend>Transfers history</legend>
                    <input
                        type='radio'
                        id='independent-t'
                        name="transfers"
                        value='independent'
                        onChange={(e) => setTransfers(e.target.value)}
                    />
                    <label htmlFor="independent-t">Independent</label>
                    <input
                        type='radio'
                        id='cga/sba-t'
                        name="transfers"
                        value='CGA/SBA'
                        onChange={(e) => setTransfers(e.target.value)}
                    />
                    <label htmlFor="cga/sba-t">CGA/SBA</label>
                    <input
                        type='radio'
                        id='partial-assistance-t'
                        name="transfers"
                        value='Partial assistance'
                        onChange={(e) => setTransfers(e.target.value)}
                    />
                    <label htmlFor="partial-assistance-t">Partial Assistance</label>
                    <input
                        type='radio'
                        id='max-assistance-t'
                        name="transfers"
                        value='Max assistance'
                        onChange={(e) => setTransfers(e.target.value)}
                    />
                    <label htmlFor="max-assistance-t">Max Assistance</label>
                </fieldset>

                {/*-------------- Fielset for ambulation --------*/}

                <fieldset>
                    <legend>Ambulation history</legend>
                    <input
                        type='radio'
                        id='independent-a'
                        name="ambulation"
                        value='independent'
                        onChange={(e) => setAmbulation(e.target.value)}
                    />
                    <label htmlFor="independent-a">Independent</label>
                    <input
                        type='radio'
                        id='cga/sba-a'
                        name="ambulation"
                        value='CGA/SBA'
                        onChange={(e) => setAmbulation(e.target.value)}
                    />
                    <label htmlFor="cga/sba-a">CGA/SBA</label>
                    <input
                        type='radio'
                        id='partial-assistance-a'
                        name="ambulation"
                        value='Partial assistance'
                        onChange={(e) => setAmbulation(e.target.value)}
                    />
                    <label htmlFor="partial-assistance-a">Partial Assistance</label>
                    <input
                        type='radio'
                        id='max-assistance-a'
                        name="ambulation"
                        value='Max assistance'
                        onChange={(e) => setAmbulation(e.target.value)}
                    />
                    <label htmlFor="max-assistance-a">Max Assistance</label>
                    <label htmlFor="max-assistance-a">Assistive Device</label>

                    {/*------------- Selects for ambulation ----------------------- */}
                    <select
                        id='assistive-device'
                        name='assistive-device'
                        value={assistiveDevice}
                        onChange={(e) => setAssistiveDevice(e.target.value)}
                    >
                        <option value=''>-- Select --</option>
                        <option value='none'>None</option>
                        <option value='SPC'>SPC</option>
                        <option value='FWW'>FWW</option>
                        <option value='4WW'>4WW</option>
                    </select>
                    <label htmlFor="max-assistance-a">Distance</label>

                    <select
                        id='distance'
                        name='distance'
                        value={distance}
                        onChange={(e) => setDistance(e.target.value)}
                    >
                        <option value=''>-- Select --</option>
                        <option value='0 ft'>0 ft</option>
                        <option value='0-50 ft'>0-50 ft</option>
                        <option value='50-150 ft'>50-150 ft</option>
                        <option value='150-300 ft'>50-150 ft</option>
                        <option value='300+ ft'>300+ ft</option>
                    </select>

                </fieldset>

                {!isPending && <button className="patient-form-btn">Add patient</button>}
                {isPending && <button className="patient-form-btn" disabled>Adding patient...</button>}
                <p>{first} {last} {DOB} {Diagnosis}</p>
            </form>
        </div>
    );
}

export default NewPatientForm;