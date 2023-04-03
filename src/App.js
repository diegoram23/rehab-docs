import { HashRouter, Routes, Route } from 'react-router-dom'
import HeaderLayout from './layouts/HeaderLayout';
import Home from './pages/Home';
import NewPatient from './pages/NewPatient';


function App() {
  return (
    <div className="app">
      <HashRouter>
        <Routes>
          <Route path='/' element={<HeaderLayout />}>
            <Route index element={<Home />} />
            <Route path='/newpatient' element={<NewPatient />}/>
          </Route>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
