import { useParams } from "react-router-dom";
import { useState } from "react";


const NewNote = () => {
    const { id } = useParams()

    const [bedMobility, setBedMobility] = useState('')
    const [transfers, setTransfers] = useState('')
    const [ambulation, setAmbulation] = useState('')
    const [assistiveDevice, setAssistiveDevice] = useState('')
    const [distance, setDistance] = useState('')

    const handleSubmitNote = (e) => {
        e.preventDefault()
    }

    console.log(id)
    return (
        <>
            <form onSubmit={handleSubmitNote}>
                {/*-------------- Fieldset for bed mobility ----------------*/}
                <fieldset>
                    <legend>Today's bed mobility</legend>

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
                    <legend>Todays transfers</legend>

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
                    <legend>Todays ambulation</legend>

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
                    

                    {/*------------- Selects for ambulation ----------------------- */}
                    <label htmlFor="assistive-device">Assistive Device</label>
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

                    <label htmlFor="distance">Distance</label>
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
            </form>
        </>
    );
}

export default NewNote;