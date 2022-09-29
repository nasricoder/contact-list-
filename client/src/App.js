import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Componnents/Home';
import NavContact from './Componnents/NavContact';
import ListContact from './Componnents/ListContact'
import AddContact from './Componnents/AddContact';


function App() {
  return (
    <>
    <NavContact />
    
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/Contacts' element={<ListContact />} />
      <Route path='/AddContact' element={<AddContact />} />
    </Routes> 
    </>
  );
}

export default App;
