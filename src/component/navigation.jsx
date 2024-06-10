import Thumb from "../assets/tumb.jpg"
import React, { useState, useEffect } from 'react';
import { Link,useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { authLogout } from "../redux/action/auth";




export default function Navigation(){
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const authdata = useSelector((state) => state.auth.data);

    // const toLogin = ()  =>{
    //     navigate("/login");
    // }

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
        <Link
          className="navbar text-decoration-none"
          to="/create_menu"
          style={{ marginRight: 80 }}
        >
          Add Menu
        </Link>
      </li>
      <li>
      <Link
        className="navbar text-decoration-none"
        to="/edit_profile"
        style={{ marginRight: 80 }}
      >
        Edit Profile
      </Link>
    </li>
    <li>
      <Link
        className="navbar text-decoration-none"
        to="/user_resep"
        style={{ marginRight: 80 }}
      >
        Resepku
      </Link>
    </li>
    </>
        :
      <>
      <li>
        <Link
          className="navbar text-decoration-none"
          to="/register"
          style={{ marginRight: 80 }}
        >
          Register
        </Link>
      </li>
      <li>
        <Link
          className="navbar text-decoration-none"
          to="/login"
          // onClick={()=> toLogin()}
          style={{ marginRight: 80 }}
        >
          Login
        </Link>
      </li>
      </>
        } 
      <li>
        <Link
          className="navbar text-decoration-none"
          to="/search"
          style={{ marginRight: 80 }}
        >
          Search Menu
        </Link>
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
    <Link
      to="/edit_profile"
      style={{ textDecoration: "none", color: "black" }}
    >
      <h6>{authdata?.userData?.nama ?? " - "}</h6>
    </Link>
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