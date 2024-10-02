// eslint-disable-next-line no-unused-vars
import React, { useEffect, useRef, useState } from 'react';
import "../assets/Styles/userLogin.css";
import { useNavigate, useParams } from 'react-router-dom';

const UserLogin = () => {
    let params = useParams();
    let userId = params.id;
    
    let [user, setUser] = useState({});

    let fetchApi = async () => {
        try {
            let api = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
            if (!api.ok) {
                throw new Error('User not found');
            }
            let res = await api.json();
            setUser(res); 
            console.log(res); 
        } catch (error) {
            console.error('Error fetching user:', error);
        }
    };

    useEffect(() => {
        fetchApi();
    }, [userId]);

    let {id, username } = user; 
    console.log(username);

    let usernameField = useRef();
    let userPswdField = useRef();

    let navigate = useNavigate();

    let handleFormSubmit = (e) => {
        e.preventDefault();
        let password = (userPswdField.current.value === "jsonplaceholder.org"); 
        let uname = usernameField.current.value; 
       
        if (uname === username && password) {
           navigate(`/userportal/details/${id}`)
        } else {
            alert("Invalid credentials");
        }
    };

    

    return (
        <>
            <div className="landingpage">
                <h1>Hey {username}!!!</h1>
                <div className="login-container">
                    <div>
                    </div>
                    <div className="heading">User-Login Page</div>
                    <div className="user-form">
                        <form onSubmit={handleFormSubmit}>
                            <input
                                ref={usernameField}
                                type="text"
                                placeholder="username"
                            />
                            <input
                                ref={userPswdField}
                                type="password"
                                placeholder="password"
                            />
                            <button type="submit">User Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default UserLogin;
