import Footer from "../component/footer"
import Navigation from "../component/navigation"
import axios from "axios"
import { useState,useEffect } from "react"
import { Link } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { getResep } from "../redux/action/resep"
import Thumb from "../assets/tumbresep.png"


export default function Search(){
  const dispatch = useDispatch()
	const resep = useSelector((state)=>state.resep)
	
	
	useEffect(()=>{
		dispatch(getResep())
	},[])
    return(
        <>
<Navigation />
  <div className="container-fluid d-flex flex-row mb-3 m-0">
    <div className="container d-flex flex-column mb-3 m-0 w-50">
      <p
        className="p-2"
        style={{ color: "#2E266F", fontSize: 45, marginLeft: 30 }}
      >
        Discover Recipe &amp; Delicious Food
      </p>
      <div className="form-group p-2 mx-sm-3">
        <input
          type="text"
          style={{ marginLeft: 10 }}
          className="form-control"
          id="Search"
          placeholder="Search menu"
        />
      </div>
    </div>
    <div className="container d-flex align-items-end mb-4">
      <button
        type="submit"
        className="btn btn-warning "
        style={{ padding: "15px 70px 15px 70px", textAlign: "center" }}
        onClick={()=>dispatch(getResep())}
      >
        Search
      </button>
    </div>
  </div>
  <div className="container d-flex flex-row mb-3 m-0">
    <button
      type="button"
      className="btn btn-warning my-3 m-5"
      style={{ paddingLeft: 30, paddingRight: 30 }}
    >
      New
    </button>
    <button
      type="button"
      className="btn btn-warning my-3 m-4"
      style={{ paddingLeft: 40, paddingRight: 40 }}
    >
      Popular
    </button>
    <button
      type="button"
      className="btn btn-success my-3 m-4"
      style={{ paddingLeft: 40, paddingRight: 40 }}
    >
      Vegetarian
    </button>
    <button
      type="button"
      className="btn btn-success my-3 m-4"
      style={{ paddingLeft: 40, paddingRight: 40 }}
    >
      Breakfast
    </button>
  </div>

  {resep.isSuccess && resep.data ? resep.data.map((item,index)=>(
  <div className="row m-5" style={{ width: 750 }} key={index}>
    <div className="col-6 m-0">
      <img
        src={item.foto ? item.foto : Thumb}
        style={{ borderRadius: 10,width: "350px", height : "350px" }}
        className="img-fluid"
        alt={item.nama_resep}
      />
    </div>
    <div className="col-6">
      <Link
        to={`/detail_menu/${item.idresep}`}
        style={{
          textDecoration: "none",
          color: "black",
          fontSize: 25,
          fontWeight: "bold",
          paddingRight: 75
        }}
      >
        {item.nama_resep}
      </Link>
      <p className="mt-3" style={{ fontSize: 20 }}>
        Ingredient : {item.komposisi}
      </p>
      <p
        className="bg-warning"
        style={{ textAlign: "center", borderRadius: 5 }}
      >
        10 Likes - 12 Comment - 3 Bookmark
      </p>
      <div className="profile col-2 d-flex flow-row align-items-center">
        <img
          src={item.fotouser}
          className="img-thumbnail"
          style={{
            height: 60,
            width: 60,
            borderRadius: 100,
            borderStyle: "none"
          }}
          alt="..."
        />
        <div className="d-flex flex-column m-3">
          <p className="fw-bold">{item.author}</p>
        </div>
      </div>
    </div>
  </div>
  )) : null}

  <div className="container-fluid d-flex flex-row justify-content-center">
    <p
      style={{
        textAlign: "center",
        fontSize: 25,
        fontWeight: "bold",
        marginTop: 10,
        marginBottom: 35
      }}
    >
      Show 1-5 From 20
    </p>
    <div className="align-items-center">
      <button
        type="submit"
        className="btn btn-warning "
        style={{ marginTop: 10, marginLeft: 20, padding: "7px 50px 7px 50px" }}
      >
        Next
      </button>
    </div>
  </div>
  <footer>
    <Footer />
  </footer>
</>

    )
}