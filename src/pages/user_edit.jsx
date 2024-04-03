import Navigation from "../component/navigation";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Thumb from "../assets/tumb.jpg"




export const EditProfile = () => {
    const authdata = useSelector((state) => state.auth.data);


    return(
        <>
    <Navigation />
  <div className="container justify-content-center d-flex mt-5 flex-column align-items-center">
    <img
      src={authdata ? authdata?.userData?.foto : Thumb}
      className="img-thumbnail mt-5"
      style={{
        height: 200,
        width: 200,
        borderRadius: 100,
        borderStyle: "none"
      }}
      alt="..."
    />
    <p className="mt-2" style={{ color: "blueviolet" }}>
      Change Profile picture
    </p>
  </div>
  <form className="container col-3">
    <div className="mb-3">
      <label htmlFor="name" className="form-label">
        Name
      </label>
      <input
        type="text"
        className="form-control"
        id="name"
        defaultValue={authdata ? authdata?.userData?.namalengkap : null}
      />
    </div>
    <div className="mb-3">
      <label htmlFor="email" className="form-label">
        Email
      </label>
      <input
        type="email"
        className="form-control"
        id="email"
        defaultValue={authdata ? authdata?.userData?.email : null}
      />
    </div>
    <button
      type="submit"
      className="btn btn-warning col-12 mt-5 btn-lg text-white"
    >
      Update Profile
    </button>
  </form>
  <p className="text-center mt-5">
    Change Password?
    <a
      href="change_password.html"
      style={{ textDecoration: "none" }}
      className="text-warning"
    >
      Click here
    </a>
  </p>
</>

    )
}