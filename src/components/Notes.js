import { db } from "../firebase/config";
import { collection, getDocs } from 'firebase/firestore'
import { useParams } from "react-router";


const Notes = ({path}) => {
    const { id } = useParams()
    const colRef = collection(db, path)

    getDocs(colRef)
    .then(snapshot => {
        let notes = []
        snapshot.docs.forEach(doc => {
            notes.push({...doc.data(), id:doc.id})
        })
        console.log(notes)
    })
    

}

export default Notes;