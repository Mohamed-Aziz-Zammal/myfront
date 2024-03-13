
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//import Navigationbar from './Navigationbar';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Medecin from './Pages/PagesMedecin/Medecin';
//import Smedecin from './Pages/PagesMedecin/Smedecin';
//import Test from './Pages/Test';
import Register from './Pages/PagesUsers/Register';
import Login from './Pages/PagesUsers/Login';
import HomeUsers from './Pages/PagesUsers/HomeUsers';
import EspaceUsers  from './Pages/PagesUsers/EspaceUsers';
//import Test from './Pages/PagesMedecin/Test';

import EspaceMedecin from './Pages/PagesMedecin/EspaceMedecin';


import Test1 from './Pages/PagesUsers/Test1';
import Portfolio from './Pages/PagesUsers/Portfolio';
import Footer from './Footer';
import Nav from './Nav'
import AlertProtection from './Pages/AlertProtection';
//import ProtectedRoute from './Pages/ProtectedRoute';
//import { useState } from 'react';
import HomeAdmin from './Pages/PagesAdmin/HomeAdmin';
//import TestLogin from './Pages/PagesUsers/TestLogin';
//import TestLogin from './Pages/PagesUsers/TestLogin';
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
        <Route path='/' element={
       
        <Home/>
        
        } />
        
        <Route path='/medecin' element={<Medecin/>} >
          
          <Route path='espaceMedecin' element={ <EspaceMedecin/>

         
          } />
          </Route>

        
        
        <Route path='/not_connected' element={<AlertProtection/>} />
     

        <Route path='/users' element={<HomeUsers/>} >
          <Route index element={<Login/>}/>
          <Route path='login' element={<Login/>} />
          <Route path='register' element={<Register/>} />
              <Route path='espace' element ={<EspaceUsers/>}>
                     <Route path='test' element={<Test1/>} />
                     <Route path='portfolio' element={<Portfolio/>} />

               </Route>
        </Route>

        
        <Route path='/HomeAdmin' element={
        
        <HomeAdmin/>
        
        } />
        
        
        


        <Route path='*' element={<h1>Page Not Found</h1>} />
        
      </Routes>
      <Footer/>
    
    
    </BrowserRouter>
  );
}

export default App;
