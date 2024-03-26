
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//import Navigationbar from './Navigationbar';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Medecin from './Pages/PagesMedecin/Medecin';

import Register from './Pages/PagesUsers/Register';
import Login from './Pages/PagesUsers/Login';
import HomeUsers from './Pages/PagesUsers/HomeUsers';
import EspaceUsers  from './Pages/PagesUsers/EspaceUsers';


import EspaceMedecin from './Pages/PagesMedecin/EspaceMedecin';


import Test1 from './Pages/PagesUsers/Test1';
import Portfolio from './Pages/PagesUsers/Profile';
import Footer from './Footer';
import Nav from './Nav'
import AlertProtection from './Pages/AlertProtection';

import HomeAdmin from './Pages/PagesAdmin/HomeAdmin';


import RendezVousMedecin from './Pages/PagesMedecin/RendezVousMedecin'
import PatientsMedecin from './Pages/PagesMedecin/PatientsMedecin';
import ProfileMedecin from './Pages/PagesMedecin/ProfileMedecin';



function App() {
  //const [user,setUser]=useState(null);
  //const login =()=>setUser({name:"aziz",role:"admin"});
  //const logout =()=>setUser(null);
  return (
    <BrowserRouter>
    {
      /*
        <h1>test p</h1>
      {
        (!user)?<button onClick={login}>se connectè</button>:<button onClick={logout}>se deconnecter</button>
      }
    <div className="App">

    
       <ProtectedRoute user={user}>
       <ProtectedRoute user={user && user.role === "admin"}>
      */ 
    }
    
    <Nav/>
   
      <Routes>
        <Route path='/' element={ <Home/>} />
        



        <Route path='/medecin' element={<Medecin/>} />
        <Route path='/medecin/espaceMedecin' element={ <EspaceMedecin/>} >
        <Route index element={<PatientsMedecin/>}/>
                    <Route path='patients' element= {<PatientsMedecin/>}/>
                     <Route path='Profile' element= {<ProfileMedecin/>}/>
                     <Route path='rendez-vous' element={<RendezVousMedecin/>}/>
          
        </Route> 

     

        <Route path='/users' element={<HomeUsers/>} >
          <Route index element={<Login/>}/>
          <Route path='login' element={<Login/>} />
          <Route path='register' element={<Register/>} />
           
        </Route>
        <Route path='/users/espace' element ={<EspaceUsers/>}>
        <Route index element={<Test1/>}/>
                     <Route path='test' element={<Test1/>} />
                     <Route path='portfolio' element={<Portfolio/>} />

           </Route>
        

        
        <Route path='/HomeAdmin' element={  <HomeAdmin/> } />
        
      
        <Route path='/not_connected' element={<AlertProtection/>} />
        <Route path='*' element={<h1>Page Not Found</h1>} />
        
      </Routes>



      
    <Footer/>
    
    </BrowserRouter>
  );
}

export default App;
