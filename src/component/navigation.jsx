import Thumb from "../assets/tumb.jpg"
import React, { useState, useEffect } from 'react';
import { Link,useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { authLogout } from "../redux/action/auth";




export default function Navigation(){
  const navigate = useNavigate();
    const dispatch = useDispatch()
    const authdata = useSelector((state) => state.auth.data);

    const logout = () => {
        dispatch(authLogout())
        navigate("/login");
    };




    return(
      <>
        <nav className="navbar navbar-expand-lg">
  <div className="container-fluid">
    <ul className="nav navbar-nav">
        {authdata ?
        <>
        <li>
        <a
          className="navbar text-decoration-none"
          href="/create_menu"
          style={{ marginRight: 80 }}
        >
          Add Menu
        </a>
      </li>
      <li>
      <a
        className="navbar text-decoration-none"
        href="/edit_profile"
        style={{ marginRight: 80 }}
      >
        Edit Profile
      </a>
    </li>
    <li>
      <a
        className="navbar text-decoration-none"
        href="/user_resep"
        style={{ marginRight: 80 }}
      >
        Resepku
      </a>
    </li>
    </>
        :
      <>
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
      </>
        } 
      <li>
        <a
          className="navbar text-decoration-none"
          href="/search"
          style={{ marginRight: 80 }}
        >
          Search Menu
        </a>
      </li>
        
      
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
  <img
    src={authdata?.userData?.foto ?? Thumb}
    className="img-thumbnail"
    style={{ height: 64, width: 64, borderRadius: 100, borderStyle: "none" }}
    alt="..."
    />
  <div className="d-flex flex-column p-2">
  {authdata ? (
    <div>
    <a
      href="/edit_profile"
      style={{ textDecoration: "none", color: "black" }}
    >
      <h6>{authdata?.userData?.surname ?? " - "}</h6>
    </a>
    </div>
    ) : 
    <div>
      <p>Hello, Guest</p>
    </div>
    }
     {authdata ? (
                        <Link to=""
                        style={{ textDecoration: "none", color: "black" }}
                        >
                        <p
                            onClick={() => logout()}
                        >
                            Logout
                        </p>
                        </Link>
                    ) : (
                        <Link to="/login"
                        style={{ textDecoration: "none", color: "black" }}
                        >
                            <h6>Login</h6>
                        </Link>
                    )}
  </div>
  
</div>

</nav>
</>
    )
}