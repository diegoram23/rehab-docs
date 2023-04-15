import { useParams, useNavigate, Outlet } from "react-router-dom";
import { useState } from "react";

import { db } from "../../firebase/config";
import { collection, addDoc } from 'firebase/firestore'

const NewNote = () => {
    const { id } = useParams()

    //path information
    const path = `patients/${id}/notes`

    const navigate = useNavigate()

    //miscellaneous states
    const [isPending, setIsPending] = useState(false)
    const [date, setDate] = useState('')

    //Bed mobility states
    const [noteBedMobility, setNoteBedMobility] = useState('')

    //Transfers mobility states
    const [noteTransfers, setNoteTransfers] = useState('')

    //Ambulation mobility states
    const [noteAmbulation, setNoteAmbulation] = useState('')
    const [noteAssistiveDevice, setNoteAssistiveDevice] = useState('')
    const [noteDistance, setNoteDistance] = useState('')

    //Response and plan states
    const [noteResponse, setNoteResponse] = useState('')
    const [notePlan, setNotePlan] = useState('')


    const handleSubmitNote = async (e) => {
        e.preventDefault()
        setIsPending(true)

        const ref = collection(db, path)
        //creates new patient and sends values to db

        await addDoc(ref, {
            date: date,
            noteBedMobility: noteBedMobility,
            noteTransfers: noteTransfers,
            noteAmbulation: noteAmbulation,
            noteAssistiveDevice: noteAssistiveDevice,
            noteDistance: noteDistance,
            noteResponse: noteResponse,
            notePlan: notePlan
        })
        //Sends user to details page of current patient after submitting new note
        navigate(`/patient/${id}`)
    }

    return (
        <div>

            <form className="new-note" onSubmit={handleSubmitNote}>

                <legend>Today's date</legend>
                <input
                    required
                    type='date'
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                />

                {/*-------------- Fieldset for bed mobility ----------------*/}

                <fieldset>
                    <legend>Today's bed mobility</legend>

                    <input
                        type='radio'
                        id='independent-bm'
                        name="bed-mobility"
                        value='independent'
                        onChange={(e) => setNoteBedMobility(e.target.value)}
                    />
                    <label htmlFor="independent-bm">Independent</label>

                    <input
                        type='radio'
                        id='cga/sba-bm'
                        name="bed-mobility"
                        value='CGA/SBA'
                        onChange={(e) => setNoteBedMobility(e.target.value)}
                    />
                    <label htmlFor="cga/sba-bm">CGA/SBA</label>

                    <input
                        type='radio'
                        id='partial-assistance-bm'
                        name="bed-mobility"
                        value='Partial assistance'
                        onChange={(e) => setNoteBedMobility(e.target.value)}
                    />
                    <label htmlFor="partial-assistance-bm">Partial Assistance</label>

                    <input
                        type='radio'
                        id='max-assistance-bm'
                        name="bed-mobility"
                        value='Max assistance'
                        onChange={(e) => setNoteBedMobility(e.target.value)}
                    />
                    <label htmlFor="max-assistance-bm">Max Assistance</label>

                    <input
                        type='radio'
                        id='dnt-bm'
                        name="bed-mobility"
                        value='Max assistance'
                        onChange={(e) => setNoteBedMobility(e.target.value)}
                    />
                    <label htmlFor="dnt-bm">DNT</label>

                </fieldset>

                {/*------------- Fieldset for transfers ------------------*/}

                <fieldset>
                    <legend>Todays transfers</legend>

                    <input
                        type='radio'
                        id='independent-t'
                        name="transfers"
                        value='independent'
                        onChange={(e) => setNoteTransfers(e.target.value)}
                    />
                    <label htmlFor="independent-t">Independent</label>

                    <input
                        type='radio'
                        id='cga/sba-t'
                        name="transfers"
                        value='CGA/SBA'
                        onChange={(e) => setNoteTransfers(e.target.value)}
                    />
                    <label htmlFor="cga/sba-t">CGA/SBA</label>

                    <input
                        type='radio'
                        id='partial-assistance-t'
                        name="transfers"
                        value='Partial assistance'
                        onChange={(e) => setNoteTransfers(e.target.value)}
                    />
                    <label htmlFor="partial-assistance-t">Partial Assistance</label>

                    <input
                        type='radio'
                        id='max-assistance-t'
                        name="transfers"
                        value='Max assistance'
                        onChange={(e) => setNoteTransfers(e.target.value)}
                    />
                    <label htmlFor="max-assistance-t">Max Assistance</label>


                    <input
                        type='radio'
                        id='dnt-t'
                        name="transfers"
                        value='Max assistance'
                        onChange={(e) => setNoteTransfers(e.target.value)}
                    />
                    <label htmlFor="dnt-t">DNT</label>

                </fieldset>

                {/*-------------- Fielset for ambulation --------*/}

                <fieldset>
                    <legend>Todays ambulation</legend>

                    <input
                        type='radio'
                        id='independent-a'
                        name="ambulation"
                        value='independent'
                        onChange={(e) => setNoteAmbulation(e.target.value)}
                    />
                    <label htmlFor="independent-a">Independent</label>

                    <input
                        type='radio'
                        id='cga/sba-a'
                        name="ambulation"
                        value='CGA/SBA'
                        onChange={(e) => setNoteAmbulation(e.target.value)}
                    />
                    <label htmlFor="cga/sba-a">CGA/SBA</label>

                    <input
                        type='radio'
                        id='partial-assistance-a'
                        name="ambulation"
                        value='Partial assistance'
                        onChange={(e) => setNoteAmbulation(e.target.value)}
                    />
                    <label htmlFor="partial-assistance-a">Partial Assistance</label>

                    <input
                        type='radio'
                        id='max-assistance-a'
                        name="ambulation"
                        value='Max assistance'
                        onChange={(e) => setNoteAmbulation(e.target.value)}
                    />
                    <label htmlFor="max-assistance-a">Max Assistance</label>

                    <input
                        type='radio'
                        id='dnt-a'
                        name="ambulation"
                        value='Max assistance'
                        onChange={(e) => setNoteAmbulation(e.target.value)}
                    />
                    <label htmlFor="dnt-a">DNT</label>

                    {/*------------- Selects for ambulation ----------------------- */}

                    <label htmlFor="assistive-device">Assistive Device</label>
                    <select
                        id='assistive-device'
                        name='assistive-device'
                        value={noteAssistiveDevice}
                        onChange={(e) => setNoteAssistiveDevice(e.target.value)}
                    >
                        <option value=''>-- Select --</option>
                        <option value='none'>None</option>
                        <option value='SPC'>SPC</option>
                        <option value='FWW'>FWW</option>
                        <option value='4WW'>4WW</option>
                    </select>

                    <label htmlFor="distance">Distance</label>
                    <select
                        id='distance'
                        name='distance'
                        value={noteDistance}
                        onChange={(e) => setNoteDistance(e.target.value)}
                    >
                        <option value=''>-- Select --</option>
                        <option value='0 ft'>0 ft</option>
                        <option value='0-50 ft'>0-50 ft</option>
                        <option value='50-150 ft'>50-150 ft</option>
                        <option value='150-300 ft'>50-150 ft</option>
                        <option value='300+ ft'>300+ ft</option>
                    </select>

                </fieldset>
                {/*--------------- Patient response ----------------------- */}

                <fieldset>
                    <legend>Assessment and response</legend>
                    <label>
                        <textarea
                            required
                            type='text'
                            placeholder="Patient response..."
                            value={noteResponse}
                            onChange={(e) => setNoteResponse(e.target.value)}
                        >
                        </textarea>
                    </label>
                </fieldset>

                {/*----------------- Note plan ----------------------- */}

                <fieldset>
                    <legend>Plan</legend>
                    <label>
                        <textarea
                            required
                            type='text'
                            placeholder="Next session plan..."
                            value={notePlan}
                            onChange={(e) => setNotePlan(e.target.value)}
                        >
                        </textarea>
                    </label>
                </fieldset>

                {/*Changes button text and disables it temporarily while pushing new note data to db */}
                {!isPending && <button className="submit-note-btn">Submit note</button>}
                {isPending && <button className="submit-note-btn" disabled>Adding note...</button>}

            </form>
            <Outlet />
        </div>
    )
}

export default NewNote;
