import React,{useState, useEffect} from "react";
import { useSelector,useDispatch } from "react-redux";
import { postUsers } from "../redux/action/auth";
import { useNavigate } from "react-router-dom";




export default function Register(){
  const dispatch = useDispatch()
    const register = useSelector((state)=>state.register)
    const navigate = useNavigate();

    const [inputData, setInputData] = useState({
        username: "",
        password: "",
        namalengkap: "",
        surname: "",
        email: "",
        alamat: "",
    });

    const postData = (event) => {
		event.preventDefault()
		let bodyData = new FormData()
		bodyData.append("username",inputData.username)
		bodyData.append("password",inputData.password)
		bodyData.append("namalengkap",inputData.namalengkap)
    bodyData.append("surname",inputData.surname)
    bodyData.append("email",inputData.email)
    bodyData.append("alamat",inputData.alamat)

		dispatch(postUsers(bodyData,navigate))
	}

    const onChange = (e) => {
		setInputData({...inputData,[e.target.name] : e.target.value})
	}
    return(
        <>
  <div className="container justify-content-center d-flex mt-5 flex-column align-items-center">
    <div className="header  mb-2 ">
      <p
        style={{
          float: "none",
          marginTop: 40,
          color: "#EFC81A",
          fontSize: 30,
          fontWeight: "bold"
        }}
      >
        Resepku
      </p>
    </div>
    <div className="header  mb-2">
      <p
        style={{
          float: "none",
          marginTop: 40,
          color: "#EFC81A",
          fontSize: 30,
          fontWeight: "bold"
        }}
      >
        Let`s Get Started !
      </p>
    </div>
    <div className="header  mb-2">
      <p
        style={{
          float: "none",
          marginTop: 20,
          marginBottom: 50,
          fontFamily: '"Poppins", sans-serif',
          fontSize: 20,
          opacity: "50%"
        }}
      >
        Create new account to access all features
      </p>
    </div>
    <div style={{ width: 400 }}>
      <form onSubmit={postData}>
        {/* Email input */}
        <div className="form-outline mb-3">
          <label className="form-label" htmlFor="username">
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            className="form-control"
            placeholder="Username"
            required
            onChange={onChange}
          />
        </div>
        <div className="form-outline mb-3">
          <label className="form-label" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="form-control"
            placeholder="Password"
            required
            onChange={onChange}
          />
        </div>
        <div className="form-outline mb-3">
          <label className="form-label" htmlFor="form2Example1">
            Email address
          </label>
          <input
            type="text"
            id="email"
            name="email"
            className="form-control"
            placeholder="Enter Email Address"
            required
            onChange={onChange}
          />
        </div>
        {/* Password input */}
        <div className="form-outline mb-4">
          <label className="form-label" htmlFor="namalengkap">
            Nama Lengkap
          </label>
          <input
            type="text"
            id="namalengkap"
            name="namalengkap"
            className="form-control"
            placeholder="Nama Lengkap"
            required
            onChange={onChange}
          />
        </div>
        <div className="form-outline mb-4">
          <label className="form-label" htmlFor="surname">
            Surname
          </label>
          <input
            type="text"
            id="surname"
            name="surname"
            className="form-control"
            placeholder="Surname"
            required
            onChange={onChange}
          />
        </div>
        <div className="form-outline mb-4">
          <label className="form-label" htmlFor="alamat">
            Alamat
          </label>
          <input
            type="text"
            id="alamat"
            name="alamat"
            className="form-control"
            placeholder="Alamat"
            required
            onChange={onChange}
          />
        </div>
        {/* 2 column grid layout for inline styling */}
        <div className="row mb-3">
          <div className="col d-flex">
            {/* Checkbox */}
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                style={{ backgroundColor: "#EFC81A" }}
                defaultValue=""
                defaultChecked=""
                required=""
              />
              <label className="form-check-label" htmlFor="form2Example31">
                {" "}
                I Agree to terms and conditions{" "}
              </label>
            </div>
          </div>
        </div>
        <div className="d-grid gap-2 mx-auto">
          <button
            type="submit"
            className="btn btn-primary"
            style={{ backgroundColor: "#EFC81A" }}
          >
            Register Account
          </button>
        </div>
        {/* Register buttons */}
        <div className="text-center" style={{ marginTop: 50 }}>
          <p>
            Already have account ?
            <Link
              to="/login"
              style={{ textDecoration: "none", color: "#EFC81A" }}
            >
              {" "}
              Log in here
            </Link>
          </p>
        </div>
      </form>
    </div>
  </div>
  {register.isLoading ? 
			<div className="alert alert-primary">loading ...</div>
			: null}
			{register.isError ? 
			<div className="alert alert-danger">Register Account Failed : {register.ErrorMessage ?? "-"}</div>
			: null}
</>

    )
}