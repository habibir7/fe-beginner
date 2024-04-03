import Navigation from "../component/navigation";
import Footer from "../component/footer";
import axios from "axios";
import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import { getResepByID } from "../redux/action/resep";

const base_url = import.meta.env.VITE_BASE_URL


export default function DetailMenu(){
  const {id} = useParams()

  const dispatch = useDispatch()
	const resep = useSelector((state)=>state.resep)
	
	
	useEffect(()=>{
		dispatch(getResepByID(id))
	},[])

  const [data,setData] = useState(null)
	
	
	
   return( 
    <>
   <Navigation />
   <div
  className="container-fluid d-flex flex-column w-50"
  style={{ marginLeft: "auto", marginRight: "auto", marginBottom: 400 }}
>
  <div className="container-fluid d-flex flex-column align-items-center">
    <p style={{ fontSize: 50, color: "#2E266F" }}>{resep ? (resep.namaresep ? resep.namaresep : null) : null}</p>
    <img
      className="img-fluid mt-3"
      src="../public/sandwich.jpeg"
      style={{ width: 800, height: 650 }}
    />
  </div>
  <div className="container-fluid d-flex flex-column align-items-baseline mt-3">
    <p style={{ fontSize: 40 }}>Ingredients</p>
    <div className="borderless">
      <li>{data ? (resep.komposisi ? resep.komposisi : null) : null}</li>
    </div>
  </div>
  <div className="container-fluid">
    <div
      className="d-flex mt-3"
      style={{
        borderTopWidth: 5,
        borderTopColor: "goldenrod",
        borderTopStyle: "solid"
      }}
    />
    <div className="container-fluid d-flex" style={{ marginTop: 100 }}>
      <img
        src="../public/tumbnail.png"
        className="img-fluid mt-2"
        style={{
          height: 64,
          width: 64,
          borderRadius: 100,
          borderStyle: "none"
        }}
        alt="..."
      />
      <div
        className="d-flex flex-column p-2 align-items-center"
        style={{
          borderRightWidth: 5,
          borderRightColor: "goldenrod",
          borderRightStyle: "solid"
        }}
      >
        <h6 className="">Ayudia</h6>
        <p className="text-center fw-bolder">20 Recipes</p>
      </div>
      <div
        className="d-flex flex-column p-2 justify-content-center"
        style={{ marginLeft: 20 }}
      >
        <p>Wow, I just made this and it was delicious! Thanks for sharing!</p>
      </div>
    </div>
    <div className="container-fluid d-flex" style={{ marginTop: 100 }}>
      <img
        src="../public/tumbnail.png"
        className="img-fluid mt-2"
        style={{
          height: 64,
          width: 64,
          borderRadius: 100,
          borderStyle: "none"
        }}
        alt="..."
      />
      <div
        className="d-flex flex-column p-2 align-items-center"
        style={{
          borderRightWidth: 5,
          borderRightColor: "goldenrod",
          borderRightStyle: "solid"
        }}
      >
        <h6 className="">Ariel</h6>
        <p className="text-center fw-bolder">20 Recipes</p>
      </div>
      <div
        className="d-flex flex-column p-2 justify-content-center"
        style={{ marginLeft: 20 }}
      >
        <p>So simple and delicious!</p>
      </div>
    </div>
    <div
      className="d-flex"
      style={{
        borderBottomWidth: 5,
        borderBottomColor: "goldenrod",
        borderBottomStyle: "solid",
        marginTop: 100
      }}
    />
    <div className="form-group" style={{ marginTop: 80 }}>
      <label htmlFor="comment" />
      <input
        type="textarea"
        style={{ width: 400, height: 200 }}
        name=""
        id="comment"
        className="form-control"
        placeholder=""
        aria-describedby="helpId"
      />
      <button
        type="button"
        className="btn btn-primary"
        style={{
          backgroundColor: "#FFB167",
          marginTop: 20,
          width: 200,
          padding: "10px 25px 10px 25px"
        }}
      >
        Send A Comment
      </button>
    </div>
  </div>
</div>
<Footer />
</>
   )
}