import { db } from "../firebase/config";
import { collection, getDocs } from 'firebase/firestore'
import { useEffect, useState } from "react";


const Notes = ({ path }) => {
    const colRef = collection(db, path)
    const [notes, setNotes] = useState([])


    useEffect(() => {
        getDocs(colRef)
            .then(snapshot => {
                let notes = []
                snapshot.docs.forEach(doc => {
                    notes.push({ ...doc.data(), id: doc.id })
                })
                setNotes(notes)
            })
    }, [])
    console.log('notes', notes)

    return (
        <div>
            <header className="notes-header">Treatment Encounters</header>
            
                {notes.map(note =>
                    <section className="patient-details-box" key={note.id}>
                        <h3 className="notes-date">June 6, 2020</h3>
                        <h3 className="notes-title">Bed mobility</h3>
                        <p><strong>LOA: </strong>{note.noteBedMobility}</p>
                        <p><strong>Response: </strong>{note.bedMobilityTextArea}</p>
                        <h3 className="notes-title">Transfers</h3>
                        <p><strong>LOA: </strong>{note.noteTransfers}</p>
                        <p><strong>Response: </strong>{note.transfersTextArea}</p>
                        <h3 className="notes-title">Ambulation</h3>
                        <p><strong>LOA: </strong>{note.noteAmbulation}</p>
                        <p><strong>Response: </strong>{note.ambulationTextArea}</p>
                        <p><strong>AD: </strong>{note.noteAssistiveDevice}</p>
                        <p><strong>Distance: </strong>{note.noteDistance} feet</p>
                        <h3 className="notes-title">Response</h3>
                        <p><strong>Response: </strong>{note.noteResponse}</p>
                        <h3 className="notes-title">Plan</h3>
                        <p><strong>Plan: </strong>{note.notePlan}</p>
                    </section>
                )}
           
        </div>
    )


}

export default Notes;