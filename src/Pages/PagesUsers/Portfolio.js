import React, { useEffect, useState } from 'react';
import Axios  from "axios"
function Portfolio() {

  const [userData, setUserData] = useState(null);
  const [user, setuser] = useState([]);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userID = window.localStorage.getItem("userID");
        setUserData(userID); 

        
        const response = await Axios.get(`http://localhost:3001/users/user/${userID}`);
        
        console.log("response.message", response.data.message);
        console.log("response.", response);
        setuser(response.data)
      } catch (error) {
        console.log(error);
      }
    };

    
    fetchUserData();
  }, []);
 
  
    
    

  return (
    <div>
  <h1>Portfolio</h1>
  {userData && <p>{userData}</p>}
  {user && (
    <div>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>data: {user.date}</p>
      <p>classe: {user.classe}</p>
      
      
    </div>
  )}
</div>

  );
}

export default Portfolio;
