import Navigation from "../component/navigation";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Thumb from "../assets/tumb.jpg"
import React,{useState,useEffect} from "react";
import { putUser } from "../redux/action/user";
import { Link } from "react-router-dom";




export const EditProfile = () => {
    const authdata = useSelector((state) => state.auth.data);
    const dispatch = useDispatch()
    const update_user = useSelector((state)=>state.update_user)
    const navigate = useNavigate();
    const [foto, setFoto] = useState();
    const [inputData, setInputData] = useState({
        nama: "",
        foto: "",
    });

    const putData = (event) => {
		event.preventDefault()
		let bodyData = new FormData()
		bodyData.append("nama",inputData.nama)
		bodyData.append("foto",foto)
		dispatch(putUser(authdata.userData.idusers,bodyData,navigate))
	}

    const onChange = (e) => {
		setInputData({...inputData,[e.target.name]:e.target.value})
	}
	const onChangeFoto = (e) => {
		setFoto(e.target.files[0])
		e.target.files[0] && setInputData({...inputData, foto_url: URL.createObjectURL(e.target.files[0])})
		console.log(e.target.files)
	}

    const [data,setData] = useState(null)


    return(
        <>
    <Navigation />

  <div className="container justify-content-center d-flex mt-5 flex-column align-items-center">
    <img
      src={inputData?.foto_url ? inputData.foto_url : authdata.userData.foto}
      className="img-thumbnail mt-5"
      style={{
        height: 200,
        width: 200,
        borderRadius: 100,
        borderStyle: "none"
      }}
      alt="Profile Picture"
    />
  </div>
  <form className="container col-3" onSubmit={putData}>
    <div className="form-group">
      <label htmlFor="" />
      <span>
					<div className="form-group">
						<label htmlFor="foto"></label>
						<input type="file" className="form-control" id="foto" onChange={onChangeFoto} />
					</div>
      </span>
      <small id="helpId" className="text-muted" />
    </div>
    <div className="mb-3">
      <label className="form-label">
        Nama Lengkap
      </label>
      <input
        type="text"
        className="form-control"
        id="nama"
        name="nama"
        placeholder={authdata ? authdata?.userData?.nama : null}
        onChange={onChange}
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
    <Link
      to="/reset_password"
      style={{ textDecoration: "none" }}
      className="text-warning"
    >
      Click here
    </Link>
  </p>
  {update_user.isLoading ? 
			<div className="alert alert-primary">loading ...</div>
			: null}
			{update_user.isError ? 
			<div className="alert alert-danger">Post Menu Failed : {update_user.ErrorMessage ?? "-"}</div>
			: null}
</>

    )
}