// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import "../assets/Styles/userProfile.css"

const UserProfile = () => {
    let params = useParams();
  let userId = params.id;
  let [userData, setUserData] = useState({});

  let fetchApi = async () => {
    try {
      let api = await fetch(`https://jsonplaceholder.org/users/${userId}`); 
      if (!api.ok) {
        throw new Error("User not found");
      }
      let res = await api.json();
      setUserData(res);
      console.log(res);
    } catch (error) {
      console.error("Error fetching user:", error);
    }
  };
  let navigate = useNavigate()

  useEffect(() => {
    fetchApi();
  }, [userId]);

  let { id, firstname, lastname, email, birthDate, phone, address = {}, company={},website} = userData;
  let { city, street, suite, zipcode } = address;
  let {bs,catchPhrase,name}= company;
  // let dateObj = new Date();
  // let age = dateObj.getFullYear() - Number(birthDate.slice(0,4));


  return (
    <>
    <div className="user-profile">
       <div className="header">
       <h2>{firstname} {lastname}</h2>
       </div>
        <div className='others'>
        <p><strong>Email:</strong> {email}</p>
        {/* <p><strong>Age: </strong>{age}</p> */}
        <p><strong>Phone:</strong> {phone}</p>
        <p><strong>Company:</strong> {bs} -- {catchPhrase} -- {name}</p>
        <p><strong>Address:</strong> {street}, {city}, {suite}, {zipcode}</p>
        <p><strong>Website:</strong> {website}</p>
        </div>
       
        <button onClick={() => navigate(`/userportal/users`)}>Edit User</button>
    </div>
    
    
    </>
  )
}

export default UserProfile