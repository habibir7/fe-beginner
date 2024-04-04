import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from './pages/home';
import Register from './pages/register';
import "bootstrap/dist/css/bootstrap.min.css";
import Login from './pages/login';
import Search from './pages/search';
import DetailMenu from './pages/detail_menu';
import UserResep from './pages/user_resep';
import UpdateResep from './pages/update_resep';
import CreateMenu from './pages/create_menu';
import { EditProfile } from "./pages/user_edit";
import Auth from "./component/Auth";


function App() {


  return (
    <>
    <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Navigate to="/home" replace={true} />}/>
                    <Route path="/home" element={<Home />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/create_menu" element={
                    <Auth>
                    <CreateMenu />
                    </Auth>} />
                    <Route path="/search" element={<Search />} />
                    <Route path="/detail_menu/:id" element={<DetailMenu />} />
                    <Route path="/user_resep" element={
                    <Auth>
                      <UserResep />
                    </Auth>} />
                    <Route path="/update_resep/:id" element={
                    <Auth>
                      <UpdateResep />
                    </Auth>} />
                    <Route path="/edit_profile" element={
                    <Auth>
                    <EditProfile />
                    </Auth>
                    } />
                </Routes>
            </BrowserRouter>
    </>
  )
}

export default App
