
const NewPatient = () => {

    return (
        <div className="patient-form">
            <h2>Add a new patient</h2>
            <form>
                <label>
                    <span>First name:</span>
                    <input
                        required
                        type='text'
                    />
                </label>
                <label>
                    <span>Last name:</span>
                    <input
                        required
                        type='text'
                    />
                </label>
                <label>
                    <span>DOB:</span>
                    <input
                        required
                        type='date'
                    />
                </label>
                <label>
                    <span>Diagnosis:</span>
                    <input
                        required
                        type='text'
                    />
                </label>
                <button>Add patient</button>
            </form>
        </div>
    );
}

export default NewPatient;