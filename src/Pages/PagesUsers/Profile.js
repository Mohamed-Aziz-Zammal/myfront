import React, { useEffect, useState } from 'react';
import Axios from "axios";
import './Profile.css'

function Portfolio() {

  const [userData, setUserData] = useState(null);
  const [user, setUser] = useState(null);

  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [classe, setClasse] = useState("");
  const [email, setEmail] = useState("");

 //...
useEffect(() => {
  const fetchUserData = async () => {
    try {
      const userID = window.localStorage.getItem("userID");
      setUserData(userID);

      const response = await Axios.get(`http://localhost:3001/users/user/${userID}`);
      setUser(response.data);

      // Initialiser les valeurs des champs d'entrée avec les données de l'utilisateur
      setName(response.data.name);
      setClasse(response.data.classe);
      setEmail(response.data.email);

      // Formater la date au format ISO (AAAA-MM-JJ) pour le champ d'entrée de type date
      const formattedDate = new Date(response.data.date).toISOString().split('T')[0];
      setDate(formattedDate);
    } catch (error) {
      console.log(error);
    }
  };

  fetchUserData();
}, []);
//...


const onSubmit = async (e) => {
  e.preventDefault();
  try {
    const response = await Axios.put(`http://localhost:3001/users/user/${userData}`, {
      name, date, classe, email
    });
    console.log("response.message", response.data.message);
    console.log("response", response);

    // Mettre à jour les données de l'utilisateur dans l'état local
    setUser(prevUser => ({
      ...prevUser,
      name,
      date,
      classe,
      email
    }));
  } catch (error) {
    console.log(error);
  }
}


  return (
    <div>
    <h1>Profile</h1>
    {user && (
      <div className="form-container">
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label>Name :</label>
            <input type='text' className="form-control" value={name} onChange={e => setName(e.target.value)} />
          </div>
          <div className="form-group">
            <label>Date :</label>
            <input type='date' className="form-control" value={date} onChange={e => setDate(e.target.value)} />
          </div>
          <div className="form-group">
            <label>Classe :</label>
            <input type='text' className="form-control" value={classe} onChange={e => setClasse(e.target.value)} />
          </div>
          <div className="form-group">
            <label>Email :</label>
            <input type='text' className="form-control" value={email} onChange={e => setEmail(e.target.value)} />
          </div>
          <button type="submit" className="btn btn-primary">Modifier</button>
        </form>
      </div>
    )}
  </div>  
  );
}

export default Portfolio;

