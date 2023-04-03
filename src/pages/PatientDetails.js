import { useParams } from "react-router-dom";

const PatientDetails = () => {
    const {id} = useParams()

    return ( 
        <h2>{id}</h2>
     );
}
 
export default PatientDetails;