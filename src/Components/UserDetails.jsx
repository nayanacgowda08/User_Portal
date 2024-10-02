import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../assets/Styles/userDetails.css";

const UserDetails = () => {
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

  useEffect(() => {
    fetchApi();
  }, [userId]);

  let { id, firstname, lastname, email, phone} = userData;
  // let { city, street, suite, zipcode } = address;

  let navigate = useNavigate();
  let handleUserProfile = () => {
    navigate(`/userportal/profile/${id}`); 
  }

  return (
    <>
      <div className="user-table">
        <h1>{firstname}'s Details</h1>
        <div className="head">
          <table>
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>View</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{firstname}</td>
                <td>{lastname}</td>
                <td>{email}</td>
                <td>{phone}</td>
                <td>
                  <button onClick={handleUserProfile}>View</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default UserDetails;
