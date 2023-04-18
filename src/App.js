import { HashRouter, Routes, Route } from 'react-router-dom'
//Layouts
import HeaderLayout from './layouts/HeaderLayout';

//components
import Footer from './components/Footer';

//pages
import Home from './pages/Home';
import NewNote from './pages/NewNote';
import NewPatientForm from './pages/NewPatientForm';
import PatientDetails from './pages/PatientDetails';
import NotFound from './pages/NotFound';


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
          <Route path='*' element={<NotFound />} />
        </Routes>
      </HashRouter>
      <Footer />
    </div>
  );
}

export default App;
