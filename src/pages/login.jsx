import React, {useState} from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { authLogin } from "../redux/action/auth"
import { Link } from "react-router-dom"








export default function Login(){
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const authdata = useSelector((state) => state.auth)

  const [inputData, setInputData] = useState({
      email : "",
      password : "",
  })

  const onChange = (e) => {
    setInputData({...inputData, [e.target.name] : e.target.value})
  }

  const postData = (event) => {
    event.preventDefault()
    let data = inputData
		dispatch(authLogin(data,navigate))
  }
    return(
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
      <div className="form-outline mb-3">
        <label className="form-label">
          Email
        </label>
        <input
          type="text"
          id="email"
          name="email"
          className="form-control"
          placeholder="Enter Your Email"
          onChange={onChange}
          required
        />
      </div>
      {/* Password input */}
      <div className="form-outline mb-4">
        <label className="form-label" htmlFor="password">
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          className="form-control"
          placeholder="Password"
          onChange={onChange}
          required
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
              id="form2Example31"
              defaultChecked=""
              required
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
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Login
          </button>
        </div>
      Forget your password ?{" "}
      <Link
        to="forgot_password.html"
        style={{ textDecoration: "none", color: "#EFC81A" }}
      >
        Click here
      </Link>
      {/* Register buttons */}
      <div className="text-center" style={{ marginTop: 50 }}>
        <p>
          Don`t have an account ?
          <Link
            to="/register"
            style={{ textDecoration: "none", color: "#EFC81A" }}
          >
            {" "}
            Sign up
          </Link>
        </p>
      </div>
    </form>
    {authdata.isLoading ? 
			<div className="alert alert-primary">loading ...</div>
			: null}
			{authdata.isError ? 
			<div className="alert alert-danger">Login Failed : {authdata.ErrorMessage ?? "-"}</div>
			: null}
  </div>
</div>

    )
}