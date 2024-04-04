import Navigation from "../component/navigation"
import Footer from "../component/footer"
import axios from "axios";
import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { putMenu } from "../redux/action/resep";
import { useDispatch,useSelector } from "react-redux";
import { getResepByID } from "../redux/action/resep";




export default function UpdateResep(){
  const dispatch = useDispatch()
	const update_resep = useSelector((state)=>state.update_resep)
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

		dispatch(putMenu(id,bodyData,navigate))
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
	
    const resepdetail = useSelector((state)=>state.resepdetail.data)
    
    useEffect(()=>{
      dispatch(getResepByID(id))
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
       <img src={resepdetail ? inputData.foto_url ? inputData.foto_url : resepdetail.foto : null} style={{width: 600,height:600}} />
					<div className="form-group">
						<label htmlFor="foto"></label>
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
        defaultValue={resepdetail ? (resepdetail.namaresep ? resepdetail.namaresep : null) : null}
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
            resepdetail ? (resepdetail.komposisi ? resepdetail.komposisi : null) : null
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
{update_resep.isLoading ? 
			<div className="alert alert-primary">loading ...</div>
			: null}
			{update_resep.isError ? 
			<div className="alert alert-danger">Post Menu Failed : {update_resep.ErrorMessage ?? "-"}</div>
			: null}
        <Footer />
        </>
    )
}