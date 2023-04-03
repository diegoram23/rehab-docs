import useCollection from "../hooks/useCollection";

//components
import PatientList from "../components/PatientList";

const Home = () => {
    //sets patients equal to the data received from useCollection hook
    const { documents: patients } = useCollection('patients')

    return (
        <div>
            {patients && <PatientList patients={patients} />}
        </div>
    );
}

export default Home;