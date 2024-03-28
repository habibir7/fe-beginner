import Navigation from "../component/navigation"
import Footer from "../component/footer"
import axios from "axios";
import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const base_url = import.meta.env.VITE_BASE_URL




export default function UpdateResep(){
    const [token,setToken] = useState(null)
    useEffect(()=>{
        let getToken = localStorage.getItem("token")
        setToken(getToken)
      },[localStorage])
      const navigate = useNavigate();
    const [foto, setFoto] = useState();
    const [inputData, setInputData] = useState({
        namaresep: "",
        komposisi: "",
        idkategori: "",
        foto: "",
    });

    const putData = (event) => {
		event.preventDefault()
		let bodyData = new FormData()
		bodyData.append("namaresep",inputData.namaresep)
		bodyData.append("komposisi",inputData.komposisi)
		bodyData.append("idkategori",inputData.idkategori)
		bodyData.append("foto",foto)

		axios.put(base_url+"/resep/"+id,bodyData,{
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

    const [data,setData] = useState(null)
	const {id} = useParams()
    const [selectedKategori, setSelectedKategori] = useState('');
	
	async function getData() {
		try{
			let res = await axios.get(`${base_url}/resep/${id}`)
			console.log(res.data.data)
			setData(res.data.data)
		} catch(err){
			console.log(err)
		}
	}
    
    useEffect(()=>{
		getData()
		console.log(id)
	},[])

    const handleKategoriChange = (event) => {
        setSelectedKategori(event.target.value);
        setInputData({...inputData, idkategori: event.target.value});
      };

	useEffect(()=>{
		console.log(data)
	},[data])
    
    return(
        <>
        <Navigation />
        <div
  className="container-fluid d-flex justify-content-center w-100"
  style={{ width: 1500, marginTop: 80, marginLeft: 0, marginRight: 200 }}
>
  <form action="" onSubmit={putData}>
    <div className="form-group">
      <label htmlFor="" />
      <span>
      {foto && <img src={inputData.foto_url} width={500} />}
					<div className="form-group">
						<label htmlFor="foto">Foto</label>
						<input type="file" className="form-control" id="foto" required onChange={onChangeFoto} />
					</div>
      </span>
      <small id="helpId" className="text-muted" />
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
        defaultValue={data ? (data.namaresep ? data.namaresep : null) : null}
        aria-describedby="helpId"
        onChange={onChange}
      />
      <small id="helpId" className="text-muted" />
    </div>
    <div className="form-group mt-3">
      <label htmlFor="" />
      <textarea
        style={{ width: 600, height: 200, textAlign: "left" }}
        name="komposisi"
        id="komposisi"
        className="form-control"
        placeholder="Ingredients"
        aria-describedby="helpId"
        defaultValue={
            data ? (data.komposisi ? data.komposisi : null) : null
        }
        onChange={onChange}
      />
      <small id="helpId" className="text-muted" />
    </div>
    <div className="form-group mt-3">
      <label htmlFor="kategori">Kategori</label>
      <select
        className="form-control"
        id="idkategori"
        name="idkategori"
        value={
            selectedKategori
        }
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