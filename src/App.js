
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigationbar from './Navigationbar';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Medecin from './Pages/PagesMedecin/Medecin';
import Smedecin from './Pages/PagesMedecin/Smedecin';
//import Test from './Pages/Test';
import Register from './Pages/PagesUsers/Register';
import Login from './Pages/PagesUsers/Login';
import HomeUsers from './Pages/PagesUsers/HomeUsers';
import EspaceUsers  from './Pages/PagesUsers/EspaceUsers';
import Test from './Pages/Test';
import EspaceMedecin from './Pages/PagesMedecin/EspaceMedecin';
//import TestLogin from './Pages/PagesUsers/TestLogin';
//import TestLogin from './Pages/PagesUsers/TestLogin';
function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Navigationbar/>
   
      <Routes>
        <Route path='/' element={<Home/>} />
        
        <Route path='/medecin' element={<Medecin/>} >
          <Route path='smedecin' element={<Smedecin/>} />
          <Route path='espaceMedecin' element={<EspaceMedecin/>} />
          <Route path='test' element ={<Test/>}/>
         
        </Route>

        <Route path='/users' element={<HomeUsers/>} >
          <Route index element={<Login/>}/>
          <Route path='login' element={<Login/>} />
          <Route path='register' element={<Register/>} />
          <Route path='espace' element ={<EspaceUsers/>}/>
        </Route>
        
       
        
        


        <Route path='*' element={<h1>Page Not Found</h1>} />
        
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
