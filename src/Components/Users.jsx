// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import "../assets/Styles/users.css";

import { useNavigate } from "react-router-dom";

const Users = () => {
  let [data, setData] = useState([]);
  let navigate = useNavigate()
  let fetchApi = async () => {
    let api = await fetch(`https://jsonplaceholder.org/users`);
    let res = await api.json();
    // console.log(res);
    setData(res);
  };

  useEffect(() => {
    fetchApi();
  }, [data]);

let userLogin = (id)=>{
  navigate(`/userportal/users/${id}`);
}

  return (
    <>
      <div className="user  ">
        <div className="card">
          {data.map((elem) => {
            let {id, firstname, lastname } = elem;
            return (
              <>
                <div className="cards">
                  <button
                  onClick={()=>userLogin(id)}
                  className="btn">
                    <strong>First Name</strong> : {firstname} <br />{" "}
                    <strong>Last Name:</strong> {lastname}
                  </button>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Users;
