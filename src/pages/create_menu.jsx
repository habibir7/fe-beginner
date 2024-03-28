import Navigation from "../component/navigation"
import Footer from "../component/footer"
import React, { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const base_url = import.meta.env.VITE_BASE_URL



export default function CreateMenu(){
    const [token,setToken] = useState(null)
    useEffect(()=>{
        let getToken = localStorage.getItem("token")
        setToken(getToken)
      },[localStorage])

    const [selectedKategori, setSelectedKategori] = useState('');
    const navigate = useNavigate();
    const [foto, setFoto] = useState();
    const [inputData, setInputData] = useState({
        namaresep: "",
        komposisi: "",
        idkategori: "",
        foto: "",
    });

    const postData = (event) => {
		event.preventDefault()
		let bodyData = new FormData()
		bodyData.append("namaresep",inputData.namaresep)
		bodyData.append("komposisi",inputData.komposisi)
		bodyData.append("idkategori",inputData.idkategori)
		bodyData.append("foto",foto)

		axios.post(base_url+"/resep",bodyData,{
			headers: {
				"Authorization" : `Bearer ${token}`,
				"Content-Type": "multipart/form-data"
			}
		}).then((res)=>{
			console.log("success")
			console.log(res)
			navigate("/search")
		}).catch((err)=>{
			console.log("failed")
			console.log(err)
		})
	}

    const onChange = (e) => {
		setInputData({...inputData,[e.target.name]:e.target.value})
	}
	const onChangeFoto = (e) => {
		setFoto(e.target.files[0])
		e.target.files[0] && setInputData({...inputData, foto_url: URL.createObjectURL(e.target.files[0])})
		console.log(e.target.files)
	}
    const handleKategoriChange = (event) => {
        setSelectedKategori(event.target.value);
        setInputData({...inputData, idkategori: event.target.value});
      };
    return(
        <>
        <Navigation />
        <div
  className="container-fluid d-flex justify-content-center w-100"
  style={{ width: 1500, marginTop: 80, marginLeft: 0, marginRight: 200 }}
>
  <form onSubmit={postData}>
  {foto && <img src={inputData.foto_url} width={500} />}
					<div className="form-group">
						<label htmlFor="foto">Foto</label>
						<input type="file" className="form-control" id="foto" required onChange={onChangeFoto} />
					</div>
    <div className="form-group mt-3">
      <label htmlFor="" />
      <input
        type="text"
        style={{ width: 600 }}
        name="namaresep"
        id="namaresep"
        className="form-control"
        placeholder="Title"
        aria-describedby="helpId"
        required onChange={onChange}
      />
      <small id="helpId" className="text-muted" />
    </div>
    <div className="form-group mt-3">
      <label htmlFor="" />
      <input
        type="text"
        style={{ width: 600, height: 200 }}
        name="komposisi"
        id="komposisi"
        className="form-control"
        placeholder="Ingredients"
        aria-describedby="helpId"
        required onChange={onChange}
      />
      <small id="helpId" className="text-muted" />
    </div>
    <div className="form-group mt-3">
      <label htmlFor="kategori">Kategori</label>
      <select
        className="form-control"
        id="idkategori"
        name="idkategori"
        value={selectedKategori}
        onChange={handleKategoriChange}
      >
        <option value="">Select kategori...</option>
        <option value="481a7b2d-ec3c-420a-bbd7-9690ac71f6d0">Main Course</option>
        <option value="32476d0f-9e16-4e81-a2f7-00a434ed89f3">Appetizer</option>
        <option value="2bf1fc8e-fa70-4eaf-96f4-350d0c2148fe">Dessert</option>
      </select>
      <small id="helpId" className="text-muted"></small>
    </div>
    <div className="d-flex justify-content-center">
      <button
        type="submit"
        className="btn btn-warning mt-5"
        style={{
          color: "white",
          padding: "10px 100px 10px 100px",
          marginBottom: 100
        }}
      >
        Post
      </button>
    </div>
  </form>
</div>
<Footer />
        </>
    )
}