import Navigation from "../component/navigation"
import Footer from "../component/footer"
import axios from "axios"
import { useState,useEffect } from "react"
import { Link } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { getResepUser } from "../redux/action/resep"


export default function UserResep(){
  const dispatch = useDispatch()
	const resepuser = useSelector((state)=>state.resepuser)
  const authdata = useSelector((state) => state.auth.data);
	console.log(resepuser)
	
	useEffect(()=>{
		dispatch(getResepUser(authdata.userData.idusers))
	},[])

    const  [data,setData] = useState([])



    return(
        <>
        <Navigation />
        <nav className="navbar navbar-expand-lg">
  <div className="container-fluid">
    <ul
      className="nav navbar-nav"
      style={{
        borderBottomWidth: 10,
        borderBottomColor: "goldenrod",
        borderBottomStyle: "solid"
      }}
    >
      <li>
        <a
          className="navbar text-decoration-none disabled"
          href="profile_recipe.html"
          style={{
            marginLeft: 50,
            marginRight: 80,
            color: "black",
            fontSize: 40,
            fontWeight: "bold"
          }}
        >
          Recipes
        </a>
      </li>
      <li>
        <a
          className="navbar text-decoration-none disabled"
          href="profile_bookmark.html"
          style={{
            marginRight: 80,
            color: "black",
            fontSize: 40,
            fontWeight: "bold",
            opacity: "25%"
          }}
        >
          Bookmarked
        </a>
      </li>
      <li>
        <a
          className="navbar text-decoration-none disabled"
          href=""
          style={{
            marginRight: 80,
            color: "black",
            fontSize: 40,
            fontWeight: "bold",
            opacity: "25%"
          }}
        >
          Liked
        </a>
      </li>
    </ul>
  </div>
</nav>
{resepuser.isLoading ? 
			<div className="alert alert-primary">loading ...</div>
			: null}

{resepuser.isSuccess && resepuser.data ? resepuser.data.map((item,index)=>(
<div className="row m-5 align-items-center" style={{ width: 750 }} key={index}>
  <div className="col-5 m-0">
    <img
      src={item.foto}
      style={{ borderRadius: 10, width: 250, height: 250 }}
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
      {item.namaresep}
    </a>
    <p className="mt-3" style={{ fontSize: 20 }}>
      {data.komposisi}
    </p>
    <p className="bg-warning" style={{ textAlign: "center", borderRadius: 5 }}>
      10 Likes - 12 Comment - 3 Bookmark
    </p>
    <div className="profile d-flex flow-row align-items-center">
        <Link to={`/update_resep/${item.idresep}`}>
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
      >
        Delete Menu
      </button>
    </div>
  </div>
</div>
)) : null}

        <Footer />
        </>
    )
}