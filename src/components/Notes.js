import { db } from "../firebase/config";
import { collection, getDocs, doc, deleteDoc, orderBy, query } from 'firebase/firestore'
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const Notes = ({ path }) => {

    //Reference to location of notes data being fetched
    const colRef = collection(db, path)
    const [notes, setNotes] = useState([])

    // navigate hook
    const navigate = useNavigate()
    // modal state, only appears when set to true
    const [deleteNoteModal, setDeleteNoteModal] = useState(false)
    
    const [selectedNote, setSelectedNote] = useState('')

    const q = query(colRef, orderBy('date', 'desc'))
    
    //Fetches notes data and pushes them into an empty array
    useEffect(() => {
        getDocs(q)
            .then(snapshot => {
                let notes = []
                snapshot.docs.forEach(doc => {
                    notes.push({ ...doc.data(), id: doc.id })
                })
                //Sets notes as notes data that was pushed into the array
                setNotes(notes)
            })
    }, [])

    // Toggles delete note modal onClick and sets state of note ID
    const toggleModal = (id) => {
        setDeleteNoteModal(!deleteNoteModal)
        //sets state to id of note selected
        setSelectedNote(id)
    }

    // Deletes note from db when user confirms yes to delete note modal
    const deleteNote = async (id) => {
        //col ref to which note is selected
        const ref = doc(db, path, id)
        //deletes note
        await deleteDoc(ref)
        setDeleteNoteModal(false)
        //refreshes page
        navigate(0)
    }

    return (
        <div className="notes-container">
            {/* If there are no notes, render no notes text else render notes */}
            {notes.length === 0 ? (
                <h4 className="empty-notes">There are no notes...</h4>

            ) : <header className="notes-header">Treatment Encounters</header>}

            {/* Maps over notes and renders them */}
            {notes.map(note =>
                <section className="patient-details-box" key={note.id}>

                    {/* Header */}
                    <header>
                        <h3 className="notes-date">{note.date}</h3>
                        <button className="delete-note-btn" onClick={() => toggleModal(note.id)}>Delete note</button>
                    </header>

                    {/* Note info/date from billing section */}
                    <p><strong>Ther-Ex: <span className="black-text">{note.therExMins} mins</span> </strong>{note.therExText}</p>
                    <p><strong>Gait Trng: <span className="black-text">{note.gaitMins} mins</span> </strong>{note.gaitText}</p>
                    <p><strong>Ther-Act: <span className="black-text">{note.therActMins} mins</span> </strong>{note.therActText}</p>
                    <p><strong>Total billable time: </strong><span className="black-text">{note.totalTime} mins</span></p>

                    {/* Levels of assistance from new note section */}
                    <h3 className="notes-title">Bed mobility:</h3>
                    <p><strong>LOA: </strong>{note.noteBedMobility}</p>
                    <h3 className="notes-title">Transfers:</h3>
                    <p><strong>LOA: </strong>{note.noteTransfers}</p>
                    <h3 className="notes-title">Ambulation:</h3>
                    <p><strong>LOA: </strong>{note.noteAmbulation}</p>
                    <p><strong>AD: </strong>{note.noteAssistiveDevice}</p>
                    <p><strong>Distance: </strong>{note.noteDistance}</p>

                    {/* Assessment and plan info from new note section */}
                    <h3 className="notes-title">Response:</h3>
                    <p>{note.noteResponse}</p>
                    <h3 className="notes-title">Plan:</h3>
                    <p>{note.notePlan}</p>
                </section>
            )}

            {/* Pop up modal when user clicks delete note */}
            {deleteNoteModal && <div className="modal">
                <div className="overlay"></div>
                <div className="modal-content">
                    <p>{`Are you sure you want to delete this note?`}</p>
                    <div className="modal-btns-container">

                        {/*Clicking no closes modal */}
                        <button className="modal-btn" onClick={() => toggleModal(!deleteNoteModal)}>No</button>
                        {/*Clicking yes calls function to delete note */}
                        <button className="modal-btn" onClick={() => deleteNote(selectedNote)}>Yes</button>
                    </div>
                </div>
            </div>}
        </div>
    )


}

export default Notes;