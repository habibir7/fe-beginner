









export default function Register(){
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
      <form>
        {/* Email input */}
        <div className="form-outline mb-3">
          <label className="form-label" htmlFor="form2Example1">
            Name
          </label>
          <input
            type="text"
            id="form2Example1"
            className="form-control"
            placeholder="Name"
            required=""
          />
        </div>
        <div className="form-outline mb-3">
          <label className="form-label" htmlFor="form2Example1">
            Email address
          </label>
          <input
            type="email"
            id="form2Example1"
            className="form-control"
            placeholder="Enter Email Address"
            required=""
          />
        </div>
        {/* Password input */}
        <div className="form-outline mb-4">
          <label className="form-label" htmlFor="form2Example2">
            Password
          </label>
          <input
            type="password"
            id="form2Example2"
            className="form-control"
            placeholder="Password"
            required=""
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
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Register Account
          </button>
        </div>
        {/* Register buttons */}
        <div className="text-center" style={{ marginTop: 50 }}>
          <p>
            Already have account ?
            <a
              href="login.html"
              style={{ textDecoration: "none", color: "#EFC81A" }}
            >
              {" "}
              Log in here
            </a>
          </p>
        </div>
      </form>
    </div>
  </div>
  {/* Button trigger modal */}
  {/* Modal */}
  <div
    className="modal fade"
    id="exampleModal"
    tabIndex={-1}
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-body" style={{ padding: "60px 60px 60px 60px" }}>
          <p
            className="modal-title fs-2 text-lg-center"
            style={{ color: "#EFC81A", fontWeight: "bold" }}
            id="exampleModalLabel"
          >
            You`re all set!
          </p>
          <p
            style={{
              marginTop: 50,
              fontWeight: "bold",
              fontSize: 13,
              textAlign: "center"
            }}
          >
            please check your account email for verification
          </p>
        </div>
        <button
          type="button"
          className="btn btn-primary"
          style={{
            width: "75%",
            marginLeft: "auto",
            marginRight: "auto",
            marginBottom: 30,
            backgroundColor: "#EFC81A"
          }}
          data-bs-dismiss="modal"
        >
          Ok
        </button>
      </div>
    </div>
  </div>
</>

    )
}