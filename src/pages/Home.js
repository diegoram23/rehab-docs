import useCollection from "../hooks/useCollection";

//components
import PatientList from "../components/PatientList";

const Home = () => {

    //Custom hook to fetch all patients available
    const { documents: patients } = useCollection('patients')

    return (
        <div>
            {/*Patient list will display only if patients are available in db */}
            {patients && <PatientList patients={patients} />}
        </div>
    );
}

export default Home;
