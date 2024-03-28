import Thumb from "../assets/tumbnail.png"
import React, { useState, useEffect } from 'react';
import axios from 'axios';
const base_url = import.meta.env.VITE_BASE_URL;
import { Link } from "react-router-dom";




export default function Navigation(){
  const [token,setToken] = useState(null)
  const [userData, setUserData] = useState(null);

  useEffect(()=>{
    let getToken = localStorage.getItem("token")
    setToken(getToken)
  },[localStorage])

  const login = () => {
      axios
          .post(
              base_url + "/auth",
              {
                  username: "habibi776",
                  password: "habibi",
              },
              {
                  headers: {
                      "Content-Type": "application/x-www-form-urlencoded",
                  },
              }
          )
          .then((res) => {
              console.log("success login");
              console.log(res.data.token);
              localStorage.setItem("token",res.data.token)
              setToken(res.data.token)
              setUserData(res.data);
          })
          .catch((err) => {
              console.log("failed login");
              console.log(err);
          });
  };

  const logout = () => {
    localStorage.clear()
    setToken(null)
  }




    return(
      <>
        <nav className="navbar navbar-expand-lg">
  <div className="container-fluid">
    <ul className="nav navbar-nav">
      <li>
        <a
          className="navbar text-decoration-none"
          href="/register"
          style={{ marginRight: 80 }}
        >
          Register
        </a>
      </li>
      <li>
        <a
          className="navbar text-decoration-none"
          href="/login"
          style={{ marginRight: 80 }}
        >
          Login
        </a>
      </li>
      <li>
        <a
          className="navbar text-decoration-none"
          href="/search"
          style={{ marginRight: 80 }}
        >
          Search Menu
        </a>
      </li>
      {token ?
      <li>
      <a
        className="navbar text-decoration-none"
        href="/create_menu"
        style={{ marginRight: 80 }}
      >
        Add Menu
      </a>
    </li>
      : null} 
        
      
    </ul>
  </div>
  <div
  className="profile col-2 d-flex flow-row align-items-center"
  style={{
    borderLeftWidth: 5,
    borderLeftColor: "goldenrod",
    borderLeftStyle: "solid"
  }}
>
  <Link to="/user_resep/s20e12955-cc62-410c-bbcb-70a05d4e8fff">
  <img
    src={Thumb}
    className="img-thumbnail"
    style={{ height: 64, width: 64, borderRadius: 100, borderStyle: "none" }}
    alt="..."
    />
   </Link>
  <div className="d-flex flex-column p-2">
  {userData ? (
    <div>
    <a
      href="edit_profile.html"
      style={{ textDecoration: "none", color: "black" }}
    >
      <h6>{userData.surname}</h6>
    </a>
    </div>
    ) : null}
    <button className="btn btn-primary" onClick={token ? logout : login}>
                        {token ? "logout" : "login"}
                    </button>
  </div>
  
</div>

</nav>
</>
    )
}