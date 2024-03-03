
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
import Test from './Pages/PagesMedecin/Test';
import EspaceMedecin from './Pages/PagesMedecin/EspaceMedecin';
import Question6 from './Pages/Question6';
import Question7 from './Pages/Question7';
import Question8 from './Pages/Question8';
import Question1 from './Pages/Question1';
import Question2 from './Pages/Question2';
import Question3 from './Pages/Question3';
import Question4 from './Pages/Question4';
import Question5 from './Pages/Question5';
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

        
        <Route path='/Question1' element={<Question1/>} />
        <Route path='/Question2' element={<Question2/>} />
        <Route path='/Question3' element={<Question3/>} />
        <Route path='/Question4' element={<Question4/>} />
        <Route path='/Question5' element={<Question5/>} />
        <Route path='/Question6' element={<Question6/>} />
        <Route path='/Question7' element={<Question7/>} />
        <Route path='/Question8' element={<Question8/>} />
        
        


        <Route path='*' element={<h1>Page Not Found</h1>} />
        
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
