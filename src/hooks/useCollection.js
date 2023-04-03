import { useEffect, useState } from "react";
import { db } from "../firebase/config";
import { orderBy, query } from "firebase/firestore";

//firebase imports
import { collection, onSnapshot } from 'firebase/firestore'

const useCollection = (c) => {
    const [documents, setDocuments] = useState([])

    useEffect(() => {
        let ref = collection(db, c)
        //sorts documents in alphabetical ascending order by last name
        const q = query(ref, orderBy('last', 'asc'))

        const unsub = onSnapshot(q,ref, (snapshot) => {
            let results = []
            snapshot.docs.forEach(doc => {
                results.push({ id: doc.id, ...doc.data() })
            })
            setDocuments(results)
        })
        return () => unsub()
    }, [c])
    return { documents }
}

export default useCollection;