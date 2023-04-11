import { db } from "../firebase/config";
import { collection, getDocs } from 'firebase/firestore'
import { useEffect, useState } from "react";


const Notes = ({ path }) => {

    //Reference to location of notes data being fetched
    const colRef = collection(db, path)
    const [notes, setNotes] = useState([])

    useEffect(() => {
        //Fetches notes data and pushes them into an empty array
        getDocs(colRef)
            .then(snapshot => {
                let notes = []
                snapshot.docs.forEach(doc => {
                    notes.push({ ...doc.data(), id: doc.id })
                })
                //Sets notes as notes data that was pushed into the array
                setNotes(notes)
            })
    }, [])

    return (
        <div>
            {/* If there are no notes, render no notes text else render notes */}
            {notes.length === 0 ? (
                <h4 className="empty-notes">There are no notes...</h4>

            ) : <header className="notes-header">Treatment Encounters</header>}

            {/* Maps over notes and renders them */}
            {notes.map(note =>
                <section className="patient-details-box" key={note.id}>
                    <h3 className="notes-date">{note.date}</h3>
                    <h3 className="notes-title">Bed mobility:</h3>
                    <p><strong>LOA: </strong>{note.noteBedMobility}</p>
                    <p><strong>Treatment: </strong>{note.bedMobilityTextArea}</p>
                    <h3 className="notes-title">Transfers:</h3>
                    <p><strong>LOA: </strong>{note.noteTransfers}</p>
                    <p><strong>Treatment: </strong>{note.transfersTextArea}</p>
                    <h3 className="notes-title">Ambulation:</h3>
                    <p><strong>LOA: </strong>{note.noteAmbulation}</p>
                    <p><strong>Treatment: </strong>{note.ambulationTextArea}</p>
                    <p><strong>AD: </strong>{note.noteAssistiveDevice}</p>
                    <p><strong>Distance: </strong>{note.noteDistance} feet</p>
                    <h3 className="notes-title">Response:</h3>
                    <p>{note.noteResponse}</p>
                    <h3 className="notes-title">Plan:</h3>
                    <p>{note.notePlan}</p>
                </section>
            )}



        </div>
    )


}

export default Notes;