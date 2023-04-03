import { HashRouter, Routes, Route } from 'react-router-dom'
import HeaderLayout from './layouts/HeaderLayout';
import Home from './pages/Home';
import NewPatientForm from './pages/NewPatientForm';


function App() {
  return (
    <div className="app">
      <HashRouter>
        <Routes>
          <Route path='/' element={<HeaderLayout />}>
            <Route index element={<Home />} />
            <Route path='/newpatient' element={<NewPatientForm />}/>
          </Route>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
