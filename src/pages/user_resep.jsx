import Navigation from "../component/navigation"
import Footer from "../component/footer"
import axios from "axios"
import { useState,useEffect } from "react"
import { Link } from "react-router-dom"

const base_url = import.meta.env.VITE_BASE_URL




export default function UserResep(){
    const [token,setToken] = useState(null)
    useEffect(()=>{
        let getToken = localStorage.getItem("token")
        setToken(getToken)
      },[localStorage])

    const  [data,setData] = useState([])
    async function getData(){
        try{
                let res = await axios.get(`${base_url}/resep/users/20e12955-cc62-410c-bbcb-70a05d4e8fff`)
                console.log(res.data.data)
                setData(res.data.data)
        }catch(err){
                console.log(err)
        }
    }

    async function deleteData(id) {
        try {
          await axios.delete(`${base_url}/resep/${id}`,{
          headers: {
            "Authorization" : `Bearer ${token}`
          }});
          // Reload the data after successful deletion
          getData();
        } catch (err) {
          console.error(err);
        }
      }

    useEffect(()=>{
        getData()
    },[])

    useEffect(()=> {
        console.log(data)
    },[data])


    return(
        <>
        <Navigation />
    {data ? (
<div className="row m-5" style={{ width: 750 }}>
  <div className="col-7 m-0">
    <img
      src={data.foto}
      style={{ borderRadius: 10 }}
      className="img-fluid"
      alt=""
    />
  </div>
  
  <div className="col-5" >
    <a
      href="detail_menu.html"
      style={{
        textDecoration: "none",
        color: "black",
        fontSize: 25,
        fontWeight: "bold",
        paddingRight: 75
      }}
    >
      {data.namaresep}
    </a>
    <p className="mt-3" style={{ fontSize: 20 }}>
      {data.komposisi}
    </p>
    <p className="bg-warning" style={{ textAlign: "center", borderRadius: 5 }}>
      10 Likes - 12 Comment - 3 Bookmark
    </p>
    <div className="profile d-flex flow-row align-items-center">
        <Link to={`/update_resep/${data.idresep}`}>
        <button
          type="submit"
          className="btn btn-info "
          style={{ padding: "2px 25px 2px 25px", marginRight: 20 }}
        >
          Edit Menu
        </button>
      </Link>
      <button
        type="submit"
        className="btn btn-danger "
        style={{ padding: "2px 25px 2px 25px" }}
        onClick={() => deleteData(data.idresep)}
      >
        Delete Menu
      </button>
    </div>
  </div>
</div>
) : null}

        <Footer />
        </>
    )
}