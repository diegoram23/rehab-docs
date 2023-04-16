import { HashRouter, Routes, Route } from 'react-router-dom'
import HeaderLayout from './layouts/HeaderLayout';
import Home from './pages/Home';
import NewNote from './pages/NewNote';
import NewPatientForm from './pages/NewPatientForm';
import PatientDetails from './pages/PatientDetails';

function App() {
  return (
    <div className="app">
      <HashRouter>
        <Routes>
          <Route path='/' element={<HeaderLayout />}>
            <Route index element={<Home />} />
            <Route path='newPatient' element={<NewPatientForm />} />
            <Route path='patient/:id' element={<PatientDetails />} />
            <Route path='/newNote/:id' element={<NewNote />} />
          </Route>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
