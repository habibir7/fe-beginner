import { combineReducers } from "redux";
import auth from "./auth"
import resep from "./resep"
import resepdetail from "./resepdetail"
import resepuser from "./resepuser"
import create_resep from "./create_resep"
import update_resep from "./update_resep"
import register from "./register"
import update_user from "./update_user"

const rootReducers = combineReducers({
	auth,
	register,
	resep,
	resepdetail,
	resepuser,
	create_resep,
	update_resep,
	update_user
})

export default rootReducers